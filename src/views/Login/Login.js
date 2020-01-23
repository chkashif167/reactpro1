import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import "./login.scss";
import InputField from "../../components/FormFields/InputField.js";
import { loginApi } from "./loginApi";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authAction,
  loginUser
} from "../../store/reducers/actions/authActions";

const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.Auth.isLoggedIn
  }));

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
      setError("");
      setSuccess("");
      loginApi(values.email, values.password)
        .then(res => {
          const userinfo = {
            email: values.email,
            password: values.password,
            token: res.token
          };
          dispatch(loginUser(userinfo));
          localStorage.setItem("_token", JSON.stringify(res.token));
          setSuccess(res.message);
          history.push("/Dashboard");
        })
        .catch(err => {
          setError(err.response.data.message);
        });
    }
  });

  if (isLoggedIn || localStorage.getItem("_token")) {
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
        {error}
        {success}
      </form>
    </div>
  );
};

export default Login;
