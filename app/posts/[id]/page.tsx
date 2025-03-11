// app/posts/[id]/page.js
// import { fetchPostById } from "@/app/lib/data"; // Example function to fetch post data

import { getArticleById } from "@/app/actions/QueryPosts";

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params; // Extract the `id` from the URL
  const article = await getArticleById(id);
  // Fetch post data based on the ID
  //   const post = await fetchPostById(id);

  if (!article) {
    return <p>Post not found</p>;
  }
  console.log(article);
  //   [
  //     {
  //       id: 1,
  //       created_at: '2025-02-11T17:33:59.124399+00:00',
  //       Title: 'Malta mit den Jungs',
  //       Continent: 'Europe',
  //       Country: 'Malta',
  //       Description: 'Malta war so toll jaaa',
  //       number_of_days: 3,
  //       price: 400,
  //       City: 'Valetta'
  //     }
  //   ]
  return (
    <div>
      {/* <h1>{post.City}</h1> */}
      <h1>{article[0].Title}</h1>
      <h2>{article[0].Description}</h2>
      <h2>{article[0].number_of_days}</h2>
      <h2>{article[0].price}</h2>
      <h2>{article[0].City}</h2>

      {/* <h2>{post.Country}</h2>
            <p>Price: {post.price}€</p> */}
      {/* Render additional post details here */}
    </div>
  );
}
