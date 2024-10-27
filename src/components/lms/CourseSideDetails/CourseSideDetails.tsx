import Link from "next/link";
import "./CourseSideDetails.css";
import Image from "next/image";

const CourseSideDetails = () => {
  return (
    <div className="course-side-detail">
      <div className="csd-title">
        <div className="csdt-left">
          <h4 className="mb-0">
            <sup>$</sup>89
          </h4>
        </div>
        <div className="csdt-right">
          <p className="mb-0">
            <i className="icofont-clock-time icofont"></i>Limited time offer
          </p>
        </div>
      </div>
      <div className="csd-content">
        <div className="csdc-lists">
          <ul className="lab-ul">
            <li>
              <div className="csdc-left">
                <i className="icofont-ui-alarm icofont"></i>Course level
              </div>
              <div className="csdc-right">Beginner</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-book-alt icofont"></i>Course Duration
              </div>
              <div className="csdc-right">10 week</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-signal icofont"></i>Online Class
              </div>
              <div className="csdc-right">08</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-video-alt icofont"></i>Lessions
              </div>
              <div className="csdc-right">18x</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-abacus-alt icofont"></i>Quizzes
              </div>
              <div className="csdc-right">0</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-hour-glass icofont"></i>Pass parcentages
              </div>
              <div className="csdc-right">80</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-certificate icofont"></i>Certificate
              </div>
              <div className="csdc-right">Yes</div>
            </li>
            <li>
              <div className="csdc-left">
                <i className="icofont-globe icofont"></i>Language
              </div>
              <div className="csdc-right">English</div>
            </li>
          </ul>
        </div>
        <div className="sidebar-payment">
          <div className="sp-title">
            <h6>Secure Payment:</h6>
          </div>
          <div className="sp-thumb">
            <Image src="/assets/images/pyment/01.jpg" alt="CodexCoder" width={260} height={36} />
          </div>
        </div>
        <div className="sidebar-social">
          <div className="ss-title">
            <h6>Share This Course:</h6>
          </div>
          <div className="ss-content">
            <ul className="lab-ul">
              <li>
                <Link href="#" className="twitter">
                  <i className="icofont-twitter icofont"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="vimeo">
                  <i className="icofont-vimeo icofont"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="rss">
                  <i className="icofont-rss icofont"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="course-enroll">
          <Link className="lab-btn" href="/signup">
            <span>Enrolled Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSideDetails;
