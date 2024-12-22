import * as yup from "yup";

// Register Schema
export const registerSchema = yup.object({
  username: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Please confirm password"),
});
