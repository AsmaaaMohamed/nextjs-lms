"use client";

import { githubClickHandler, googleClickHandler } from "@/app/_lib/actions";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { DOMAIN } from "@/utils/constants";
import { registerSchema } from "@/utils/validationSchemas";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const SignupPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const res =await fetch(`${DOMAIN}/api/auth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, provider: "credentials" }),
        });
        if(!res.ok){
        const resData = await res.json();
        throw resData
      }
        console.log('reeeeeeeeeeeeeeesssssssssssssssssssssssss',res)
        toast.success("Your acount has been created successfully");
        router.push('/login');
      } catch (error) {
        // toast.dismiss();
        console.log('ooooooooooooooooooooooooooooooooooooooooooo',error.message)
        toast.error(error.message );
      }
    },
  });
  return (
    <Fragment>
      <PageHeader pageTitle="SignUp"/>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <Form className="account-form" onSubmit={formik.handleSubmit}>
              <Form.Group className="form-group mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="User Name *"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={!formik.errors.name && formik.touched.name}
                  isInvalid={formik.errors.name ? true : false}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {formik.errors.name && formik.touched.name ? (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {formik.errors.name}
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
                {/* <li>
                  <span className="facebook" title="Facebook" role="button">
                    <i className="icofont-facebook icofont"></i>
                  </span>
                </li> */}
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

export default SignupPage;
