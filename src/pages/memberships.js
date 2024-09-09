import styles from "@/scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default function Memberships({ attributes, mdxSource }) {
  const [stateAttributes, setStateAttributes] = useState(attributes);

  useEffect(() => {
    setStateAttributes(attributes);
  }, [attributes]);

  const { title, memberships } = stateAttributes;
  return (
    <>
      <section className={styles.sectionComponent}>
        <article>
          <div className={styles.banner}>
            <div className={styles.infoCol}>
              <h1>Get Unlimited Access to all our Services</h1>
              <p className={styles.sub}>
                Climb Time Indy
                <br />
                Memberships
              </p>
              <p className={styles.para}>
                Climb as many times as you want for less than the cost of 3 day
                passes. The best value in the Indianapolis climbing community.
              </p>
              <p className={styles.paraS}>
                Sign Up for a Climb Time Indy Membership and enjoy the benefits.
                <br />
                Learn more about our memberships below.
              </p>
            </div>

            <div className={styles.imgSec}>
              <div className={styles.img}>
                <img
                  src="/img/photo3.webp"
                  alt="photo"
                  width="100%"
                  height="fit-content"
                  className={styles.imgClip}
                />
              </div>
            </div>
          </div>

          <div className={styles.pricesCards}>
            <div className={styles.pricesGroupOuter}>
              {memberships.map((type, k) => (
                <div key={k} className={styles.pricesGroupInner}>
                  <div className={styles.pricesGroupItems}>
                    <ul>
                      <h1 className={styles.priceTitle}>{type.title}</h1>
                      {type.prices.map((example, k) => (
                        <div key={k}>
                          <p className={styles.priceText}>
                            {example.name}
                            <br />
                            {example?.length}
                          </p>
                          <p className={styles.priceText}>{example?.desc}</p>
                          <p className={styles.priceText}>
                            Price -{" "}
                            <span className={styles.priceNumber}>
                              ${example.price}
                            </span>
                          </p>
                          <p className={styles.priceText}>
                            {example.description}
                          </p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <MDXRemote {...mdxSource} />
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
