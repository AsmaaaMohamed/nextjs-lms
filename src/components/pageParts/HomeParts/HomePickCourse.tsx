import CoursesSection from "../CoursesParts/CoursesSection";
import { getCachedCourses, getCachedInstructors } from "@/server/db/cached";

const HomePickCourse = async () => {
  const courses = await getCachedCourses();
  const instructors = await getCachedInstructors()
  return (
    <div className="course-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Featured Courses</span>
          <h2 className="title">Pick A Course To Get Started</h2>
        </div>
        <div className="section-wrapper">
          <CoursesSection courses={courses.slice(0,6)} isUserCourse={false} instructors={instructors}/>
        </div>
      </div>
    </div>
  );
};

export default HomePickCourse;
