"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { DOMAIN } from "@/utils/constants";
import { registerSchema } from "@/utils/validationSchemas";
import { useFormik } from "formik";
import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registerSchema,
    onSubmit: async(values) => {
      try {
        await fetch(`${DOMAIN}/api/users/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Fragment>
      <PageHeader />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <Form className="account-form" onSubmit={formik.handleSubmit}>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="User Name *"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={!formik.errors.username && formik.touched.username}
                  isInvalid={formik.errors.username ? true : false}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.username && formik.touched.username ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={!formik.errors.email && formik.touched.email}
                  isInvalid={formik.errors.email ? true : false}
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
                  isInvalid={formik.errors.password ? true : false}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.password && formik.touched.password ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={
                    !formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                  }
                  isInvalid={formik.errors.confirmPassword ? true : false}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                >
                  <>Get Started Now</>
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
              <h5 className="subtitle">Register With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <a href="#" className="facebook">
                    <i className="icofont-facebook icofont"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="icofont-twitter icofont"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="icofont-linkedin icofont"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <i className="icofont-instagram icofont"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <i className="icofont-pinterest icofont"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupPage;
