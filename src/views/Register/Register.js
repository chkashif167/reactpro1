import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  handleBlur,
  handleChange
} from "formik";
import { Button, FormGroup, Label, Input, Container, Col } from "reactstrap";
import * as Yup from "yup";
import InputField from "../../components/FormFields/InputField.js";
import "./register.scss";

import { addUserAction } from "../../store/reducers/registerReducer.js";
import { registerApi } from "./registerApi";

const Register = () => {
  const [user, setUser] = useState("");
  const usedispatch = useDispatch();
  const addUser = userparam => usedispatch(addUserAction(userparam));

  return (
    <div className="register_container">
      <Formik
        initialValues={{
          userName: "",
          fullName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object().shape({
          userName: Yup.string()
            .required("User Name is required")
            .min(6, "User Name must be at least 6 characters"),

          fullName: Yup.string().required("Full Name is required"),

          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
          //.matches(
          //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          //  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          // ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required")
        })}
        onSubmit={fields => {
          //console.log(fields);
          addUser(fields);
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          registerApi(
            fields.userName,
            fields.fullName,
            fields.email,
            fields.password
          ).then(res => {
            // useinfor = {
            //   username: fields.userName,
            //   fullname: fields.fullName,
            //   email: fields.email,
            //   password: fields.password
            // }
            console.log(res);
            return <Redirect to={"/login"} />;
          });
        }}
        render={props => {
          const { handleBlur, handleChange, values, errors, touched } = props;

          if (sessionStorage.getItem("userData")) {
            return <Redirect to={"/"} />;
          }
          return (
            <Form className="register_form">
              <h1>Register</h1>
              {/* {console.log(errors, touched)} */}
              <InputField
                label="User Name"
                name="userName"
                className={errors.userName && touched.userName && " is-invalid"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                errorLabel={errors.userName}
                iconClass="username"
                placeholder="User Name"
              />

              <InputField
                label="Full Name"
                name="fullName"
                className={errors.fullName && touched.fullName && " is-invalid"}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                errorLabel={errors.fullName}
                iconClass="fullname"
                placeholder="Full Name"
              />
              <InputField
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                errorLabel={errors.email}
                errorClassname="invalid-feedback"
                iconClass="email"
                placeholder="Email"
              />

              <InputField
                label="Password"
                htmlFor="password"
                type="password"
                name="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                errorLabel={errors.password}
                errorClassname="invalid-feedback"
                iconClass="password"
                placeholder="Password"
              />

              <InputField
                label="Confirm Password"
                htmlFor="confirmPassword"
                type="password"
                name="confirmPassword"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                errorLabel={errors.confirmPassword}
                errorClassname="invalid-feedback"
                iconClass="password"
                placeholder="Confirm Password"
              />

              <div className="form-group">
                <Button color="primary">Register</Button>{" "}
                <Button type="reset" color="secondary">
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Register;
