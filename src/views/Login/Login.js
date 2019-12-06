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
import { Button, FormGroup, Label, Input, Container, Col } from "reactstrap";
import "./Login.scss";
import userRegister from "../../store/reducers/registerReducer";
import { addUserAction } from "../../store/reducers/registerReducer.js";
import InputField from "../../components/FormFields/InputField.js";
const Login = () => {
  //const [user, setUser] = useState("");
  //const usedispatch = useDispatch();
  const [user, setUser] = useState("");
  const usedispatch = useDispatch();
  const addUser = user => usedispatch(addUserAction(user));

  const ShowUser = useSelector(state => state.userRegister.fullname);

  return (
    <div className="login_container">
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
                htmlFor="email"
                type="email"
                name="email"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                errorlabel={errors.userName}
                errorClassname="invalid-feedback"
                graphicDiveClass="graphicDiv"
                graphicClassname="icon graphic email"
                placeholder="Email"
              />

              <InputField
                htmlFor="password"
                type="password"
                name="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                errorlabel={errors.userName}
                errorClassname="invalid-feedback"
                graphicDiveClass="graphicDiv"
                graphicClassname="icon graphic password"
                placeholder="Password"
              />

              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Login
                </button>
                <button type="reset" className="btn btn-secondary">
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Login;
