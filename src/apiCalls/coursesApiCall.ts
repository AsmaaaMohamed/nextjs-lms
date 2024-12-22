import { Course } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";


// Get courses 
export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${DOMAIN}/api/courses`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
