import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={"/logo.jpeg"} height={21} width={247} alt="Logo" />
      </Link>
      <div>
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <div className={styles.hamburgerLines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <Link href="/" className={`${styles.link} active`}>
              Home
            </Link>
            <Link href="/about" className={styles.link}>
              About Us
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact Us
            </Link>
            <Link href="/cook-with-us" className={styles.link}>
              Cook with us
            </Link>
          </div>
        </div>
      </div>
      <Script id="headerScript">{`document.querySelectorAll('a').forEach(e=>{e.addEventListener('click',function(){document.querySelectorAll('a').forEach(e=>{e.classList.remove('active')}); this.classList.add('active')})})`}</Script>
    </header>
  );
}
