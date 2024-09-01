import Image from "next/image";
import styles from "@/scss/components/cardComponent.module.scss";

export default function CardComponent({ title, description, image }) {
  return (
    <div className={styles.card}>
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
