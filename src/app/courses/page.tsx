'use client'

import CoursesSection from "@/components/pageParts/CoursesParts/CoursesSection";
import CoursesClient from "./courses-client";
import { getCoursesCategories } from "@/apiCalls/coursesCategoriesApiCalls";
import { getCourses } from "@/apiCalls/coursesApiCall";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoursesPage = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category")? searchParams.get("category") : '';
  const currentTitle = searchParams.get("title");
  const [categoryName, setCategoryName] = useState(currentCategory);
  const [coursePrice, setCoursePrice] = useState(0);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const result = await getCourses(categoryName, currentTitle, coursePrice);
      setCourses(result)
      const coursesCategories = await getCoursesCategories();
      setCategories(coursesCategories);
    };

    fetchCourses();
  },[categoryName , currentTitle, coursePrice]);
  return (
    <CoursesClient
      coursesSection={<CoursesSection courses={courses} isUserCourse={false} />}
      coursesCategories={categories}
      categoryName={categoryName}
      setCategoryName={setCategoryName}
      coursePrice={coursePrice}
      setCoursePrice={setCoursePrice}
    />
  );
};

export default CoursesPage;
