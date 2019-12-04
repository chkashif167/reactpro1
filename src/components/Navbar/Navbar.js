import React, { Component } from "react";
import { Navbar, Nav } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.scss";
class NavBar extends Component {
  render() {
    return (
      <div className="header_navigation">
        <Navbar className="navbarLinks" color="light" light expand="md">
          <div className="logo">
            <Link to="/">AdialaJee</Link>
          </div>

          <Nav className="ml-auto" navbar>
            <ul className="navLinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
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
