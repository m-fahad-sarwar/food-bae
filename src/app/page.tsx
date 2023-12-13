import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import FooterSection from "@/components/footerSection/FooterSection";

const features = [
  { title: "Taste Authentic Flavours in Canada", image: "/Authentic.webp" },
  { title: "Freshly Prepared Always", image: "/Fresh.webp" },
  { title: "Cleanliness & Hygiene Guaranteed", image: "/Hygiene.webp" },
  { title: "Highest rating by consumers", image: "/Highest-Rating.webp" },
];

const chefsGuidelines = [
  {
    title: "CLEANING & SANITIZATION",
    description:
      "Every Home chef ensures that hands are washed regularly every 15 minutes and their Home Kitchen is cleaned and sanitized 2 times daily.",
    img: "/CLEANING-SANITIZATION.webp",
  },
  {
    title: "HEATHY & FRESHLY PREPARED",
    description:
      "Food is freshly prepared by home chefs when they get an order. All the ingredients used are Fresh and Top quality to ensure food served is Healthy.",
    img: "/HEATHY-FRESHLY-PREPARED.webp",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <div className={styles.exploreContainer}>
        <div className={styles.featuresList}>
          <h3>Explore Home Food Delivery</h3>
          <h4>&apos;Made By Home Chefs&apos;</h4>
          {features.map((feature) => (
            <div key={feature.title} className={styles.feature}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={54}
                height={54}
              />
              <h5>{feature.title}</h5>
            </div>
          ))}
        </div>
        <img
          src={"/app-screens.webp"}
          className={styles.appScreens}
          alt="App Screens"
        />
      </div>
      <div className={styles.bgImage}>
        <div className={styles.bgColor}>
          <div className={styles.textContainer}>
            <p>
              Food Bae is a reliable and convenient Home food delivery service.
              With Food Bae, you can enjoy a delicious and healthy meal.
            </p>
            <p>
              The service is designed to cater to busy individuals who don’t
              have the time to cook or those who want to enjoy a home-cooked
              meal without having to prepare it themselves.
            </p>
            <p>
              Food Bae&apos;s network of experienced and skilled home chefs
              prepare the meals with fresh and high-quality ingredients,
              ensuring that each meal is tasty and healthy.Food Bae offers a
              diverse menu of dishes, with options for dietary restrictions.
            </p>
            <p>
              Our <span className="primaryColor">Home Food Delivery</span>{" "}
              service also provides customized meal plans to cater to specific
              dietary needs.With reliable service and high-quality food,
              Food Bae is the perfect solution for anyone looking for a
              convenient and healthy Food.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.safetyStandards}>
        <div className={styles.saftetyHeading}>
          <img src="/logo.jpeg" className={styles.logoImage} />
          <h2>Our 100% Safety Standards</h2>
          <img src="/safe.webp" />
        </div>
        <div className={styles.guidelinesContainer}>
          <div className={styles.chefsGuidelines}>
            <h4>HOME CHEFS COOKING GUIDELINES.</h4>
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
      <div className={styles.cateringContainer}>
        <div className={styles.cateringContainerBGColor}>
          <div className={styles.catering}>
            <h1>
              We Also Provide <br /> Catering Services
            </h1>
            <a href="#">
              Book For Catering <img src="/right.svg" />
            </a>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
