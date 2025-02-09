'use client'

import { Fragment, useEffect, useState } from "react";
import "./Comment.css";
import Image from "next/image";
import { formatDate } from "@/utils/dateFormat";
import { useFormik } from "formik";
import { commentSchema } from "@/utils/validationSchemas";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { DOMAIN } from "@/utils/constants";
import { Session } from "next-auth";
import { CommentWithUser } from "@/utils/types";

interface CommentProps{
  session:Session | null;
  isEnrolled:boolean;
  comments:CommentWithUser[];
  courseId:number;
}
const CommentComponent = ({session,isEnrolled ,comments,  courseId}:CommentProps) => {
  const [thisComments, setThisComments] = useState(comments);
  const [isOpen, setIsOpen] = useState(false);
  const [commentToBeDeleted, setCommentToBeDeleted] = useState(0);
  const userId = session?.user?.id ? parseInt(session?.user?.id) : null; // Ensure it's a number;
  const modalHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: commentSchema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await fetch(`${DOMAIN}/api/courses/${courseId}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw data.error.message;
        }
        resetForm();
        setSubmitting(false); // Marks submission as complete
      } catch (error) {
        toast.error(error as string);
      }
    },
  });
  const handleDeleteComment = async (id:number) => {
    setCommentToBeDeleted(id);
    modalHandler();
  };
  const confirmHandler = async () => {
    modalHandler();
    if (session) {
      try {
        const res = await fetch(
          `/api/courses/${courseId}/comments/${commentToBeDeleted}`,
          {
            method: "DELETE",
          }
        );
        if (!res.ok) {
          const resJson = await res.json();
          throw resJson.message;
        }
        toast.success("Comment deleted successfully");
        setThisComments((prev) =>
          prev.filter((comment) => comment.id !== commentToBeDeleted)
        );
      } catch (err) {
        toast.error(err as string);
      }
    } else {
      toast.error("You need to login first to enrolled the course");
    }
  };
  const mappedComments = thisComments?.map((comment) => {
    
    return (
      <li className="comment" key={comment.id}>
        <div className="com-thumb">
          <Image
            src={`${
              comment?.user?.profileImg ||
              `https://ui-avatars.com/api/?name=${comment?.user?.username[0]}&background=26c976&color=fff`
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
            <div className="d-flex flex-column align-items-end">
              <div>
                <span className="ratting">
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                  <i className="icofont-ui-rating icofont"></i>
                </span>
              </div>
              <div className="delete-div">
                {userId && userId === comment.userId && (
                  <span
                    className="delete d-none"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <i className="icofont-ui-delete icofont text-danger"></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <p>{comment.text}</p>
        </div>
      </li>
    );
  });
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`${DOMAIN}/api/courses/${courseId}/comments`);
      const fetchedComments = await res.json();
      setThisComments(fetchedComments);
    };
    if (!formik.isSubmitting) fetchComments();
  }, [formik.isSubmitting, courseId]);
  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">
          {thisComments.length < 10
            ? `0${thisComments.length}`
            : thisComments.length}{" "}
          Comment{thisComments.length > 1 && "s"}
        </h4>
        <ul className="comment-list">{mappedComments}</ul>
        <Modal show={isOpen} onHide={modalHandler}>
          <Modal.Body>
            <p> Are you sure you want to delete comment ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={modalHandler}>
              Close
            </Button>
            <Button variant="danger" onClick={confirmHandler}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {session && isEnrolled && (
        <div id="respond" className="comment-respond mb-lg-0">
          <h4 className="title-border">Leave a Comment</h4>
          <div className="add-comment">
            <Form
              id="commentform"
              className="comment-form"
              onSubmit={formik.handleSubmit}
            >
              <Form.Group className="form-group w-100 mb-3">
                <Form.Control
                  rows={7}
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="Your comment"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.comment ? true : false}
                  className="mb-1"
                />
                {formik.errors.comment ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.comment}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <button
                type="submit"
                className="lab-btn"
                disabled={!formik.values.comment.length}
              >
                <span>Add comment</span>
              </button>
            </Form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CommentComponent;
