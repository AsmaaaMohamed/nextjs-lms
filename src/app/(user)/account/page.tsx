import { getDashboardCourses } from "@/server/db/courses";
import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";
import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";
import { getCachedInstructors } from "@/server/db/cached";

const AccountPage = async () => {
  const session = await auth();
  const userId = +session?.user?.id;
  const userCourses = await getDashboardCourses(userId);
  const instructors = await getCachedInstructors();

  return (
    <ClientComponent
      userCourses={userCourses}
      coursesSection={
        <CoursesSection
          courses={userCourses}
          isUserCourse={true}
          instructors={instructors}
        />
      }
    />
  );
};

export default AccountPage;
