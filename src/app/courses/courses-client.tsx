"use client";

import CustomFilter from "@/components/common/CustomFilter/CustomFilter";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React, { Fragment } from "react";
import "./Courses.css";
import { CourseCategory, Instructor } from "@prisma/client";
import { getCourses } from "@/apiCalls/coursesApiCall";

interface CoursesClientProps {
  coursesSection: JSX.Element;
  coursesCategories: CourseCategory[];
  setCategoryName: React.SetStateAction<string>;
  setCoursePrice: React.SetStateAction<number>;
  coursePrice: number;
  categoryName:string;
}
const CoursesClient = ({
  coursesSection,
  coursesCategories,
  setCategoryName,
  categoryName,
  setCoursePrice,
  coursePrice,
}: CoursesClientProps) => {
  const mappedOptions = coursesCategories.map((record) => {
    return (
      <option key={record.id} value={record.title as string}>
        {record.title}
      </option>
    );
  });
  return (
    <Fragment>
      <PageHeader pageTitle="Courses"/>
      <CustomFilter
        categoriesOptions={mappedOptions}
        setCategoryName={setCategoryName}
        setCoursePrice={setCoursePrice}
        categoryName={categoryName}
        coursePrice={coursePrice}
      />
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
            {coursesSection}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesClient;
