import styles from "@/scss/comp.module.scss";
import Link from "next/link";
import logo from "../assets/cti_logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={logo} height={40} width={40} alt="Climb Time Indy Logo" />
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
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
          <Link href="/parties">Parties</Link>
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
