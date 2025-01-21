import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import ClientComponent from "./client-component";

const CourseView = async ({ params, searchParams }) => {
  const { id } = await params;
  const course = await getCourseById(+id);
  return <ClientComponent course={course} />;
};

export default CourseView;
