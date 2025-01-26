'use client'

import { Fragment, useState } from "react";
import "./Comment.css";
import Image from "next/image";
import { formatDate } from "@/utils/dateFormat";
import { useFormik } from "formik";
import { commentSchema } from "@/utils/validationSchemas";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Comment = ({session,isEnrolled , courseId}) => {
  const router = useRouter();
  const fetcher = async()=>{
    const res = await fetch(`${DOMAIN}/api/courses/${courseId}/comment`);
    console.log('reeeeeeeeeeeeeeesssssssssssssssspppppppppppp' , )
    const data = await res.json();
    return data;
  }
  const { data: comments,isLoading, error } = useSWR(
    courseId ? `/api/courses/${courseId}/comment` : null,
    ()=>fetcher()
  );
  console.log('ccccccccccccc' , error)
  if(error) toast.error(error)
  const formik = useFormik({
      initialValues: {
        comment: "",
      },
      validationSchema: commentSchema,
      onSubmit: async(values,{ resetForm }) => {
        console.log('kkkkkkkkkkkkkkkkkkkk', comments)
        try{
          const res =await fetch(`${DOMAIN}/api/courses/${courseId}/comment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...values}),
          });
          const data = await res.json();
          
          //console.log('rrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeesssssss' , data.error.message);
          if(!res.ok){
            throw data.error.message
          }
          resetForm();
          // setAsyncComments((prev)=> [...prev , ])
          router.replace(window.location.pathname);
        }
        catch(error){
          console.log(error)
          toast.error(error)
        }
      },
    });
    // console.log(
    //   "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
    //   !formik.values.comment.length
    // );
  const mappedComments= comments.map((comment)=>{
    return (
      <li className="comment" key={comment.id}>
        <div className="com-thumb">
          <Image
            src={`${
              comment.user.img ||
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
        <h4 className="title-border">
          {comments.length < 10 ? `0${comments.length}` : comments.length}{" "}
          Comment{comments.length > 1 && "s"}
        </h4>
        <ul className="comment-list">{mappedComments}</ul>
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
              <Form.Group className="form-group w-100">
                <Form.Control
                  rows={7}
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="Your comment"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                ></Form.Control>
              </Form.Group>
              <button type="submit" className="lab-btn" disabled={!formik.values.comment.length}>
                <span>Add comment</span>
              </button>
            </Form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Comment;
