import styles from "./page.module.css";
import { QueryPosts } from "./actions/QueryPosts";
import HeroSection from "./_components/HeroSection/HeroSection";
import BlogList from "./_components/BlogList/BlogList";
import { Post } from "./lib/definitions";

export default async function Home() {
  const posts: Post[] = (await QueryPosts()) || [];

  return (
    <div>
      <main className={styles.main}>
        <HeroSection />
        <BlogList initialArticles={posts} />
      </main>
    </div>
  );
}
