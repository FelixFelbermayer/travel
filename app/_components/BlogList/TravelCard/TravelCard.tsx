import React from "react";
import { Post } from "@/app/lib/definitions";
import styles from "./TravelCard.module.css";
import Image from "next/image";
import { Button } from "antd";
const TravelCard: React.FC<Post> = (props) => {
  const { id, Country, City, price } = props.post;

  return (
    <div key={id} className={styles.travelCard}>
      <Image
        src="/img1.jpg"
        width={1289}
        height={1289}
        alt="Account leaf image"
        className={styles.cardImage}
      />
      <div className={styles.cardOverlayContainer}>
        <div className={styles.cardOverlay}>
          <h2 className={styles.travelCardCity}>{City}</h2>
          <h3 className={styles.travelCardCountry}>{Country}</h3>
          <p classname={styles.travelCardText}>{price}€</p>
        </div>
        <Button type="primary">Show more! </Button>
      </div>
    </div>
  );
};

export default TravelCard;
