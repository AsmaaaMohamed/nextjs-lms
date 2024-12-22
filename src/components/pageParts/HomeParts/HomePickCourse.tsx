import { getCourses } from "@/apiCalls/coursesApiCall";
import CourseCard from "../../lms/CourseCard/CourseCard";

const HomePickCourse = async () => {
  const courses = await getCourses();
  const renderedCourses = courses.slice(0, 6).map((c) => {
    return (
      <div key={c.id} className="col">
        <CourseCard {...c} />
      </div>
    );
  });
  return (
    <div className="course-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Featured Courses</span>
          <h2 className="title">Pick A Course To Get Started</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
            {renderedCourses}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePickCourse;
