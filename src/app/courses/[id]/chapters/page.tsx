// import { getCourseById } from "@/apiCalls/courseByIdApiCall";
// import ClientComponent from "./client-component";

import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import { redirect } from "next/navigation";

const CourseView = async ({ params }: { params: Promise<{ id: string }> }) => {
  // const { id } = await params;
  // const course = await getCourseById(+id);
  const courseId = parseInt((await params).id);
  const course =await getCourseById(courseId);
  return redirect(
    `/courses/${course.id}/chapters/${course.chapters[0].id}/chapterSections/${course.chapters[0].chapterSections[0].id}`
  );

};

export default CourseView;
