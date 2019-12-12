import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import "./login.scss";
import InputField from "../../components/FormFields/InputField.js";
import { loginApi } from "./loginApi";
import { withRouter } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

const Login = ({ history }) => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: values => {
      loginApi(values.email, values.password)
        .then(res => {
          history.push("/home");
        })
        .catch(err => {
          setError(err.response.data.error);
        });
    }
  });

  return (
    <div className="login_container">
      <NavBar />
      <form onSubmit={formik.handleSubmit} className="login_form">
        <h1>Login Form</h1>
        <InputField
          label="Email"
          name="email"
          className={
            formik.errors.email && formik.touched.email && " is-invalid"
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          errorLabel={formik.errors.email}
          iconClass="email"
          placeholder="Email "
        />

        <InputField
          label="Password"
          name="password"
          className={
            ((formik.errors.password && formik.touched.password) || error) &&
            " is-invalid"
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          errorLabel={formik.errors.password || error}
          iconClass="password"
          placeholder="Password "
        />

        <Button color="primary">Login</Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
