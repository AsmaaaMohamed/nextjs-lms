import { CourseCategory } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";

// Get courses
export async function getCoursesCategories(): Promise<CourseCategory[]> {
  const response = await fetch(`${DOMAIN}/api/coursesCategories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
