import matter from "gray-matter";
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export async function getStaticProps(fileName) {
  const filePath = path.join(process.cwd(), "content", { fileName });
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
