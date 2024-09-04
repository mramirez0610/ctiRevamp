import styles from "@/scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import photo1 from "../../public/img/photo1.webp";

export default function DayPass({ attributes, mdxSource }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const { title, gear, noGear, Individual } = stateAttributes;
  return (
    <>
      <section className={styles.sectionComponent}>
        <article>
          <h1>{title}</h1>
          <div className={styles.pricesBackground}>
            <div className={styles.test}>
              <div className={styles.pricesCards}>
                <div className={styles.pricesGroupOuter}>
                  <div className={styles.pricesGroupItems}>
                    <ul>
                      <h2>Gear</h2>
                      {gear.map((example, k) => (
                        <div key={k}>
                          <h4>{example.name}</h4>
                          <h5>Price - {example.price}</h5>
                          <p>{example.description}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.pricesGroupInner}>
                    <div className={styles.pricesGroupItems}>
                      <ul>
                        <h2>No Gear</h2>
                        {noGear.map((example, k) => (
                          <div key={k}>
                            <h4>{example.name}</h4>
                            <h5>Price - {example.price}</h5>
                            <p>{example.description}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.pricesGroupItems}>
                    <ul>
                      <h2>Individual</h2>
                      {Individual.map((example, k) => (
                        <div key={k}>
                          <h4>{example.name}</h4>
                          <h5>Price - {example.price}</h5>
                          <p>{example.description}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MDXRemote {...mdxSource} />
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
