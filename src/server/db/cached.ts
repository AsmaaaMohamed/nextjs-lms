import { cache } from "@/app/_lib/cache";
import { getCourses } from "@/apiCalls/coursesApiCall";
import { getCoursesCategories } from "@/apiCalls/coursesCategoriesApiCalls";
import { getInstructors } from "@/apiCalls/instructorsApiCalls";
import { getPosts } from "@/apiCalls/postApiCall";
import { getSkills } from "@/apiCalls/skillsApiCall";

export const getCachedCourses = cache(()=>
    getCourses(),["courses"],{revalidate:false});
export const getCachedCoursesCategories = cache(getCoursesCategories,
  ["courses-categories"],
  { revalidate: false }
);
export const getCachedInstructors = cache(
  getInstructors,
  ["instructors"],
  { revalidate: false }
);
export const getCachedPosts = cache(getPosts, ["posts"], {
  revalidate: false,
});
export const getCachedSkills = cache(getSkills, ["skills"], {
  revalidate: false,
});