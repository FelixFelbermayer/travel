import styles from "./page.module.css";
import { QueryPosts } from "./actions/QueryPosts";

interface Post {
  id: number;
  Title: string;
  Description: string;
}

export default async function Home() {
  let posts: Post[];
  try {
    posts = (await QueryPosts()) || [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return (
      <div>
        <main className={styles.main}>
          <h1>Failed to load posts. Please try again later.</h1>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        {posts.length !== 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.Title}</h2>
              <p>{post.Description}</p>
            </div>
          ))
        ) : (
          <h1>No posts found</h1>
        )}
      </main>
    </div>
  );
}
