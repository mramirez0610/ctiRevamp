import styles from "@scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import PriceCards from "@components/product/priceCards";
import { serialize } from "next-mdx-remote/serialize";
import Banner from "@components/product/banner";
import BackgroundImage from "@/components/product/backgroundImage";

export default function DayPass({ attributes }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const imageArray = stateAttributes.image;

  const imageObj = {
    src: imageArray.desk,
    srcMobile: imageArray.mobile,
    alt: imageArray.alt || "",
  };

  const pricingCategories = [
    { title: "Use Our Gear!", data: stateAttributes.gear },
    { title: "Have Your Own Gear?", data: stateAttributes.noGear },
    { title: "Forgot Something?", data: stateAttributes.individual },
  ];

  const bannerCategory = stateAttributes.banner;

  const bannerItem = {
    title: bannerCategory.title,
    headline: bannerCategory.headline,
    desc: bannerCategory.desc,
    callToAction: bannerCategory.callToAction,
  };

  return (
    <>
      <section className={styles.sectionComponent}>
        <article>
          <BackgroundImage image={imageObj} />
          <Banner banner={bannerItem} />
          <PriceCards pricingCategories={pricingCategories} />
        </article>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "daypass.mdx");
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
