
import { Fragment } from "react";
import "./CourseDetails.css";
import Image from "next/image";
import CourseSideDetails from "@/components/lms/CourseSideDetails/CourseSideDetails";
import CourseSideCategories from "@/components/lms/CourseSideCategories/CourseSideCategories";
import Comment from "@/components/Comment/Comment";
import Author from "@/components/common/Author/Author";
import Link from "next/link";
import { auth } from "@/app/_lib/auth";

const CourseDetails = async({ params }) => {
  const {id} = await params;
  const session = await auth();
  console.log('id params' , id)
  // const {id} = useParams()
  // console.log(id)
  return (
    <Fragment>
      <div className="pageheader-section style-2">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
            <div className="col-lg-7 col-12">
              <div className="pageheader-thumb">
                <Image
                  src="/assets/images/pageheader/02.jpg"
                  alt="rajibraj91"
                  className="w-100"
                  width={726}
                  height={434}
                />
                <Link
                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                  className="video-button popup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icofont-ui-play icofont"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="pageheader-content">
                <div className="course-category">
                  <Link href="#" className="course-cate">
                    Adobe XD
                  </Link>
                  <Link href="#" className="course-offer">
                    30% Off
                  </Link>
                </div>
                <h2 className="phs-title">
                  Advanced Adobe Photoshop For Everyone
                </h2>
                <p className="phs-desc">
                  The most impressive is collection of share me online college
                  courses
                </p>
                <div className="phs-thumb">
                  <Image
                    src="/assets/images/pageheader/03.jpg"
                    alt="rajibraj91"
                    width={40}
                    height={40}
                  />
                  <span>Rajib Raj</span>
                  <div className="course-reiew">
                    <span className="ratting">
                      <i className="icofont-ui-rating icofont"></i>
                      <i className="icofont-ui-rating icofont"></i>
                      <i className="icofont-ui-rating icofont"></i>
                      <i className="icofont-ui-rating icofont"></i>
                      <i className="icofont-ui-rating icofont"></i>
                    </span>
                    <span className="ratting-count">03 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3>Course Overview</h3>
                      <p>
                        In this course take you from the fundamentals and
                        concepts of data modeling all the way through anumber of
                        best practices and techniques that you`ll need to build
                        data models in your organization. You`ll find many By
                        the end of the course, you`ll be all set to not only put
                        these principles to works but also to maike the key data
                        modeling and design decisions required by the info data
                        modeling that transcend the nuts-and-bolts that clearly
                        the key covered the course and design patterns.
                      </p>
                      <h4>What You will Learn in This Course:</h4>
                      <ul className="lab-ul">
                        <li>
                          <i className="icofont-tick-mark icofont"></i> Ready to
                          begin working on real-world data modeling projects
                        </li>
                        <li>
                          <i className="icofont-tick-mark icofont"></i>Expanded
                          responsibilities as part of an existing role
                        </li>
                        <li>
                          <i className="icofont-tick-mark icofont"></i>Be able
                          to create Flyers, Brochures, Advertisements
                        </li>
                        <li>
                          <i className="icofont-tick-mark icofont"></i>Find a
                          new position involving data modeling.
                        </li>
                        <li>
                          <i className="icofont-tick-mark icofont"></i>Work with
                          color and Gradients and Grids
                        </li>
                      </ul>
                      <p>
                        In this course take you from the fundamentals and
                        concepts of data modeling all the way through anumber of
                        best practices and techniques that you`ll need to build
                        data models in your organization. You`ll find many
                        examples that clearly the key covered the course
                      </p>
                      <p>
                        By the end of the course, you`ll be all set to not only
                        put these principles to works but also to maike the key
                        data modeling and design decisions required by the info
                        data modeling that transcend the nuts-and-bolts that
                        clearly the key covered the course and design patterns.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-video">
                  <div className="course-video-title">
                    <h4>Course Content</h4>
                  </div>
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion01">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist1"
                            aria-expanded="true"
                            aria-controls="videolist1"
                          >
                            <span>1.Introduction</span>
                            <span>5lessons, 17:37</span>
                          </button>
                        </div>
                        <div
                          id="videolist1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion01"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.1 Welcome to the course 02:30 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.2 How to set up your photoshop workspace 08:33
                                minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.3 Essential Photoshop Tools 03:38 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.4 Finding inspiration 02:30 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                1.5 Choosing Your Format 03:48 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion02">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist2"
                            aria-expanded="true"
                            aria-controls="videolist2"
                          >
                            <span>
                              2.How to Create Mixed Media Art in Adobe Photoshop
                            </span>
                            <span>5 lessons, 52:15</span>
                          </button>
                        </div>
                        <div
                          id="videolist2"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion02"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                2.1 Using Adjustment Layers 06:20 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                2.2 Building the composition 07:33 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                2.3 Photoshop Lighting effects 06:30 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                2.4 Digital Painting using photoshop brushes
                                08:34 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                2.5 Finalizing the details 10:30 minutes
                              </div>
                              <div className="video-item-icon">
                                <Link
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-play-alt-2 icofont"></i>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Author />
                <Comment session={session}/> 
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-part">
                <CourseSideDetails courseId={id} session={session}/>
                <CourseSideCategories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseDetails;
