import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(15, 'Password must be at most 15 characters')
    .required("Password is required"),
  email: yup
    .string()
    .email()
    .required("Email is requied"),
  username: yup
    .string()
    .min(4, 'Username must be at least 4 characters')
    .max(15, 'Username must be at most 15 characters')
    .required("Username is required"),
  name: yup
    .string()
    .required("Name is required"),
});

export const LoginSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required"),
  username: yup
    .string()
    .required("Username is required"),
});
