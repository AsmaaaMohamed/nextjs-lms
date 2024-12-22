import { Post } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";


export async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    `${DOMAIN}/api/posts`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
