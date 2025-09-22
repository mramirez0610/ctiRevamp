import styles from "@scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import PriceCards from "@components/product/priceCards";
import Banner from "@components/product/banner";

export default function Memberships({ attributes }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const pricingCategories = [
    { title: "Climb By Yourself!", data: stateAttributes.individual },
    { title: "Bring your family!", data: stateAttributes.family },
  ];

  const bannerCategory = stateAttributes.banner;

  const bannerItem = {
    title: bannerCategory.title,
    headline: bannerCategory.headline,
    desc: bannerCategory.desc,
    callToAction: bannerCategory.callToAction,
    src: bannerCategory.image.desk || bannerCategory.image.mobile || "",
    alt: bannerCategory.image.alt || "",
  };

  return (
    <>
      {/* create reusable head comp */}
      <Head>
        <title>{attributes?.metaTitle || `${bannerItem.title} — CTI`}</title>
        <meta
          name="description"
          content={attributes?.metaDescription || bannerItem.desc}
        />
        <link rel="canonical" href="https://your-domain.com/memberships" />
        <meta
          property="og:title"
          content={attributes?.metaTitle || bannerItem.title}
        />
        <meta
          property="og:description"
          content={attributes?.metaDescription || bannerItem.desc}
        />
        <meta property="og:image" content={bannerItem.src} />
      </Head>

      <section className={styles.sectionComponent}>
        <article>
          <Banner banner={bannerItem} />
          <PriceCards pricingCategories={pricingCategories} />
        </article>
      </section>
    </>
  );
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
