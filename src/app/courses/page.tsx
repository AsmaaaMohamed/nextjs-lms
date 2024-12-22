import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";
import CoursesClient from "./courses-client";
import { getCoursesCategories } from "@/apiCalls/coursesCategoriesApiCalls";

const CoursesPage = async() => {
  const coursesCategories = await getCoursesCategories();
  return (
    <CoursesClient coursesSection={<CoursesSection/>} coursesCategories={coursesCategories}/>
  );
};

export default CoursesPage;
