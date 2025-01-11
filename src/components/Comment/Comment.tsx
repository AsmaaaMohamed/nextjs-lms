'use client'

import { Fragment } from "react";
import "./Comment.css";
import Image from "next/image";

const Comment = ({session}) => {
  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">02 Comment</h4>
        <ul className="comment-list">
          <li className="comment">
            <div className="com-thumb">
              <Image
                src="/assets/images/author/02.jpg"
                alt="rajibraj91"
                width={80}
                height={80}
              />
            </div>
            <div className="com-content">
              <div className="com-title">
                <div className="com-title-meta">
                  <h6>Linsa Faith</h6>
                  <span> Jun 5, 2022 at 12:41 pm </span>
                </div>
                <span className="ratting">
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                </span>
              </div>
              <p>
                The inner sanctuary, I throw myself down among the tall grass
                bye the trckli stream and, as I lie close to the earth
              </p>
            </div>
          </li>
          <li className="comment">
            <div className="com-thumb">
              <Image
                src="/assets/images/author/03.jpg"
                alt="rajibraj91"
                width={80}
                height={80}
              />
            </div>
            <div className="com-content">
              <div className="com-title">
                <div className="com-title-meta">
                  <h6>Mahdi Mahmud</h6>
                  <span> Jun 5, 2022 at 12:41 pm </span>
                </div>
                <span className="ratting">
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                </span>
              </div>
              <p>
                The inner sanctuary, I throw myself down among the tall grass
                bye the trckli stream and, as I lie close to the earth
              </p>
            </div>
          </li>
        </ul>
      </div>
      {session && (
        <div id="respond" className="comment-respond mb-lg-0">
          <h4 className="title-border">Leave a Comment</h4>
          <div className="add-comment">
            <form
              action="#"
              method="post"
              id="commentform"
              className="comment-form"
            >
              <input type="text" name="name" placeholder="Your Name *" />
              <input type="text" name="email" placeholder="Your email *" />
              <input
                type="text"
                name="subject"
                className="w-100"
                placeholder="Write a Subject"
              />
              <textarea
                rows={7}
                type="text"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="lab-btn">
                <span>send comment</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Comment;
