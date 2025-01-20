import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import ClientCourseLayout from "./client-layout";
import "./CourseView.css";

export default async function ServerCourseLayout({
  children,
  params,
}) {
      const courseParams = await params;
      const courseId = +courseParams?.id;
      const course =await getCourseById(courseId);

  return (
    <ClientCourseLayout course={course}>
      {children}
    </ClientCourseLayout>
  );
}
