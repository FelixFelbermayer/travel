import { getArticleById } from "@/app/actions/QueryPosts";

interface PostDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetail({ params }: PostDetailProps) {
  const { id } = await params; // Await the params to get the id
  const article = await getArticleById(parseInt(id, 10)); // Convert id to number

  if (!article || article.length === 0) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{article[0].Title}</h1>
      <h2>{article[0].Description}</h2>
      <h2>{article[0].number_of_days}</h2>
      <h2>{article[0].price}</h2>
      <h2>{article[0].City}</h2>
    </div>
  );
}
