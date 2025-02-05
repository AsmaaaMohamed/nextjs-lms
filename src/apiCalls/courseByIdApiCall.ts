// import { Course } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { CourseWithRelations } from "@/utils/types";


// Get courses 
export async function getCourseById(courseId:number): Promise<CourseWithRelations> {
  const response = await fetch(
    `${DOMAIN}/api/courses/${courseId}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
