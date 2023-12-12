import FooterSection from "@/components/footerSection/FooterSection";
import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div>
      <div className={styles.coverImage}>
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h2>GET IN TOUCH</h2>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
          <button>
            Submit <img src="/right.svg" alt="Chevron Right" />
          </button>
        </div>
        <div className={styles.contactInfo}>
          <img src="/chef-1.png" />
          <p>
            <span>
              <img src="/telephone-fill.svg" />{" "}
            </span>
            &nbsp;+91, 8860357937, 7669237937, 9582307779
          </p>
          <p>
            <span>
              <img src="/envelope-fill.svg" />{" "}
            </span>
            &nbsp;info@foodbae.com
          </p>
        </div>
      </div>
      <FooterSection hideSocialLinks />
    </div>
  );
}
