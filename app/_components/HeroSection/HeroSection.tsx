import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroHeading}>Felix travel blog</h1>
          <p className={styles.heroText}>
            Welcome to my travel blog—your gateway to global adventures! I share
            personal stories, tips, and hidden gems from my journeys to inspire
            your wanderlust. Whether you are planning a trip or dreaming of one,
            my articles offer insights and inspiration to explore the world.
            Let’s embark on this journey together!
          </p>
        </div>
        <div>
          <Image
            src="/FelixHero.png"
            width={400}
            height={400}
            alt="Felix Hero image"
            className={styles.heroImage}
          />
        </div>
      </section>
      <div className={styles.journeyTextContainer}>
        <h2>Here you can find all my journeys</h2>
      </div>
      <div className={styles.scrollDown}>
        <div className={`${styles.arrow} ${styles.bounce}`}></div>
      </div>
    </>
  );
};

export default HeroSection;
