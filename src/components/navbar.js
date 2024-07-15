import styles from "../scss/comp.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="https://waiver.smartwaiver.com/w/5dc496b7cf021/web/">
            Waiver
          </Link>
        </li>
      </ul>
    </nav>
  );
}
