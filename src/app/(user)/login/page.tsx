'use client';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { githubClickHandler, googleClickHandler, loginSubmit } from '@/app/_lib/authHandlers';
import { loginSchema } from '@/utils/validationSchemas';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

const LoginPage = () => {
  const router = useRouter();
   const formik = useFormik({
     initialValues: {
       email: "",
       password: "",
     },
     validateOnChange: true,
     validateOnBlur: true,
     validationSchema: loginSchema,
     onSubmit: async (values, { setSubmitting, setFieldError }) => {
       try {
         const result = await loginSubmit(values);
        //  console.log("sssssssssssssssssssssssssss", result);
        //  console.log(formik.errors);
        if (result)
         router.push("/");
       } catch (error) {
         toast.error(error.message)
       } finally {
         console.log("");
         setSubmitting(false);
       }
     },
   });
   
  return (
    <Fragment>
      <PageHeader />

      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            {/* {searchParams.get("message") && (
              <Alert variant="success">
                Your account successfully created, please login
              </Alert>
            )}
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )} */}
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remamber Me"
                  className="checkgroup"
                />
                <a href="/forgetpass">Forget Password?</a>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                >
                  {/* <>
                    {loading === "pending" ? (
                      <Spinner
                        animation="border"
                        size="sm"
                        style={{ marginRight: "4px" }}
                      ></Spinner>
                    ) : (
                      ""
                    )}
                  </> */}
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
                  <span className="facebook" title="Facebook" role="button">
                    <i className="icofont-facebook icofont"></i>
                  </span>
                </li>
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
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        theme="colored"
      />
    </Fragment>
  );
}

export default LoginPage