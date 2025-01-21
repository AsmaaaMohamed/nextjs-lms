import { getCourseById } from "@/apiCalls/courseByIdApiCall";
import ClientCourseLayout from "./client-layout";
import "./CourseView.css";
import { auth } from "@/app/_lib/auth";
import prisma from "@/utils/prismaObject";

export default async function ServerCourseLayout({
  children,
  params,
}) {
      const courseParams = await params;
      const courseId = +courseParams?.id;
      const course =await getCourseById(courseId);
      const session = await auth();
      const userId = +session?.user?.id;
      const userCourses = await prisma.usersCourses.findUnique({
        where: {
          userId_courseId: {
            userId,
            courseId,
          },
        },
      });
      const isEnrolledCourse = userCourses ? true : false;
      console.log('isennnnnnnnnnnnnnnneeeeeeeeeeeeeeeeenrrrrrrrrrrrrrr',isEnrolledCourse)
  return (
    <ClientCourseLayout
      course={course}
      isEnrolledCourse={isEnrolledCourse}
    >
      {children}
    </ClientCourseLayout>
  );
}
