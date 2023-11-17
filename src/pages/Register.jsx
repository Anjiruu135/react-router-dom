import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "../Validations/UserValidation.js";
import getData from '../modules/getData.js';
import postData from "../modules/postData.js";
import axios from 'axios';

function Register() {
  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const usersData = await getData();
        setData(usersData);
      } catch (error) {
        console.log('Error in fetchData:', error);
      }
    };

    fetchData();
  }, []);

  const userCount = data.length;

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          values.id = userCount + 1;
          window.alert(`User "${values.username}" Registered Successfully`);

          postData(values)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.error(error);
          });

          console.log(values);
        } else {
          const errorMessages = Object.values(errors).join("\n");
          window.alert(`Validation Error:\n${errorMessages}`);
        }
      });
    },
  });

  const inputStyles = (field) => {
    return {
      border:
        formik.touched[field] && formik.errors[field]
          ? "1px solid red"
          : "1px solid #ccc",
      color: formik.touched[field] && formik.errors[field] ? "red" : "inherit",
    };
  };

  const errorMessageStyles = {
    height: "1.5em",
  };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="container-box">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            style={inputStyles("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red", fontSize: "14px"}}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="container-box">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            style={inputStyles("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div style={{ color: "red", fontSize: "14px"}}>{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="container-box">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@email.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={inputStyles("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red", fontSize: "14px"}}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="container-box">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={inputStyles("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red", fontSize: "14px"}}>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="container-box">
          <label htmlFor="confirmpassword">Confirm Password: </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
            style={inputStyles("confirmpassword")}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div style={{ color: "red", fontSize: "14px"}}>{formik.errors.confirmpassword}</div>
          ) : null}
        </div>

        <input className="button" type="submit" value="Register"></input>
      </form>
    </div>
  );
}

export default Register;
