'use client';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { googleClickHandler, loginSubmit } from '@/app/_lib/authHandlers';
import { loginSchema } from '@/utils/validationSchemas';

const LoginPage = () => {
   const formik = useFormik({
     initialValues: {
       email: "",
       password: "",
     },
     validateOnChange: true,
     validateOnBlur: true,
     validationSchema: loginSchema,
     onSubmit:(values) => {
       const result = loginSubmit(values);
       if (!result.ok) {
         console.log("Invalid email or password");
       } else {
         window.location.href = "/dashboard"; // Redirect to a protected route
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
                  <span className="facebook" title="Facebook">
                    <i className="icofont-facebook icofont"></i>
                  </span>
                </li>
                <li>
                  <span className="github" title="Github">
                    <i className="icofont-github icofont"></i>
                  </span>
                </li>
                <li>
                  <span
                    className="google"
                    title="Google"
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
}

export default LoginPage