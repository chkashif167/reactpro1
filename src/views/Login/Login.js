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
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string().required("Password is required")
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
              <h1> Login</h1>
              {console.log(errors)}

              <InputField
                htmlFor="email"
                label="Email"
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
                iconClass=" email"
                placeholder="Email"
              />

              <InputField
                htmlFor="password"
                label="Password"
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
                iconClass=" password"
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
