import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";

const features = [
  { title: "Taste Authentic Flavours of India", image: "/Authentic.webp" },
  { title: "Freshly Prepared Always", image: "/Fresh.webp" },
  { title: "Cleanliness & Hygiene Guaranteed", image: "/Hygiene.webp" },
  { title: "Try 1000+ Regional Dishes.", image: "/regional-dishes.webp" },
  { title: "Highest rating by consumers", image: "/Highest-Rating.webp" },
];

const riderGuidelines = [
  {
    title: "SANITIZATION STANDARDS",
    description:
      "All Delivery Riders have been trained to maintained high cleanliness standards and they carry a Kit of Mask, Hand Sanitizer, Gloves and Thermometer.",
    img: "/SANITIZATION-STANDARDS.webp",
  },
  {
    title: "CONTACTLESS HOME FOOD DELIVERY",
    description:
      "Every Food Package is picked up and delivered without any contact with the Home Chef and Customer. We follow a Contactless delivery policy.",
    img: "/CONTACTLESS-DELIVERY.webp",
  },
  {
    title: "RIDER SUPERVISION",
    description:
      "All the Delivery Riders are supervised daily for their temperature readings and conformity to Wearing a Mask, Hygiene and social distancing norms.",
    img: "RIDER-SUPERVISION.webp",
  },
];

const chefsGuidelines = [
  {
    title: "CLEANING & SANITIZATION",
    description:
      "Every Home chef ensures that hands are washed regularly every 15 minutes and their Home Kitchen is cleaned and sanitized 2 times daily.",
    img: "/CLEANING-SANITIZATION.webp",
  },
  {
    title: "MASK & SOCIAL DISTANCING",
    description:
      "All the Home Chefs usually don’t move of their homes. They wear a Mask and maintain social distancing of 6 Feet if they meet anyone.",
    img: "/MASK-SOCIAL-DISTANCING.webp",
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
          <p>
            Noida | G.Noida | Ghaziabad | Delhi | Gurgaon | Mumbai | Hyderabad |
            Bengaluru
          </p>
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
              Homefoodi is a reliable and convenient Home food delivery service
              that operates in several major Indian cities, including Noida,
              Delhi, Ghaziabad, Gurgaon, Hyderabad, Bangalore, and Mumbai. With
              Homefoodi, you can enjoy a delicious and healthy meal delivered
              straight to your doorstep without having to leave your house.
            </p>
            <p>
              The service is designed to cater to busy individuals who don’t
              have the time to cook or those who want to enjoy a home-cooked
              meal without having to prepare it themselves.
            </p>
            <p>
              it themselves. Homefoodi’s network of experienced and skilled home
              chefs prepare the meals with fresh and high-quality ingredients,
              ensuring that each meal is tasty and healthy.Homefoodi offers a
              diverse menu of Indian and international dishes, with options for
              vegetarian and non-vegetarian meals.
            </p>
            <p>
              Our <span className="primaryColor">Home Food Delivery</span>{" "}
              service also provides customized meal plans to cater to specific
              dietary needs.With reliable service and high-quality food,
              Homefoodi is the perfect solution for anyone looking for a
              convenient and healthy Online Food Delivery in these cities.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.safetyStandards}>
        <div className={styles.saftetyHeading}>
          <img src="/fav.webp" />
          <h2>Our 100% Safety Standards</h2>
          <img src="/safe.webp" />
        </div>
        <div className={styles.guidelinesContainer}>
          <div className={styles.riderGuidelines}>
            <h4>RIDERS DELIVERY GUIDELINES.</h4>
            {riderGuidelines.map((guideline) => (
              <div key={guideline.title} className={styles.guideline}>
                <img src={guideline.img} alt={guideline.title} />
                <div>
                  <h5>{guideline.title}</h5>
                  <p>{guideline.description}</p>
                </div>
              </div>
            ))}
          </div>
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
            <a href="#">Book For Catering</a>
          </div>
        </div>
      </div>
    </main>
  );
}
