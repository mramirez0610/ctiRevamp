import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function PunchPass({ attributes, mdxSource }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const { title, passes } = stateAttributes;
  return (
    <section>
      <article>
        <h1>{title}</h1>
        <ul>
          {passes.map((pass, k) => (
            <li key={k}>
              <h4>{pass.name}</h4>
              <h5>{pass.price}</h5>
              <p>{pass.description}</p>
            </li>
          ))}
        </ul>
        <MDXRemote {...mdxSource} />
      </article>
    </section>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "punchPass.mdx");
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
