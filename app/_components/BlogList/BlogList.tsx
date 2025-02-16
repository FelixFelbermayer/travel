"use client";

import { useState } from "react";
import { getFilteredArticles, QueryPosts } from "../../actions/QueryPosts";
import { Post } from "@/app/lib/definitions";
import styles from "./BlogList.module.css";
import Image from "next/image";
import { Select } from "antd";
import TravelCard from "./TravelCard/TravelCard";

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
          value={selectedContinent || undefined}
          onChange={(value) => {
            setSelectedContinent(value);
            setSelectedCountry("");
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
          value={selectedCountry || undefined}
          onChange={(value) => setSelectedCountry(value)}
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
          articles.map((post) => <TravelCard key={post.id} post={post} />)
        ) : (
          <h1>No posts found</h1>
        )}
      </div>
    </div>
  );
}
