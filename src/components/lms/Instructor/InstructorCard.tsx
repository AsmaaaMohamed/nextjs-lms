import Image from "next/image";
import "./InstructorCard.css";
import { Instructor } from "@prisma/client";

const InstructorCard = ({ name, position, img }:Instructor) => {
  return (
    <div className="instructor-item">
      <div className="instructor-inner">
        <div className="instructor-thumb">
          <Image src={img} alt="instructor rajibraj91 rajibraj" width={220} height={220} />
        </div>
        <div className="instructor-content">
          <a href="/team-single">
            <h4>{name}</h4>
          </a>
          <p>{position}</p>
          <span className="ratting">
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
          </span>
        </div>
      </div>
      <div className="instructor-footer">
        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
          <li>
            <i className="icofont-book-alt icofont"></i> 08 courses
          </li>
          <li>
            <i className="icofont-users-alt-3 icofont"></i> 30 students
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructorCard;
