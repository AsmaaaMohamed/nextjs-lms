"use client";

import { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ChapterAcordionItem from "./_components/chapterAcordionItem";
import { useParams } from "next/navigation";

export default function ClientCourseLayout({
  children,
  course,
  isEnrolledCourse,
}) {
  
  const params = useParams();
  const urlChapterId = +params?.chapterId;
  const urlChapterSection = +params?.chapterSectionId;
  // console.log(
  //   "cooooooouuuuuuuuuuuuuuuurrrrrrrrrrrrrrrrssssssss",
  //   course?.chapters
  // );
  const chapters = course?.chapters;
  const activeChapterPosition = chapters.find((chapter)=> chapter.id === urlChapterId)?.position
  console.log(
    "cooooooouuuuuuuuuuuuuuuurrrrrrrrrrrrrrrrssssssss",
    activeChapterPosition
  );
  const mappedChapters = chapters.map((chapter) => {
    
    return (
      <ChapterAcordionItem
        key={chapter.id}
        chapter={chapter}
        isEnrolledCourse={isEnrolledCourse}
        courseId={course.id}
        urlChapterSection={urlChapterSection}
      />
    );
  });
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
                                <Accordion
                                  defaultActiveKey={`${activeChapterPosition ? activeChapterPosition-1: 0}`}
                                >
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
