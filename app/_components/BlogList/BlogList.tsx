"use client";

import { useState } from "react";
import { getFilteredArticles, QueryPosts } from "../../actions/QueryPosts";
import { Post } from "@/app/lib/definitions";
import styles from "./BlogList.module.css";
import { Select, InputNumber, Button } from "antd";
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
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

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
    <>
      <div className={styles.filterContainer}>
        <div className={styles.regionContainer}>
          <div className={styles.continentSelect}>
            <label htmlFor="continent-select" className={styles.filterLabel}>
              Continent
            </label>
            <Select
              id={"continent-select"}
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
          </div>
          <div>
            <label htmlFor="country-select" className={styles.filterLabel}>
              Country
            </label>
            <Select
              id={"country-select"}
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
          </div>
        </div>
        <div className={styles.price}>
          <label htmlFor="minPrice-select" className={styles.filterLabel}>
            Price
          </label>
          <div className={styles.priceInput}>
            <InputNumber
              id={"minPrice-select"}
              min={0}
              max={1000}
              defaultValue={3}
              placeholder="Min €"
              onChange={(value) => setMinPrice(value ?? 0)}
            />
            <p className={styles.dividerSymbol}> - </p>
            <InputNumber
              min={0}
              max={1000}
              defaultValue={3}
              placeholder="Max €"
              onChange={(value) => setMaxPrice(value ?? 0)}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            className={styles.moreButton}
            style={{ backgroundColor: "#fd8a67" }}
            onClick={handleReset}
          >
            Reset filter
          </Button>
          <Button
            type="primary"
            className={styles.moreButton}
            style={{ backgroundColor: "#fd8a67" }}
            onClick={handleFilter}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* List of blog articles */}
      <div className={styles.blogContainer}>
        {articles.length !== 0 ? (
          articles.map((post) => <TravelCard key={post.id} post={post} />)
        ) : (
          <h1>No posts found</h1>
        )}
      </div>
    </>
  );
}
