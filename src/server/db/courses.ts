import prisma from "@/utils/prismaObject";
import { Course } from "@prisma/client";

export const getDashboardCourses = async (userId: number): Promise<Course[]> => {
  try {
    const enrolledCourses = await prisma.usersCourses.findMany({
      where: { userId },
      include: {
        course: true, // Fetch related Course model data
      },
    });
    const courses = enrolledCourses.map((c) => c.course);
    // console.log('courrrrrrrrrrrrrrrrr', courses)
    return courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};
