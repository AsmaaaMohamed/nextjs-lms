'use client';

import CustomFilter from '@/components/common/CustomFilter/CustomFilter';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import CourseCard from '@/components/lms/CourseCard/CourseCard';
import { courses, coursesCategories } from '@/components/utils/data';
import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap';
import './Courses.css';

const CoursesPage = () => {
  const mappedOptions = coursesCategories.map((record) => {
    return (
      <option key={record.id} value={record.prefix}>
        {record.title}
      </option>
    );
  });
    const renderedCourses = courses.map((c) => {
      return (
        <div key={c.id} className="col">
          <CourseCard {...c} />
        </div>
      );
    });
  return (
    <Fragment>
      <PageHeader />
      <CustomFilter categoriesOptions={mappedOptions} />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgb(241 97 38)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                      }}
                    >
                      <option value="all">All Skills</option>
                      <option value="css">CSS</option>
                      <option value="php">PHP</option>
                      <option value="html">HTML</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
              {renderedCourses}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CoursesPage