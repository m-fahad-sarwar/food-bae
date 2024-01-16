import FooterSection from "@/components/footerSection/FooterSection";
import React from "react";
import styles from "./page.module.css";

const chefsGuidelines = [
  {
    title: "Build your business",
    description:
      "Easily design your custom storefront and start selling to new and existing customers. Get marketing, menu building and customer support, and access the Cookin Marketplace in participating locations.",
    img: "/CLEANING-SANITIZATION.webp",
  },
  {
    title: "Be your own boss",
    description:
      "Create your own menu and choose only the days and hours that work for you. You’ve got total control over how, when and where you do your thing.",
    img: "/HEATHY-FRESHLY-PREPARED.webp",
  },
  {
    title: "We’ll take care of the logistics",
    description:
      "We manage the delivery, payment processing, and customer support, so you can enjoy getting paid to cook for hungry customers without the stress.",
    img: "/CONTACTLESS-DELIVERY.webp",
  },
];

const cuisineOptions = [
  { label: "Italian", value: "italian" },
  { label: "Japanese", value: "japanese" },
  { label: "Mexican", value: "mexican" },
  { label: "Indian", value: "indian" },
  { label: "Mediterranean", value: "mediterranean" },
  { label: "Chinese", value: "chinese" },
  { label: "Thai", value: "thai" },
];

export default function page() {
  return (
    <div>
      <div className={styles.coverImage}>
        <div>
          <h1>Cook with us</h1>
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h2>
            Your all-in-one online <br /> ordering and delivery platform.
          </h2>
          <p>
            The easiest way for local food creators to launch, manage & scale
            their food business.
          </p>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Phone Number" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <div className={styles.select}>
            <select>
              <option value="">Cuisine</option>
              {cuisineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <p style={{ textAlign: "left" }}>
            I agree to allow my phone number to be used for calls or texts
            regarding my application. Message & data rates may apply.
          </p>
          <button>
            Cook with us <img src="/right.svg" alt="Chevron Right" />
          </button>
        </div>
      </div>
      <div className={styles.safetyStandards}>
        <div className={styles.saftetyHeading}>
          <h2>How it works</h2>
        </div>
        <div className={styles.guidelinesContainer}>
          <div className={styles.chefsGuidelines}>
            {chefsGuidelines.map((guideline) => (
              <div key={guideline.title} className={styles.guideline}>
                <img src={guideline.img} alt={guideline.title} />
                <div>
                  <h5>{guideline.title}</h5>
                  <p>{guideline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection hideSocialLinks />
    </div>
  );
}
