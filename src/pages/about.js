import styles from "@scss/pages/about.module.scss";
import matter from "gray-matter";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import {
  PictureLeftTextRight,
  PictureRightTextLeft,
} from "@components/pictureText";

const components = {
  PictureLeftTextRight: (props) => <PictureLeftTextRight {...props} />,
  PictureRightTextLeft: (props) => <PictureRightTextLeft {...props} />,
  div: (props) => <div className={styles.container}>{props.children}</div>,
};

export default function AboutPage({ source }) {
  try {
    return (
      <>
        <MDXRemote {...source} components={components} />
      </>
    );
  } catch (error) {
    console.error("Error rendering AboutPage:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading fileContent:", error);
  }
  const { data: attributes, content } = matter(fileContent);
  let mdxSource;
  try {
    mdxSource = await serialize(content);
  } catch (error) {
    console.error("Error serializing content:", error);
  }

  return {
    props: {
      attributes,
      source: mdxSource,
    },
  };
}
