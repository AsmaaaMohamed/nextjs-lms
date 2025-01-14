import { getDashboardCourses } from "@/app/_lib/actions";
import ClientComponent from "./client-component";
import { auth } from "@/app/_lib/auth";
import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";

const AccountPage = async() => {
  const session = await auth();
  const userId = +session?.user?.id;
  const userCourses = await getDashboardCourses(userId);
  
  return (
    <ClientComponent
      userCourses={userCourses}
      coursesSection={<CoursesSection courses={userCourses} isUserCourse={true}/>}
    />
  );
};

export default AccountPage;
