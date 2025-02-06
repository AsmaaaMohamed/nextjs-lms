"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import React, { Fragment} from "react";

interface ClientComponentProps {
  coursesSection: JSX.Element;
}
const ClientComponent = ({
  coursesSection,
}: ClientComponentProps) => {
  return (
    <Fragment>
      <PageHeader pageTitle="My Account"/>
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
