import { getCourses } from "@/apiCalls/coursesApiCall";
import CoursesSection from "../CoursesParts/CoursesSection";
import { getInstructors } from "@/apiCalls/instructorsApiCalls";

const HomePickCourse = async () => {
  const courses = await getCourses();
  const instructors = await getInstructors()
  return (
    <div className="course-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Featured Courses</span>
          <h2 className="title">Pick A Course To Get Started</h2>
        </div>
        <div className="section-wrapper">
          <CoursesSection courses={courses} isUserCourse={false} instructors={instructors}/>
        </div>
      </div>
    </div>
  );
};

export default HomePickCourse;
