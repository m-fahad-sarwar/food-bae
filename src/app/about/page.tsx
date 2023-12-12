import FooterSection from "@/components/footerSection/FooterSection";
import React from "react";
import styles from "./page.module.css";

const aims = [
  {
    title: "OUR VISION",
    description:
      "Uniting People by Celebrating the Diversity of Traditional Food Culture.",
    image: "/vission.png",
  },
  {
    title: "OUR MISSION",
    description:
      "“GHAR GHAR STARTUP”: Empowering Women to Create a Healthy India.",
    image: "/mission.png",
  },
  {
    title: "OUR VALUES",
    description: "Compassion: Collaboration: Celebration",
    image: "/values.png",
  },
];

export default function page() {
  return (
    <div>
      <div className={styles.coverImage}>
        <div>
          <h1>About</h1>
        </div>
      </div>
      <div className={styles.aimsContainer}>
        <div>
          {aims.map((aim) => {
            return (
              <div key={aim.title} className={styles.aim}>
                <img src={aim.image} alt={aim.title} />
                <div>
                  <h2>{aim.title}</h2>
                  <p>{aim.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <img src="/empower.jpeg" alt="Empower Women" />
      </div>
      <div className={styles.aboutText}>
        <p>
          <strong>About Us:&nbsp;</strong>
        </p>
        <p>
          Homefoodi is World’s 1st Mobile Application for Home Food made by
          Genuine Home Chefs. Homefoodi was started to Create India’s Largest
          self-employment opportunity for women to earn from home being a Home
          Chef. Food is life and we are committed to Create a Fit &amp; Healthy
          India by offering{" "}
          <a href="https://homefoodi.com/home-food-delivery-in-pitampura-delhi/">
            Healthy &amp; Hygienic Home Cooked Food
          </a>
          .
        </p>
        <p>
          We are reviving the Culture of Home Food by offering people a variety
          of Traditional cuisines from every state of India.Homefoodi is
          enabling Localized Home Food Experiences by delivering a Delicious
          variety of Authentic cuisines cooked by Talented Home Chefs. Home
          Chefs have learned the art of cooking through their unwavering passion
          and coached by their mother and grandmother to sprinkle love in food.
        </p>
        <p>
          Homefoodi is very selective and responsible in selecting Home Chefs.
          As a Company Policy, our Chef Enrolment team visits every aspiring
          Home chef to check for Kitchen hygiene and cleanliness, Food Quality
          and Packaging standards. Our Team of Food Tasting Experts Upholds our
          unwavering Customer Promise to serve Delicious and Healthy Food. We
          are proud that 100% of our Home Chefs are FSSAI Registered.
        </p>
        <p>
          We enter into an agreement with Home Chefs after they qualify for all
          the Standards of on boarding so that our commitment to Users about
          Food Quality, Health &amp; Hygiene standards is always valued. We are
          Obsessed about Food Quality and as a policy every we call up every
          Customer to seek their Feedback on Food Delivered. As a practice, Our
          Home Chefs call up all customers to seek their taste preferences
          before cooking the Food.
        </p>
        <p>
          Our Chefs come from all parts of the country and serve their unique
          traditional cuisines. From Bengali Food to Gujrati Food, Rajasthani
          Food to Maharashtrian Footman Food to Andhra food, Kashmiri Food to
          Assamese Food, we serve the most Authentic Food Homewood the
          Traditional Food Culture of India. Food is cooked only when an Order
          is booked. We Stand for Fresh, Delicious and Healthy Food made in
          Hygienic Home Kitchens.
        </p>
        <p>
          Celebrate{" "}
          <a href="https://play.google.com/store/apps/details?id=com.homefoodi.user">
            Home Food Every day
          </a>{" "}
          and Explore the Food Culture of India. We feel Humbled that we are
          enabling Homemakers to contribute towards Nation Building and
          overjoyed with our Purpose –
          <strong>“Ghar Ki Lakshmi Bani Bharat ki Lakshmi”</strong>
        </p>
        <p>
          We wish everyone a Healthy Life. Eat Healthy Home Food and Stay Fit.
        </p>
        <p>
          With Gratitude,&nbsp;
          <strong>Team Homefoodi</strong>
        </p>
        <p>
          <strong></strong>
        </p>
        <p>&nbsp;</p>
      </div>
      <FooterSection hideSocialLinks />
    </div>
  );
}
