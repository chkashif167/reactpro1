import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import "./login.scss";
import InputField from "../../components/FormFields/InputField.js";
import { loginApi } from "./loginApi";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/reducers/userReducer";

const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const [loggedin, setLoggedin] = useState({ isLoggedIn: false });

  const loginUserDispath = useDispatch();
  const loginUser = userParam => {
    // console.log(userParam);
    loginUserDispath(userAction(userParam));
  };

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
          const userinfo = {
            email: values.email,
            password: values.password,
            token: res.token
          };
          console.log(userinfo);
          loginUser(userinfo);
          // sessionStorage.setItem("userData", JSON.stringify(res.token));
          setLoggedin({ isLoggedIn: true });
          return <Redirect to={"/dashboard"} />;
        })
        .catch(err => {
          //console.log(err.response.data.error);
          //setError(err.response.data.error);
        });
    }
  });

  if (sessionStorage.getItem("userData") || loggedin.isLoggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login_container">
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

export default Login;
