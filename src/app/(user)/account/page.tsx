import { getDashboardCourses } from "@/server/db/courses";
import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";
import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";
import { getCachedInstructors } from "@/server/db/cached";

const AccountPage = async () => {
  const session = await auth();
  const userId = session?.user?.id ? parseInt(session?.user?.id) : null; // Ensure it's a number;
  const instructors = await getCachedInstructors();
  // Call getDashboardCourses only if userId is valid
  const userCourses = userId ? await getDashboardCourses(userId) : [];
  return (
    <ClientComponent
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
