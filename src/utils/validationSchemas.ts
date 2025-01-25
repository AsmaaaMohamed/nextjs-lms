import * as yup from "yup";

// Register Schema
export const registerSchema = yup.object({
  name: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Please confirm password").oneOf([yup.ref("password")], "Password and Confirm Password do not match"),
});
// Login Schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
// Contact Schema
export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  mobile: yup.string()
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  subject: yup.string().required("subject is required"),
  message: yup.string(),
});
// Comment Schema
export const commentSchema = yup.object({
  comment: yup.string().required("empty comment"),
});