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
      </div>
    </>
  );
};

export default HeroSection;
