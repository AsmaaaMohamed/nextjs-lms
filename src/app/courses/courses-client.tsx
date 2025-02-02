"use client";

import CustomFilter from "@/components/common/CustomFilter/CustomFilter";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React, { Fragment, useEffect, useState } from "react";
import "./Courses.css";
import { Course, CourseCategory, Instructor } from "@prisma/client";
import { getCourses } from "@/apiCalls/coursesApiCall";
import useSearchStore from "@/store/lms/search/search";
import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";

interface CoursesClientProps {
  instructors: Instructor[];
  coursesCategories: CourseCategory[];
  allCourses: Course[];
}
const CoursesClient = ({
  instructors,
  coursesCategories,
  allCourses
}: CoursesClientProps) => {
  const mappedOptions = coursesCategories.map((record) => {
    return (
      <option key={record.id} value={record.title as string}>
        {record.title}
      </option>
    );
  });
    // const searchParams = useSearchParams();
    // const currentCategory = searchParams.get("category")
    //   ? searchParams.get("category")
    //   : "";
    // const currentTitle = searchParams.get("title");
    const { searchCategory, searchPrice, searchCourse } = useSearchStore();
    // const [categoryName, setCategoryName] = useState(currentCategory);
    // const [coursePrice, setCoursePrice] = useState(0);
    const [courses, setCourses] = useState(allCourses);
    // const [instructors, setInstructors] = useState([]);
    // const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchCourses = async () => {
        const result = await getCourses(
          searchCategory,
          searchCourse,
          searchPrice
        );
        setCourses(result);
        // const coursesCategories = await getCachedCoursesCategories();
        // console.log("vvvvvvvvcccccccccccccccc", coursesCategories);
        // setCategories(coursesCategories);
        // const coursesInstructors = await getInstructors();

        // setInstructors(coursesInstructors);
      };
      if(searchCategory | searchCourse | searchPrice){
        fetchCourses();
      }
    }, [searchCategory, searchCourse, searchPrice]);
  return (
    <Fragment>
      <PageHeader pageTitle="Courses" />
      <CustomFilter categoriesOptions={mappedOptions} />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
              </div>
            </div>
            <CoursesSection instructors={instructors} isUserCourse={false} courses={courses}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesClient;
