import React from "react";
import styles from "./FooterSection.module.css";
import Link from "next/link";

export default function FooterSection(
  { hideSocialLinks }: { hideSocialLinks?: boolean } = {
    hideSocialLinks: false,
  }
) {
  return (
    <div>
      <div className={styles.downloadAppMainBG}>
        <div className={styles.downloadApp}>
          <h3>Download Our App</h3>
          <p>
            Yes, we all know, nothing like Ghar Ka Khana but Finding home food
            was never an easy thing. Rejoice! Great News! Now it is with
            Homefoodi.
          </p>
          <p>
            Now you can get the food as per your taste/requirement from Home
            Chef’s Kitchen and that too freshly prepared. Choose from a
            countless variety of Home Chefs from Food to Bakers.
          </p>
          <img src="/fav.webp" />
          <div className={styles.downloadsButton}>
            <a href="#">
              <img src="/app.webp" />
            </a>
            <a href="#">
              <img src="/play.webp" />
            </a>
          </div>
          {!hideSocialLinks ? (
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/homefoodiapp"
                  title="Follow on Youtube"
                  target="_blank"
                  className={styles.youtube}
                >
                  <img src="/youtube.svg" alt="Youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/homefoodiapp"
                  title="Follow on Facebook"
                  target="_blank"
                  className={styles.facebook}
                >
                  <img src="/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/home_foodi/"
                  title="Follow on Instagram"
                  target="_blank"
                  className={styles.instagram}
                >
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/homefoodi"
                  title="Follow on X"
                  target="_blank"
                  className={styles.twitter}
                >
                  <img src="/twitter-x.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/homefoodi/"
                  title="Follow on LinkedIn"
                  target="_blank"
                  className={styles.linkedin}
                >
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/homefoodiapp/"
                  title="Follow on Pinterest"
                  target="_blank"
                  className={styles.pinterest}
                >
                  <img src="/pinterest.svg" alt="Pinterest" />
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className={styles.locations}>
        <div className={styles.locationsChild}>
          <h2>
            <a href="#">Noida </a>| <a href="#">Greater Noida </a>|{" "}
            <a href="#">Ghaziabad </a>| <a href="#">Delhi</a> |
            <a href="#">Gurgaon </a>| <a href="#">Bengaluru </a>|
            <a href="#">Hyderabad | </a>
            <a href="#">Mumbai</a>
          </h2>
          <p>
            {linksArray.map((link, i) => (
              <>
                {" "}
                <a key={i} href={link.link}>
                  {link.label}
                </a>
                {` ${i === linksArray.length - 1 ? "" : "|"}`}
              </>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.socialLinks}>
            <img src="/logo.webp" />
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/homefoodiapp"
                  title="Follow on Youtube"
                  target="_blank"
                >
                  <img src="/youtube.svg" alt="Youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/homefoodiapp"
                  title="Follow on Facebook"
                  target="_blank"
                >
                  <img src="/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/home_foodi/"
                  title="Follow on Instagram"
                  target="_blank"
                >
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/homefoodi"
                  title="Follow on X"
                  target="_blank"
                >
                  <img src="/twitter-x.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/homefoodi/"
                  title="Follow on LinkedIn"
                  target="_blank"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/homefoodiapp/"
                  title="Follow on Pinterest"
                  target="_blank"
                >
                  <img src="/pinterest.svg" alt="Pinterest" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.webLinks}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <p>Homefoodi © 2021 All Rights Reserved.</p>
          <div className={styles.webLinks}>
            <Link href={"/"}>PRIVACY POLICY </Link>
            <Link href={"/"}> USER T&C </Link>
            <Link href={"/"}> COOKIE POLICY</Link>
            <Link href={"/"}> CHEFS T&C </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const linksArray = [
  {
    label: "Food Delivery Apps",
    link: "https://homefoodi.com/food-delivery-apps/",
  },
  {
    label: "Food for Senior Citizens",
    link: "https://homefoodi.com/food-for-senior-citizens/",
  },
  {
    label: "Home Food Delivery in Noida",
    link: "https://homefoodi.com/home-food-delivery-in-noida/",
  },
  {
    label: "Home Food Delivery in Bangalore",
    link: "https://homefoodi.com/home-food-delivery-in-bangalore/",
  },
  {
    label: "Order Food Online in Ghaziabad",
    link: "https://homefoodi.com/order-food-online-in-ghaziabad/",
  },
  {
    label: "Home Delivery Food Bangalore",
    link: "https://homefoodi.com/home-delivery-food-bangalore/",
  },
  {
    label: "Home Delivery Food in Hyderabad",
    link: "https://homefoodi.com/home-delivery-food-in-hyderabad/",
  },
  {
    label: "Homemade Food Delivery in Mumbai",
    link: "https://homefoodi.com/homemade-food-delivery-in-mumbai/",
  },
  {
    label: "Home Delivery Food in Gurgaon",
    link: "https://homefoodi.com/home-delivery-food-in-gurgaon/",
  },
  {
    label: "Tiffin Delivery Service in Noida",
    link: "https://homefoodi.com/tiffin-delivery-service-in-noida/",
  },
  {
    label: "Online Home Food Delivery in Noida",
    link: "https://homefoodi.com/online-home-food-delivery-in-noida/",
  },
  {
    label: "Food Delivery in Noida",
    link: "https://homefoodi.com/food-delivery-in-noida/",
  },
  {
    label: "Home Made Food Delivery in Noida",
    link: "https://homefoodi.com/home-made-food-delivery-in-noida/",
  },
  {
    label: "Biryani Delivery in Noida",
    link: "https://homefoodi.com/biryani-delivery-in-noida/",
  },
  {
    label: "Online Cake Delivery in Noida",
    link: "https://homefoodi.com/online-cake-delivery-in-noida/",
  },
  {
    label: "Cakes Delivery in Noida",
    link: "https://homefoodi.com/cakes-delivery-in-noida/",
  },
  {
    label: "Corporate Catering Services in Noida",
    link: "https://homefoodi.com/corporate-catering-services-in-noida/",
  },
  {
    label: "Party Catering Services in Noida",
    link: "https://homefoodi.com/party-catering-services-in-noida/",
  },
  { label: "Diet Food", link: "https://homefoodi.com/diet-food/" },
  {
    label: "Homemade Veg Thali Delivery",
    link: "https://homefoodi.com/homemade-veg-thali-delivery/",
  },
  { label: "Ghar ka Khana", link: "https://homefoodi.com/ghar-ka-khana/" },
  {
    label: "Food for Covid Patients",
    link: "https://homefoodi.com/food-for-covid-patients/",
  },
  {
    label: "Fresh and Healthy Home Cooked Food",
    link: "https://homefoodi.com/fresh-and-healthy-home-cooked-food/",
  },
  {
    label: "Home Food near Me",
    link: "https://homefoodi.com/home-food-near-me/",
  },
  {
    label: "Order Homemade Sweets",
    link: "https://homefoodi.com/order-homemade-sweets/",
  },
  {
    label: "Online Biryani Order",
    link: "https://homefoodi.com/online-biryani-order/",
  },
  { label: "Biryani near Me", link: "https://homefoodi.com/biryani-near-me/" },
  { label: "Cakes", link: "https://homefoodi.com/cakes/" },
  {
    label: "Cakes Shop near Me",
    link: "https://homefoodi.com/cakes-shop-near-me/",
  },
  {
    label: "Catering Services near Me",
    link: "https://homefoodi.com/catering-services-near-me/",
  },
  {
    label: "Bakeries near Me",
    link: "https://homefoodi.com/bakeries-near-me/",
  },
  {
    label: "Home Food Delivery in Delhi",
    link: "https://homefoodi.com/home-food-delivery-in-delhi/",
  },
  {
    label: "Home Delivery Food in Delhi",
    link: "https://homefoodi.com/home-delivery-food-in-delhi/",
  },
  {
    label: "South Indian Food near Me",
    link: "https://homefoodi.com/south-indian-food-near-me/",
  },
  { label: "Momos near Me", link: "https://homefoodi.com/momos-near-me/" },
  { label: "Pizza near Me", link: "https://homefoodi.com/pizza-near-me/" },
  { label: "Bakery near Me", link: "https://homefoodi.com/bakery-near-me/" },
];
