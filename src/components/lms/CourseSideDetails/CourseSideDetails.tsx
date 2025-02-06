'use client'

import Link from "next/link";
import "./CourseSideDetails.css";
import Image from "next/image";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import { Session } from "next-auth";

interface CourseSideDetailsProps{
  course:Course;
  session:Session | null;
  isEnrolled:boolean;
}
const CourseSideDetails = ({course , session, isEnrolled}:CourseSideDetailsProps) => {
  // console.log('sessssssss', courseId)
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    setIsOpen((prev)=>!prev)
  };
  const confirmHandler = async()=>{
    modalHandler();
    if (session) {
      try {
        const res = await fetch(`/api/courses/${course.id}/enrollCourse`, {
          method: "POST",
        });
      
        if (!res.ok) {
          const resJson = await res.json();
          console.log("reeeeeeeeeeeeeeesssssssssssssssssssssssss", resJson);
          throw resJson.message;
        }
        toast.success(
          "You've successfully enrolled course. You'll redirect to the course view page"
        );
        setTimeout(() => {
          router.push(`/courses/${course.id}/chapters`); // Replace with your target route
        }, 3500); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
      }
      catch(err){
        console.log('errrrrrrrrrrrrrrrrooooooooooooooooooo', err)
        toast.error(err as string);
      }
    } 
    else {
      toast.error("You need to login first to enrolled the course");
    }
   
  }
  return (
    <div className="course-side-detail">
      <div className="csd-title">
        <div className="csdt-left">
          <h4 className="mb-0">
            <sup>$</sup>{course.price}
          </h4>
        </div>
        <div className="csdt-right">
          {isEnrolled ? (
            <p className="mb-0">Purchased</p>
          ) : (
            <p className="mb-0">
              <i className="icofont-clock-time icofont"></i>Limited time offer
            </p>
          )}
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
            <Image
              src="/assets/images/pyment/01.jpg"
              alt="CodexCoder"
              width={260}
              height={36}
            />
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
        {isEnrolled ? (
          <div className="course-enroll">
            <Button
              className="lab-btn"
              onClick={() => router.push(`/courses/${course.id}/chapters`)}
            >
              <span>View Course</span>
            </Button>
          </div>
        ) : (
          <div className="course-enroll">
            <Button className="lab-btn" onClick={modalHandler}>
              <span>Enroll For ${course.price}</span>
            </Button>
            <Modal show={isOpen} onHide={modalHandler}>
              <Modal.Header closeButton>
                <Modal.Title>Enroll Now</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  {" "}
                  Are you sure you want to place order with Subtotal: 89$ ?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={modalHandler}>
                  Close
                </Button>
                <Button variant="primary" onClick={confirmHandler}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSideDetails;
