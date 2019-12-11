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

const Login = props => {
  const { handleBlur, handleChange, values, errors, touched } = props;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label="email"
        name="email"
        className={errors.email && touched.email && " is-invalid"}
        onBlur={handleBlur}
        onChange={handleChange}
        value={formik.values.email}
        errorLabel={errors.email}
        iconClass="email"
        placeholder="Email "
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
