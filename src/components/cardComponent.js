import Image from "next/image";
import styles from "@/scss/components/cardComponent.module.scss";
import { useRef } from "react";

export default function CardComponent({ title, description, image }) {
  // const boundingRef = (useRef < DOMRect) | (null > null);
  const boundingRef = useRef(null);

  const handleMouseEnter = (e) => {
    boundingRef.current = e.target.getBoundingClientRect();
    e.target.classList.add(styles.noTransition); // Disable transition on mouse enter
  };

  const handleMouseMove = (e) => {
    if (!boundingRef.current) return;

    const x = e.clientX - boundingRef.current.left;
    const y = e.clientY - boundingRef.current.top;

    const xPercent = x / boundingRef.current.width;
    const yPercent = y / boundingRef.current.height;

    const xRotation = (0.5 - xPercent) * 10;
    const yRotation = (0.5 - yPercent) * 10;

    e.target.style.transform = `perspective(800px) rotateX(${-yRotation}deg) rotateY(${xRotation}deg)`;
  };

  const handleMouseLeave = (e) => {
    boundingRef.current = null;
    e.target.classList.remove(styles.noTransition); // Enable transition on mouse leave
    e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        layout="responsive"
      />
      <div className={styles.cardTextContainer}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    </div>
  );
}
