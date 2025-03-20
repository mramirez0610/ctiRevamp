import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/scss/components/hero.module.scss";
import { ArrowDown, ArrowCircleDown } from "@phosphor-icons/react";

import photo1 from "../assets/photo0.png";
import photo2 from "../assets/photo1.png";
import photo3 from "../assets/photo2.png";
import photo4 from "../assets/photo3.png";

const images = [
  { src: photo1, name: "photo1" },
  { src: photo2, name: "photo2" },
  { src: photo3, name: "photo3" },
  { src: photo4, name: "photo4" },
];

const interval = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.hero}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: index === currentIndex ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 1s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={image.src}
            alt={`${image.name}`}
            height={0}
            width={0}
            className={styles.img}
          />

          <div
            className={`${styles.scroll} ${scrolled ? styles.scrolled : ""}`}
          >
            <span>Scroll For Rates</span>
            <ArrowCircleDown size={32} />
          </div>
        </div>
      ))}
      <div className={styles.greet}>
        <div className={styles.intro}>
          <h1>Climb Time Indy</h1>
          <h2>Indiana's first climbing gym.</h2>
          {/* <p>
            Climb Time Indy is the best climbing gym in Indianapolis. We offer a
            variety of climbing walls, fitness classes, and gear for sale. Fun
            for all ages and abilities!
          </p> */}
        </div>

        <div className={styles.waiver}>
          <h2>Get started below.</h2>
          <button className={styles.button}>
            <a href="/about">Sign Our Waiver</a>
          </button>
        </div>
      </div>
    </div>
  );
}
