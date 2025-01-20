"use client";

import { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export default function ClientCourseLayout({
  children,
  course,
}) {
    console.log('cooooooouuuuuuuuuuuuuuuurrrrrrrrrrrrrrrrssssssss' , course.usersCourses);
    const chapters = course?.chapters;
    const mappedChapters = chapters.map((chapter)=>{
        const mappedChapterSections = chapter.chapterSections.map((section)=>{
            return (
              <div
                className="course-lists d-flex flex-wrap justify-content-between"
                key={section.id}
              >
                <div className="csa-left">
                  {section.isFree ? (
                    <i className="icofont-square icofont"></i>
                  ) : (
                    <i className="icofont-ui-lock icofont"></i>
                  )}
                  {/* <i className="icofont-checked complite icofont"></i> */}
                  <h6>{`${chapter.position}.${section.position} ${section.title}`}</h6>
                  <p>
                    <i className="icofont-play-alt-2 icofont"></i>
                    6:00 Min
                  </p>
                </div>
              </div>
            );
        })
        return (
          <Accordion.Item
            eventKey={`${chapter.position - 1}`}
            className="mb-1"
            key={chapter.id}
          >
            <Accordion.Header>
              <div>
                Seation 1: Introduction
                <span className="d-block font-weight-normal">
                  Videos: 13 | 26:00 Min
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
                {
                    mappedChapterSections
                }
              
            </Accordion.Body>
          </Accordion.Item>
        );
    })
  return (
    <Fragment>
      <PageHeader />
      <div className="course-view-section padding-tb section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="course-view">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-12">{children}</div>
                  <div className="col-lg-4 col-sm-8 col-12">
                    <div className="video-list-area">
                      <div className="video-head"></div>
                      <div className="video-body">
                        <div className="course-select-area border-radius-12">
                          <div className="csa-title mb-4">
                            <h5>Course Requirements</h5>
                          </div>
                          <div className="csa-body">
                            <ul className="lab-ul">
                              <li>
                                <Accordion defaultActiveKey="0">
                                  {mappedChapters}
                                </Accordion>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}
