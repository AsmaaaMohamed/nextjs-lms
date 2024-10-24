"use client"

import BannerImg from "/public/assets/images/banner/02.png";
import BannerImg2 from "/public/assets/images/banner/03.png";
import Icon3 from "/public/assets/images/about/icon/03.jpg";
import Icon1 from "/public/assets/images/about/icon/01.jpg";
import Icon2 from "/public/assets/images/about/icon/02.jpg";
import StudentFeedbackLeftImg from "/public/assets/images/feedback/01.jpg";
import StudentFeedbackRightImg1 from "/public/assets/images/feedback/student/01.jpg";
import StudentFeedbackRightImg2 from "/public/assets/images/feedback/student/02.jpg";
// import AchieveGoalsBg from "../../public/assets/images/media/02.ba699cd616f691881513.png";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import "./page.css"
import { courses, coursesCategories, instructors, posts, skills } from "@/components/utils/data";
import SkillCard from "@/components/lms/Skill/SkillCard";
import InstructorCard from "@/components/lms/Instructor/InstructorCard";
import PopularCategory from "@/components/lms/Category/PopularCategory";
import CourseCard from "@/components/lms/CourseCard/CourseCard";
import PostCard from "@/components/blog/PostCard/PostCard";

export default function Home() {
    const renderedSkills = skills.map((s) => {
      return (
        <div key={s.id} className="col">
          <SkillCard {...s} />
        </div>
      );
    });
    const renderedInstructors = instructors.map((i) => {
      return (
        <div key={i.id} className="col">
          <InstructorCard {...i} />
        </div>
      );
    });
    const mappedCategories = coursesCategories.map((record) => {
      return <PopularCategory key={record.id} {...record} />;
    });
    const renderedCourses = courses.slice(0, 6).map((c) => {
      return (
        <div key={c.id} className="col">
          <CourseCard {...c} />
        </div>
      );
    });
    const renderedPosts = posts.slice(0, 3).map((p) => {
      return (
        <div key={p.id} className="col">
          <PostCard {...p} />
        </div>
      );
    });
  return (
    <>
      <section className="banner-section pt-">
        <div className="container">
          <div className="section-wrapper">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xxl-5 col-xl-6 col-lg-10 me-auto">
                <div className="banner-content">
                  <h6 className="subtitle text-uppercase">Online education</h6>
                  <h2 className="title">
                    <span className="d-lg-block">Build Skills With</span>
                    Experts Any Time
                    <span className="d-lg-block">Anywhere</span>
                  </h2>
                  <p className="desc">
                    Free online courses from the world’s Leading experts. join
                    18+ million Learners today.
                  </p>

                  <Form className="d-flex srchcourse">
                    <div className="banner-icon">
                      <i className="icofont-search icofont"></i>
                    </div>
                    <Form.Control
                      type="search"
                      placeholder="Keywords of your course"
                      className=""
                      aria-label="Search"
                    />
                    <Button>Search Course</Button>
                  </Form>
                  <div className="banner-catagory d-flex flex-wrap">
                    <p>Most Popular : </p>
                    <ul className="lab-ul d-flex flex-wrap">
                      <li>
                        <a href="#">Figma</a>
                      </li>
                      <li>
                        <a href="#">Adobe XD</a>
                      </li>
                      <li>
                        <a href="#">illustration</a>
                      </li>
                      <li>
                        <a href="#">Photoshop</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6">
                <div className="thumb-part">
                  <div className="banner-thumb text-center">
                    <Image src={BannerImg} alt="img" />
                  </div>
                  <div className="abs-thumb d-none d-xxl-block">
                    <Image src={BannerImg2} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-section section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="about-right">
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    <li>
                      <div className="sr-left">
                        <Image
                          src={Icon3}
                          alt="about icon rajibraj91 rajibraj"
                        />
                      </div>
                      <div className="sr-right">
                        <h5>30,000+ Online Courses</h5>
                        <p>Grow your knowledge and your training and tools.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    <li>
                      <div className="sr-left">
                        <Image
                          src={Icon1}
                          alt="about icon rajibraj91 rajibraj"
                        />
                      </div>
                      <div className="sr-right">
                        <h5>Experts Teachers</h5>
                        <p>Grow your knowledge and your training and tools.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    <li>
                      <div className="sr-left">
                        <Image
                          src={Icon2}
                          alt="about icon rajibraj91 rajibraj"
                        />
                      </div>
                      <div className="sr-right">
                        <h5>Lifetime Access</h5>
                        <p>Grow your knowledge and your training and tools.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Featured Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
              {renderedCourses}
            </div>
          </div>
        </div>
      </div>
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
      <div className="student-feedbak-section padding-tb shape-img">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Loved by 200,000+ students</span>
            <h2 className="title">Students Community Feedback</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center row-cols-lg-2 row-cols-1">
              <div className="col">
                <div className="sf-left">
                  <div className="sfl-thumb">
                    <Image
                      src={StudentFeedbackLeftImg}
                      alt="student feedback"
                    />
                    <a
                      href="https://www.youtube.com/embed/MU3qrgR2Kkc"
                      className="video-button popup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icofont-ui-play icofont"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="stu-feed-item">
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <Image
                            src={StudentFeedbackRightImg1}
                            alt="student rajibraj91 rajibraj"
                          />
                        </div>
                        <div className="sftl-content">
                          <a href="/team-single">
                            <h6>Oliver Beddows</h6>
                          </a>
                          <span>UX designer</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <span className="ratting">
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                        </span>
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>
                        Rapidiously buildcollaboration anden deas sharing viaing
                        and bleedng edgeing nterfaces fnergstcally plagiarize
                        teams anbuilding paradgms whereas goingi forward process
                        and monetze
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stu-feed-item">
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <Image
                            src={StudentFeedbackRightImg2}
                            alt="student rajibraj91 rajibraj"
                          />
                        </div>
                        <div className="sftl-content">
                          <a href="/team-single">
                            <h6>Madley Pondor</h6>
                          </a>
                          <span>UX designer</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <span className="ratting">
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                          <i className="icofont-ui-rating icofont"></i>
                        </span>
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>
                        Rapidiously buildcollaboration anden deas sharing viaing
                        and bleedng edgeing nterfaces fnergstcally plagiarize
                        teams anbuilding paradgms whereas goingi forward process
                        and monetze
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instructor-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">World-class Instructors</span>
            <h2 className="title">Classes Taught By Real Creators</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {renderedInstructors}
            </div>
            <div className="text-center footer-btn">
              <p>
                Want to help people learn, grow and achieve more in life?
                <a href="/team">Become an instructor</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-section padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-12">
              <div className="section-header">
                <h2 className="title">
                  Build Your Project Management Skills Online Anytime
                </h2>
                <a className="lab-btn" href="/signup">
                  <span>Sign Up Now</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="section-wrpper">
                <div className="row g-4 justify-content-center row-cols-sm-2 row-cols-1">
                  {renderedSkills}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="achievement-section padding-tb"
        style={{
          background: `url("/assets/images/media/02.ba699cd616f691881513.png")`,
        }}
      >
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">START TO SUCCESS</span>
            <h2 className="title">Achieve Your Goals With Edukon</h2>
          </div>
          <div className="section-wrapper">
            <div className="counter-part mb-4">
              <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner text-center">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <span>30</span>
                          </span>
                          <span>+</span>
                        </h2>
                        <p>Years of Language Education Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner text-center">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <span>3084</span>
                          </span>
                          <span>+</span>
                        </h2>
                        <p>Learners Enrolled in Edukon Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner text-center">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <span>330</span>
                          </span>
                          <span>+</span>
                        </h2>
                        <p>Qualified Teachers And Language Experts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner text-center">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <span>2300</span>
                          </span>
                          <span>+</span>
                        </h2>
                        <p>Innovative Foreign Language Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">FORM OUR BLOG POSTS</span>
            <h2 className="title">More Articles From Resource Library</h2>
          </div>
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {renderedPosts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
