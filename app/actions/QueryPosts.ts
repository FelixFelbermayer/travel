"use server";

import { createClient } from "../utils/supabase/server";

export async function QueryPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id,price, Country, City");
  if (error) {
    console.log(error);
  }
  return data;
}

export async function getFilteredArticles(country: string) {
  const supabase = await createClient();
  const { data: filteredArticles, error } = await supabase
    .from("posts")
    .select("id,price, Country, City")
    .eq("Country", country)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error filtering articles:", error);
    throw new Error("Failed to fetch filtered articles");
  }

  return filteredArticles;
}
export async function getArticleById(id: number) {
  const supabase = await createClient();
  const { data: filteredArticles, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) {
    console.error("Error filtering articles:", error);
    throw new Error("Failed to fetch filtered articles");
  }

  return filteredArticles;
}
