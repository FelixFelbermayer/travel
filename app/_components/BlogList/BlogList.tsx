"use client";

import { useState } from "react";
import { getFilteredArticles, QueryPosts } from "../../actions/QueryPosts";
import { Post } from "@/app/lib/definitions";
import styles from "./blogList.module.css";
import Image from "next/image";
import { Select } from "antd";

export default function BlogList({
  initialArticles,
}: {
  initialArticles: Post[] | [];
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [selectedContinent, setSelectedContinent] = useState<
    keyof typeof countries | ""
  >("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleFilter = async () => {
    // Call the server action to fetch filtered articles
    const filteredArticles = await getFilteredArticles(selectedCountry);
    if (filteredArticles) setArticles(filteredArticles);
  };
  const handleReset = async () => {
    // Call the server action to fetch filtered articles
    setSelectedCountry("");
    setSelectedContinent("");
    const filteredArticles = await QueryPosts();
    if (filteredArticles) setArticles(filteredArticles);
  };

  const continents = ["Asia", "Europe"];
  const countries: { [key in "Asia" | "Europe"]: string[] } = {
    Asia: ["Thailand", "Sri Lanka"],
    Europe: ["Germany", "Austria", "Prague", "Italy", "Croatia", "Malta"],
  };

  return (
    <div className={styles.filterAndBlogContainer}>
      <div className={styles.filterContainer}>
        <h3>Filter blogposts</h3>

        <Select
          placeholder="Continent"
          value={selectedContinent}
          onChange={(value) => {
            setSelectedContinent(value);
            setSelectedCountry(""); // Reset country when continent changes
          }}
          style={{ width: 200 }}
        >
          {continents.map((continent) => (
            <Select.Option key={continent} value={continent}>
              {continent}
            </Select.Option>
          ))}
        </Select>
        <Select
          placeholder="Country"
          value={selectedCountry}
          onChange={(value) => setSelectedCountry(value)}
          style={{ width: 200 }}
          disabled={!selectedContinent}
        >
          {selectedContinent &&
            countries[selectedContinent].map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
        </Select>
        <button onClick={handleFilter}>Apply</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* List of blog articles */}
      <div className={styles.blogContainer}>
        {articles.length !== 0 ? (
          articles.map((post) => (
            <div key={post.id} className={styles.blogPostContainer}>
              <div className={styles.textContainer}>
                <h2>{post.Title}</h2>
                <p>{post.Description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/img1.jpg"
                  width={1200}
                  height={1200}
                  alt="Felix Hero image"
                  className={styles.image}
                />
                <Image
                  src="/img2.jpg"
                  width={1200}
                  height={1200}
                  alt="Felix Hero image"
                  className={styles.image}
                />
                <Image
                  src="/img3.jpg"
                  width={1200}
                  height={1200}
                  alt="Felix Hero image"
                  className={`${styles.image} ${styles.lastImage}`}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>No posts found</h1>
        )}
      </div>
    </div>
  );
}
