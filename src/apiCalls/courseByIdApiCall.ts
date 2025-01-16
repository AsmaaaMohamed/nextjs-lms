import { Course } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";


// Get courses 
export async function getCourseById(courseId): Promise<Course[]> {
  const response = await fetch(
    `${DOMAIN}/api/courses/${courseId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
