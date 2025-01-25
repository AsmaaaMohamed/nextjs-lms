import { Course } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";


// Get courses 

export async function getCourses(category?:string , courseName?:string, coursePrice?:number): Promise<Course[]> {
  const queryParams = new URLSearchParams();

  if (category) {
    queryParams.append("category", category);
  }

  if (courseName) {
    queryParams.append("title", courseName);
  }
  if (coursePrice && coursePrice!==0) {
    queryParams.append("price", coursePrice.toString());
  }
  const queryString = queryParams.toString(); // e.g., "category=math&title=algebra"
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',`${DOMAIN}/api/courses${queryString ? `?${queryString}` : ""}`);
  const response = await fetch(
    `${DOMAIN}/api/courses${queryString ? `?${queryString}` : ""}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
