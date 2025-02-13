import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <Image
          src="/Hero.jpg"
          width={4032}
          height={3024}
          alt="Account leaf image"
          className={styles.heroImage}
        />
        <h1 className={styles.heroText}>Discover the World’s Hidden Wonders</h1>
        <h2 className={styles.heroTextSmall}>
          A place where nature and adventure unite
        </h2>
        <Image
          src="/FelixHero.png"
          width={1289}
          height={1289}
          alt="Account leaf image"
          className={styles.felixImage}
        />
      </div>
    </>
  );
};

export default HeroSection;
