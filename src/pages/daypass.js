import styles from "@scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import PriceCards from "@components/product/priceCards";
import { serialize } from "next-mdx-remote/serialize";
import Banner from "@components/product/banner";

export default function DayPass({ attributes }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const pricingCategories = [
    { title: "Use Our Gear!", data: stateAttributes.gear },
    { title: "Have Your Own Gear?", data: stateAttributes.noGear },
    { title: "Forgot Something?", data: stateAttributes.Individual },
  ];

  const bannerCategory = {
    title: "Climb Time Indy",
    headline: "Day Passes",
    desc: "Climb as many times as you want for less than the cost of 3 day passes. The best value in the Indianapolis climbing community.",
    callToAction:
      "Sign Up for a Climb Time Indy Day Pass and enjoy the benefits.",
    src: "/img/testingHorz.png",
    // src: "/img/testing.png",
    alt: "Day Pass Banner",
  };

  return (
    <>
      <section className={styles.sectionComponent}>
        <article>
          <Banner category={bannerCategory} />
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
