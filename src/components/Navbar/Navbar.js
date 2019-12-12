import React, { Component } from "react";
import { Navbar, Nav } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.scss";
class NavBar extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="header_navigation">
        <Navbar className="navbarLinks" color="light" light expand="md">
          <h2 className="logo">
            <Link to="/">AdialaJee</Link>
          </h2>

          <Nav className="ml-auto" navbar>
            <ul className="navLinks">
              {isLoggedIn && (
                <NavLink
                  className="dashboard"
                  to="/dashbaord"
                  name="Dashboard"
                />
              )}
              <NavLink className="home" to="/" name="Home" />

              {!isLoggedIn && (
                <>
                  <li className="login">
                    <i className="icon"></i>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="register">
                    <i className="icon"></i>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

const NavLink = ({ className, to, name }) => {
  return (
    <li className={className}>
      <i className="icon"></i>
      <Link to={to}>{name}</Link>
    </li>
  );
};
