import styles from "@scss/components/banner.module.scss";

export default function Banner({ banner }) {
  return (
    <div className={styles.banner}>
      <div className={styles.infoBackdrop}>
        <div className={styles.backdrop}></div>
        <div className={styles.infoCol}>
          <h2 className={styles.headline}>{banner.headline}</h2>
          <h1 className={styles.title}>{banner.title}</h1>
          <h3 className={styles.callToAction}>{banner.callToAction}</h3>

          <p className={styles.desc}>{banner.desc}</p>
          <p className={styles.paraS}>Learn more below.</p>
        </div>
      </div>
    </div>
  );
}
