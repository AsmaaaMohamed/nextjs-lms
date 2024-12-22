import { getCoursesCategories } from '@/apiCalls/coursesCategoriesApiCalls';
import PopularCategory from '@/components/lms/Category/PopularCategory';
import React from 'react'

const PopularCategoriesSection = async() => {
  const coursesCategories = await getCoursesCategories();

  const mappedCategories = coursesCategories.map((record) => {
    return <PopularCategory key={record.id} {...record} />;
  });
  return (
    <div className="category-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Popular Category</span>
          <h2 className="title">Popular Category For Learn</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
            {mappedCategories}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCategoriesSection