"use server";

import { createClient } from "../utils/supabase/server";

export async function QueryPosts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    console.log(error);
  }
  return data;
}
