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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "50vw",
                height: "fit-content",
                margin: "2.5vw",
              }}
            >
              <h1 style={{ fontWeight: "600", fontSize: "1em" }}>
                Come Climb with us for a Day!
              </h1>
              <p
                style={{
                  fontWeight: "800",
                  color: "#1d4283",
                  fontSize: "1em",
                }}
              >
                Climb Time Indy
                <br />
                DayPass
              </p>
              <p style={{ fontWeight: "400", fontSize: ".6em" }}>
                Climb all day and try your hands at top ropes and Bouldering!
              </p>
              <p style={{ fontWeight: "600", fontSize: ".6em" }}>
                Organize a group and climb with your friends.
                <br />
                Learn more about our daypasses below.
              </p>
            </div>
            <div style={{ width: "50vw" }}>
              <img
                src="/img/photo3.webp"
                alt="photo"
                width="100%"
                height="fit-content"
                className={styles.imageClip}
              />
            </div>
          </div>
          <div className={styles.pricesCards}>
            <div className={styles.pricesGroupOuter}>
              <div className={styles.pricesGroupItems}>
                <ul>
                  <h1 className={styles.priceTitle}>Gear</h1>
                  {gear.map((example, k) => (
                    <div key={k}>
                      <p className={styles.priceText}>{example.name}</p>
                      <p className={styles.priceText}>
                        Price -{" "}
                        <span className={styles.priceNumber}>
                          ${example.price}
                        </span>
                      </p>
                      <p className={styles.priceText}>{example.description}</p>
                    </div>
                  ))}
                </ul>
              </div>
              <div className={styles.pricesGroupInner}>
                <div className={styles.pricesGroupItems}>
                  <ul>
                    <h1 className={styles.priceTitle}>No Gear</h1>
                    {noGear.map((example, k) => (
                      <div key={k}>
                        <p className={styles.priceText}>{example.name}</p>
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
              <div className={styles.pricesGroupItems}>
                <ul>
                  <h1 className={styles.priceTitle}>Individual</h1>
                  {Individual.map((example, k) => (
                    <div key={k}>
                      <p className={styles.priceText}>{example.name}</p>
                      <p className={styles.priceText}>
                        Price -{" "}
                        <span className={styles.priceNumber}>
                          ${example.price}
                        </span>
                      </p>
                      <p className={styles.priceText}>{example.description}</p>
                    </div>
                  ))}
                </ul>
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
