import CourseCard from '@/components/lms/CourseCard/CourseCard';
import { Course, Instructor } from '@prisma/client';
import React from 'react'

interface CoursesSectionProps {
  courses: Course[];
  isUserCourse:boolean;
  instructors:Instructor[]
}
const CoursesSection = ({courses, isUserCourse,instructors}:CoursesSectionProps) => {
    const renderedCourses = courses.map((c) => {
      
      const courseInstructor = instructors.find((instructor)=>instructor.id === c.instructorId)!
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