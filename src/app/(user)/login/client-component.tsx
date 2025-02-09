"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useFormik } from "formik";
import React, { Fragment, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {
  githubClickHandler,
  googleClickHandler,
  loginSubmit,
} from "@/app/_lib/actions";
import { loginSchema } from "@/utils/validationSchemas";
import { useRouter, useSearchParams } from "next/navigation";
import { toast} from "react-toastify";

const ClientComponent = () => {
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: async ( values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      try {
         await loginSubmit(formData);
         toast.success("Login successful!");
         router.push('/');
         router.refresh()

      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (error:any) {
        console.log('caaaaaaaaaaaaaaaaaaaatttttttttttttttttttttt')
        toast.dismiss();
        console.log(error)
        toast.error(error.message as string);
      } finally {
        console.log("");
        // setSubmitting(false);
      }
    },
  });

useEffect(() => {
  if (errorType) {
    console.log('tyyyyyyyyyyyyyyyyyyyyyyyyyy' , errorType)
    toast.dismiss();
    toast.error(errorType);
  }
}, [errorType]);
  return (
    <Fragment>
      <PageHeader pageTitle="Login"/>

      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Login</h3>
            <Form className="account-form" onSubmit={formik.handleSubmit}>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.email && formik.touched.email ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={!formik.errors.password && formik.touched.password}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.password && formik.touched.password ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remamber Me"
                  className="checkgroup"
                />
                <a href="/forgetpass">Forget Password?</a>
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                >
                 
                  Submit Now
                </Button>
              </Form.Group>
            </Form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <a href="/signup">Sign Up</a>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">Login With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <span
                    className="github"
                    title="Github"
                    role="button"
                    onClick={githubClickHandler}
                  >
                    <i className="icofont-github icofont"></i>
                  </span>
                </li>
                <li>
                  <span
                    className="google"
                    title="Google"
                    role="button"
                    onClick={googleClickHandler}
                  >
                    <i className="icofont-brand-google icofont"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientComponent;
