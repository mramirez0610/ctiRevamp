import styles from "@/scss/pages/priceCards.module.scss";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Image from "next/image";

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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "50vw",
                height: "fit-content",
              }}
            >
              <h1 style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                Get Unlimited Access to all our Services
              </h1>
              <p
                style={{
                  fontWeight: "800",
                  color: "#1d4283",
                  fontSize: "1.25rem",
                }}
              >
                Climb Time Indy
                <br />
                Memberships
              </p>
              <p style={{ fontWeight: "400", fontSize: ".8rem" }}>
                Climb as many times as you want for less than the cost of 3 day
                passes. The best value in the Indianapolis climbing community.
              </p>
              <p style={{ fontWeight: "600", fontSize: ".8rem" }}>
                Sign Up for a Climb Time Indy Membership and enjoy the benefits.
                <br />
                Learn more about our memberships below.
              </p>
            </div>
            <div style={{ width: "50vw" }}>
              <img
                src="/img/photo1.webp"
                alt="photo"
                width="100%"
                height="fit-content"
                className={styles.imageClip}
              />
            </div>
          </div>
          <div className={styles.pricesCards}>
            <div className={styles.pricesGroupOuter}>
              {memberships.map((type, k) => (
                <div key={k} className={styles.pricesGroupInner}>
                  <div className={styles.pricesGroupItems}>
                    <ul>
                      <h2>{type.title}</h2>
                      {type.prices.map((example, k) => (
                        <div key={k}>
                          <h4>{example.name}</h4>
                          <h5>Price - ${example.price}</h5>
                          <p>{example.description}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
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
