import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col
} from "reactstrap";
import "./Login.scss";
import userRegister from "../../store/reducers/registerReducer";

const Login = () => {
  //const [user, setUser] = useState("");
  //const usedispatch = useDispatch();

  const ShowUser = useSelector(state => state.userRegister.fullname);

  return (
    <Container className="Login">
      <h2>Login {ShowUser}</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
