import { Instructor } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";

// Get instructors
export async function getInstructors(): Promise<Instructor[]> {
  const response = await fetch(`${DOMAIN}/api/instructors`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch instructors");
  }

  return response.json();
}
