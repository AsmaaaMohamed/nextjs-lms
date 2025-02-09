import CoursesClient from "./courses-client";
import { getCachedCourses, getCachedCoursesCategories, getCachedInstructors } from "@/server/db/cached";

const CoursesPage = async() => {
  const categories = await getCachedCoursesCategories();
  const instructors = await getCachedInstructors();
  const allCourses = await getCachedCourses();
  return (
    <CoursesClient
      coursesCategories={categories}
      instructors={instructors}
      allCourses={allCourses}
    />
  );
};

export default CoursesPage;
