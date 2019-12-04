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
import * as Yup from "yup";
import InputField from "../../components/FormFields/InputField.js";
import "./Register.scss";

import { addUserAction } from "../../store/reducers/registerReducer.js";

const Register = () => {
  const [user, setUser] = useState("");
  const usedispatch = useDispatch();
  const addUser = user => usedispatch(addUserAction(user));

  return (
    <div className="register_container">
      <Formik
        initialValues={{
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object().shape({
          userName: Yup.string()
            .required("User Name is required")
            .min(6, "User Name must be at least 6 characters"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required")
        })}
        onSubmit={fields => {
          addUser(fields);
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={props => {
          const {
            handleBlur,
            handleChange,
            values,
            errors,
            status,
            touched
          } = props;
          return (
            <Form className="register_form">
              <h1> Register</h1>
              {console.log(errors)}
              <InputField
                htmlFor="userName"
                label="User Name"
                type="text"
                name="userName"
                className={
                  "form-control" +
                  (errors.userName && touched.userName ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                errorlabel={errors.userName}
                errorClassname="invalid-feedback"
              />

              <InputField
                htmlFor="firstName"
                label="First Name"
                type="text"
                name="firstName"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                errorlabel={errors.firstName}
                errorClassname="invalid-feedback"
              />

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Register
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Register;
