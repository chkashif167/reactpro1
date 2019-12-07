import React, { Component } from "react";
import { Navbar, Nav } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.scss";
class NavBar extends Component {
  render() {
    return (
      <div className="header_navigation">
        <Navbar className="navbarLinks" color="light" light expand="md">
          <h2 className="logo">
            <Link to="/">AdialaJee</Link>
          </h2>

          <Nav className="ml-auto" navbar>
            <ul className="navLinks">
              <li className="home">
                <i className="icon"></i>
                <Link to="/">Home</Link>
              </li>
              <li className="login">
                <i className="icon"></i>
                <Link to="/login">Login</Link>
              </li>
              <li className="register">
                <i className="icon"></i>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
