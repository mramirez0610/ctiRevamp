import styles from "@scss/components/banner.module.scss";

export default function Banner({ category }) {
  return (
    <div className={styles.banner}>
      <div className={styles.infoBackdrop}>
        <div className={styles.backdrop}></div>
        <div className={styles.infoCol}>
          <h1>Get Unlimited Access to all our Services</h1>
          <p className={styles.sub}>
            {category.title}
            <br />
            {category.headline}
          </p>
          <p className={styles.para}>{category.desc}</p>
          <p className={styles.paraS}>
            {category.callToAction}
            <br />
            Learn more below.
          </p>
        </div>
      </div>

      <div className={styles.imgSec}>
        <img
          src={category.src}
          alt={category.alt || "banner image"}
          width="100%"
          height="fit-content"
          className={styles.img}
        />
      </div>
    </div>
  );
}
