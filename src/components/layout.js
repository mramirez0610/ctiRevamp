import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/scss/layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
