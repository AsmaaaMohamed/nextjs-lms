"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import React, { Fragment} from "react";
import { Course } from "@prisma/client";

interface ClientComponentProps {
  userCourses: Course[];
  coursesSection: JSX.Element;
}
const ClientComponent = ({
  coursesSection,
  userCourses,
}: ClientComponentProps) => {
  return (
    <Fragment>
      <PageHeader />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between"></div>
            </div>
            {coursesSection}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientComponent;
