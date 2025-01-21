import Image from "next/image";
import "./CourseCard.css";
import Link from "next/link";
import { Course } from "@prisma/client";

const CourseCard = ({
  id,
  title,
  instructorId,
  price,
  img,
  isUserCourse,
  instructor
}) => {
  console.log('innnnnnnnnnnsssssssssssssssssss',instructor);
  return (
    <div className="course-item">
      <div className="course-inner">
        <div className="course-thumb">
          <Image
            src={img}
            alt="course rajibraj91 rajibraj"
            width={242}
            height={242}
          />
          {!isUserCourse && <div className="course-price">${price}</div>}
        </div>
        <div className="course-content">
          <div className="course-category">
            <div className="course-cate">
              <a href="#">Adobe XD</a>
            </div>
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
          <Link href={isUserCourse ? `/courses/${id}/chapters` : `/courses/${id}`}>
            <h4>{title}</h4>
          </Link>
          <div className="course-details">
            <div className="couse-count">
              <i className="icofont-video-alt icofont"></i> 18x Lesson
            </div>
            <div className="couse-topic">
              <i className="icofont-signal icofont"></i>Online Class
            </div>
          </div>
          <div className="course-footer">
            <div className="course-author">
              <Image
                src={instructor?.img}
                alt="course author rajibraj91 rajibraj"
                width={40}
                height={40}
              />
              <a className="ca-name" href="/team-single">
                {instructor?.name}
              </a>
            </div>
            <div className="course-btn">
              <Link className="lab-btn-text" href={`/courses/${id}`}>
                Read More
                <i className="icofont-external-link icofont"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
