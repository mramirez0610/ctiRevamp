import Hero from "@/components/hero";
import Head from "next/head";
import Script from "next/script";

import { promises as fs } from "fs";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import NavigationCards from "@/components/navigationCards";

export default function Home({ attributes }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  return (
    <>
      <Head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
      </Head>
      <Hero />
      <NavigationCards />
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
