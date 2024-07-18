import styles from "@/scss/comp.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Climb Time Indy</p>
      <p>Address: 8750 Corporation Dr, Indianapolis, IN 46256</p>
      <p>
        Gym hours:
        <br />
        M-F 11am – 10pm
        <br />
        SAT 9am – 10pm
        <br />
        SUN 11am – 10pm
      </p>

      <p>Phone: 317-596-3335</p>
      <p>Email: info@ClimbTimeIndy.com</p>
    </footer>
  );
}
