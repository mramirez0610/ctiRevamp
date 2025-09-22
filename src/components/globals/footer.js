import styles from "@scss/components/footer.module.scss";
import MapDisplay from "@components/map";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <MapDisplay /> */}
      <p>&copy; 2024 Climb Time Indy</p>
      <p>8750 Corporation Dr, Indianapolis, IN 46256</p>

      <div className={styles.hours}>
        <h4>Gym hours:</h4>
        M-F 11am – 10pm
        <br />
        SAT 9am – 10pm
        <br />
        SUN 11am – 10pm
      </div>
      <br />
      <div className={styles.contact}>
        <h4>Get in Touch:</h4>
        <p>Phone: 317-596-3335</p>
        <p>Email: info@ClimbTimeIndy.com</p>
      </div>
    </footer>
  );
}
