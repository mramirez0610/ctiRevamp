import { useEffect, useState } from "react";
import styles from "@/scss/components/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/cti_logo.png";

const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        height={40}
        width={40}
        // layout="responsive"
        alt="Climb Time Indy Logo"
      />
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const productsDropdown = () => {
    return (
      <div className={styles.productsDropdown}>
        <Link href="/">Daypass</Link>
        <Link href="/">Memberships</Link>
        <Link href="/">Punch Pass</Link>
        <Link href="/">Fun</Link>
      </div>
    );
  };

  const handleProducts = (e) => {
    setShowDropdown(!showDropdown);
    e.preventDefault();
  };

  return (
    <>
      <div className={`${styles.mNavbar} ${scrolled ? styles.scrolled : ""}`}>
        <Logo />
        <div className={styles.hamburger} onClick={handleMobileNav}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={`${styles.mobileNav} ${mobileNav ? styles.active : ""}`}>
        <ul className={styles.mNav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/parties">Parties</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="https://waiver.smartwaiver.com/w/5dc496b7cf021/web/">
              Waiver
            </Link>
          </li>
        </ul>
      </div>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.webNav} ${scrolled ? styles.scrolled : ""}`}>
          <Logo />
          <ul className={styles.wNav}>
            <li className={scrolled ? styles.scrolled : ""}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/parties">Parties</Link>
            </li>
            <li onClick={handleProducts}>
              <Link href="">Products</Link>
              {showDropdown && productsDropdown()}
            </li>
            <li>
              <Link href="https://waiver.smartwaiver.com/w/5dc496b7cf021/web/">
                Waiver
              </Link>
            </li>
            <li>
              <Link href="https://cti-revamp.netlify.app/admin/index.html">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
