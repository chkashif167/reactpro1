import React, { Component } from "react";
import { render } from "react-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonToggle,
  Container,
  Col
} from "reactstrap";
import "./home.scss";
import NavBar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import confirm from "reactstrap-confirm";
function triggerSuccess() {
  toast.success("Wow 🚀");
}

let result = confirm();
console.log("dddddddddddddddd", result);

const Home = () => {
  return (
    <div className="home">
      <button onClick={triggerSuccess}>Trigger Success</button>
      <ToastContainer /> Home
    </div>
  );
};

export default Home;
