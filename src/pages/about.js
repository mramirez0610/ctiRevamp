import styles from "@/scss/pages/about.module.scss";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

import Image from "next/image";
import photo1 from "../assets/photo0.png";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import SocialMediaButtons from "@/components/socialMediaButtons";
// import ImageComponent from "@/components/imageComponent";
import {
  PictureLeftTextRight,
  PictureRightTextLeft,
} from "@/components/pictureText";

const components = {
  ImageComponent: (props) => (
    <div className={styles.container}>
      <div className={styles.aboutContainerContent}>
        <div className={styles.aboutPhotoContainer}>
          {/* <ImageComponent
            {...props}
            photo={photo1}
            alt="photo1"
            className={styles.photoContainer}
          /> */}
        </div>
        <div className={styles.divLineVertical}></div>
        <div className={styles.aboutTextContainer}>
          <h1 className={styles.headerText}>About Us</h1>
          <p className={styles.paragraphText}>
            Since 1997, Climb Time Indy is dedicated to to providing the best
            that rock climbing has to offer. We are focused on maintaining a
            safe environment where climbers of all ability levels and ages can
            get better, learn more and above all else, have fun climbing. Climb
            Time offers a wide range of difficulty levels from very easy to
            moderate to extremely difficult, brought to you by some of the best
            route setters this side of the Mississippi. Routes are changed
            weekly in order to ensure there is always some thing new to
            challenge yourself with. Whether you are looking for powerful
            bouldering, sustained routes, or just a day out with the family,
            Climb Time Indy has what you are looking for. Come on by; we’d love
            for you to come climbing with us.
          </p>
        </div>
      </div>
    </div>
  ),
  PictureLeftTextRight: (props) => <PictureLeftTextRight {...props} />,
  PictureRightTextLeft: (props) => <PictureRightTextLeft {...props} />,
  SocialMediaButtons,
  div: (props) => <div className={styles.container}>{props.children}</div>,
};

export default function AboutPage({ source }) {
  try {
    return (
      <>
        <MDXRemote {...source} components={components} />
      </>
    );
  } catch (error) {
    console.error("Error rendering AboutPage:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  let fileContent;
  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading fileContent:", error);
  }
  const { data: attributes, content } = matter(fileContent);
  let mdxSource;
  try {
    mdxSource = await serialize(content);
  } catch (error) {
    console.error("Error serializing content:", error);
  }

  return {
    props: {
      attributes,
      source: mdxSource,
    },
  };
}
