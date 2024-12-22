import { getCourses } from '@/apiCalls/coursesApiCall';
import CourseCard from '@/components/lms/CourseCard/CourseCard';
import React from 'react'

const CoursesSection = async() => {
    const courses = await getCourses();
    const renderedCourses = courses.map((c) => {
    return (
        <div key={c.id} className="col">
        <CourseCard {...c} />
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