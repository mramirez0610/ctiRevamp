import Hero from "@/components/hero";
import Prices from "@/components/prices";
import Head from "next/head";

import { promises as fs } from "fs";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";

export default function Home({ attributes }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const { title, day, bundle } = stateAttributes;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Hero />
      <Prices {...stateAttributes} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "ctiHome.mdx");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data: attributes } = matter(fileContent);

  return {
    props: {
      attributes,
    },
  };
}
