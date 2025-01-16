'use client'

import { Fragment } from "react";
import "./Comment.css";
import Image from "next/image";
import { formatDate } from "@/utils/dateFormat";

const Comment = ({session,isEnrolled , comments}) => {
  const mappedComments= comments.map((comment)=>{
    return (
      <li className="comment" key={comment.id}>
        <div className="com-thumb">
          <Image
            src={`${
              comment.user.img || "/assets/images/profile-cute-dp_8.jpg"
            }`}
            alt={comment.user.username}
            width={80}
            height={80}
          />
        </div>
        <div className="com-content">
          <div className="com-title">
            <div className="com-title-meta">
              <h6>{comment.user.username}</h6>
              <span> {formatDate(comment.createAt)} </span>
            </div>
            <span className="ratting">
              <i className="icofont-ui-rating icofont"></i>
              <i className="icofont-ui-rating icofont"></i>
              <i className="icofont-ui-rating icofont"></i>
              <i className="icofont-ui-rating icofont"></i>
              <i className="icofont-ui-rating icofont"></i>
            </span>
          </div>
          <p>{comment.text}</p>
        </div>
      </li>
    );
  })
  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">{comments.length < 10 ? `0${comments.length}`: comments.length} Comment{comments.length > 1 && 's' }</h4>
        <ul className="comment-list">
          {mappedComments}
        </ul>
      </div>
      {(session && isEnrolled) && (
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
