import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function GroupBooking({ attributes, mdxSource }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const { title, examples } = stateAttributes;
  return (
    <section>
      <article>
        <h1>{title}</h1>
        <ul>
          {examples.map((example, k) => (
            <li key={k}>
              <h4>{example.name}</h4>
              <h5>{example.price}</h5>
              <p>{example.description}</p>
            </li>
          ))}
        </ul>
        <MDXRemote {...mdxSource} />
      </article>
    </section>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "groupBooking.mdx");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data: attributes, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      attributes,
      mdxSource,
    },
  };
}
