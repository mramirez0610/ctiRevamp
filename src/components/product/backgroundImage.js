import styles from "@scss/components/backgroundImage.module.scss";

export default function BackgroundImage({ image }) {
  return (
    <div className={styles.backgroundImage}>
      <img
        src={image.src}
        alt={image.alt || "banner image"}
        width="100%"
        height="fit-content"
        className={styles.image}
      />
    </div>
  );
}
