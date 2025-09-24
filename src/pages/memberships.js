import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import ProductPage from "@/components/product/ProductPage";

export default function Memberships({ attributes }) {
  return <ProductPage attributes={attributes} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "memberships.mdx");
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
