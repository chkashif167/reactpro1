import React, { useState, useEffect } from "react";
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

const Home = () => {
  useEffect(() => {});
  return <div className="home">Home</div>;
};

export default Home;
