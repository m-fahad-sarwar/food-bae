import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={styles.heroSecion}>
      <h1>
        We don&apos;t <br />
        Make it Until <br />
        You Order it!
      </h1>
      <Image src={"/qrcode.webp"} height={132} width={132} alt="QR Code" />
    </div>
  );
}
