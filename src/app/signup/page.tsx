import { Button, Form, Spinner } from "react-bootstrap";
import { PageHeader } from "@components/common";
import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister, resetErrorMessages } from "@store/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpSchema, type signUpType } from "@validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/forms";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const disparch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });
  const { loading, error } = useAppSelector((state) => state.auth);
  const {
    checkEmailAvailability,
    prevEnteredEmail,
    emailAvailabilityStatus,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();
  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const inputValue = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && prevEnteredEmail !== inputValue) {
      checkEmailAvailability(inputValue);
    }
    if (isDirty && invalid && prevEnteredEmail) {
      resetCheckEmailAvailability();
    }
  };
  const submitForm: SubmitHandler<signUpType> = async (data) => {
    const { username, email, password } = data;
    disparch(actAuthRegister({ username, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      });
  };
  useEffect(() => {
    return () => {
      disparch(resetErrorMessages());
    };
  }, [disparch]);
  return (
    <Fragment>
      <PageHeader />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <Form className="account-form" onSubmit={handleSubmit(submitForm)}>
              <Input
                placeHolder="User Name *"
                register={register}
                error={errors.username?.message}
                name="username"
              />
              <Input
                placeHolder="Email *"
                register={register}
                name="email"
                type="email"
                onBlur={emailOnBlurHandler}
                error={
                  errors.email?.message
                    ? errors.email?.message
                    : emailAvailabilityStatus === "notAvailable"
                    ? "This email is already in use."
                    : emailAvailabilityStatus === "failed"
                    ? "Error from the server."
                    : ""
                }
                formText={
                  emailAvailabilityStatus === "checking"
                    ? "We're currently checking the availability of this email address. Please wait a moment."
                    : ""
                }
                success={
                  emailAvailabilityStatus === "available"
                    ? "This email is available for use."
                    : ""
                }
                disabled={emailAvailabilityStatus === "checking"}
              />
              <Input
                placeHolder="Password *"
                register={register}
                error={errors.password?.message}
                name="password"
                type="password"
              />
              <Input
                placeHolder="Confirm Password *"
                register={register}
                error={errors.confirmPassword?.message}
                name="confirmPassword"
                type="password"
              />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                  disabled={
                    emailAvailabilityStatus === "checking" ||
                    loading === "pending"
                  }
                >
                  <>
                    {loading === "pending" ? (
                      <Spinner
                        animation="border"
                        size="sm"
                        style={{ marginRight: "4px" }}
                      ></Spinner>
                    ) : (
                      ""
                    )}
                    Get Started Now
                  </>
                </Button>
                {error && (
                  <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
                )}
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
