import CoursesClient from "./courses-client";
import { getCachedCoursesCategories, getCachedInstructors } from "@/server/db/cached";

const CoursesPage = async() => {
  const categories = await getCachedCoursesCategories();
  const instructors = await getCachedInstructors();
  console.log("gggggrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", instructors);
  return (
    <CoursesClient
      coursesCategories={categories}
      instructors={instructors}
    />
  );
};

export default CoursesPage;
