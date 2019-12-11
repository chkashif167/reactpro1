import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  handleBlur,
  handleChange
} from "formik";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label, Input, Container, Col } from "reactstrap";
import "./Login.scss";
import userRegister from "../../store/reducers/registerReducer";
import { addUserAction } from "../../store/reducers/registerReducer.js";
import InputField from "../../components/FormFields/InputField.js";
const Login = () => {
  const [user, setUser] = useState("");
  const usedispatch = useDispatch();
  const addUser = user => usedispatch(addUserAction(user));
  const ShowUser = useSelector(state => state.userRegister.fullname);

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
      alert(JSON.stringify(values, null, 2));
    }
  });

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
            formik.errors.password && formik.touched.password && " is-invalid"
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          errorLabel={formik.errors.password}
          iconClass="password"
          placeholder="Password "
        />
        <Button color="primary">Login</Button>
      </form>
    </div>
  );
};

export default Login;
