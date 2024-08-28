import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import styles from "@/scss/components/socialMediaButtons.module.scss";
export default function SocialMediaButtons() {
  return (
    <div className={styles.buttonsContainer}>
      <div style={{ display: "flex" }}>
        <button
          className={styles.socialMediaButton}
          onClick={() => window.open("https://www.facebook.com/climbtimeindy")}
        >
          <FacebookLogo className={styles.socialMediaIcon} size={36} />
        </button>
        <button
          className={styles.socialMediaButton}
          onClick={() =>
            window.open("https://www.instagram.com/climbtimeindy/")
          }
        >
          <InstagramLogo className={styles.socialMediaIcon} size={36} />
        </button>
      </div>
    </div>
  );
}
