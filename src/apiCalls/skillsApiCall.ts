import { Skill } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";

// Get skills
export async function getSkills(): Promise<Skill[]> {
  const response = await fetch(`${DOMAIN}/api/skills`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}
