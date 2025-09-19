import Navbar from "./navbar";
import Footer from "./footer";
import styles from "@scss/components/layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
