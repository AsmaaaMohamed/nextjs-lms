import * as yup from "yup";

// Register Schema
export const registerSchema = yup.object({
  name: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Please confirm password"),
});
// Login Schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});