import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";
import CoursesClient from "./courses-client";
import { getCoursesCategories } from "@/apiCalls/coursesCategoriesApiCalls";
import { getCourses } from "@/apiCalls/coursesApiCall";

const CoursesPage = async() => {
  const courses = await getCourses();
  const coursesCategories = await getCoursesCategories();
  return (
    <CoursesClient
      coursesSection={<CoursesSection courses={courses} isUserCourse={false} />}
      coursesCategories={coursesCategories}
    />
  );
};

export default CoursesPage;
