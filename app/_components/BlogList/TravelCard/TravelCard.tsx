import React from "react";
import { Post } from "@/app/lib/definitions";
import styles from "./TravelCard.module.css";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

export default function TravelCard({ post }: { post: Post }) {
  const { id, Country, City, price } = post;

  return (
    <div className={styles.travelCard}>
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
        </div>
        <div className={styles.lowerCardContainer}>
          <div>
            <h3 className={styles.travelCardCountry}>{Country}</h3>
            <p className={styles.travelCardText}>{price}€</p>
          </div>
          <Link href={`/posts/${id}`} passHref>
            {" "}
            {/* Use Link for navigation */}
            <Button
              type="primary"
              className={styles.moreButton}
              style={{ backgroundColor: "#fd8a67" }}
            >
              Show more!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
