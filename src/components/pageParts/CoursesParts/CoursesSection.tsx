import CourseCard from '@/components/lms/CourseCard/CourseCard';
import React from 'react'

const CoursesSection = ({courses, isUserCourse,instructors}) => {
    const renderedCourses = courses.map((c) => {
      
      const courseInstructor = instructors.find((instructor)=>instructor.id === c.instructorId)
      // console.log(
      //   "cccccccccccccccccccccttttttttttttttttttttttttt",
      //   instructors
      // );
      return (
          <div key={c.id} className="col">
          <CourseCard {...c} isUserCourse={isUserCourse} instructor={courseInstructor}/>
          </div>
      );
    });
  return (
    <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
      {renderedCourses}
    </div>
  );
}

export default CoursesSection