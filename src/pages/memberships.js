import styles from "@scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
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

  const bannerCategory = {
    title: "Climb For A While",
    headline: "CTI Memberships",
    desc: "Climb as many times as you want for less than the cost of 3 day passes. The best value in the Indianapolis climbing community.",
    callToAction:
      "Sign Up for a Climb Time Indy Membership and enjoy the benefits.",
    src: "/img/testingHorz.png",
    alt: "Memberships Banner",
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
