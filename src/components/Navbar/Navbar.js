import React from "react";
import { Navbar, Nav } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../store/reducers/actions/authActions";

const NavBar = (props, { history }) => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.Auth.isLoggedIn
  }));
  console.log("top navigation", isLoggedIn);

  return (
    <div className="header_navigation">
      <Navbar className="navbarLinks" color="light" light expand="md">
        <h2 className="logo">
          <Link to="/">AdialaJee</Link>
        </h2>

        <Nav className="ml-auto" navbar>
          <ul className="navLinks">
            <>
              <li className="home">
                <i className="icon"></i>
                <Link to="/">Home</Link>
              </li>
            </>
            {console.log("top navi ", isLoggedIn)}
            {isLoggedIn || localStorage.getItem("_token") ? (
              <>
                <li className="dashboard">
                  <i className="icon"></i>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="logout">
                  <i className="icon"></i>
                  <Link to="/logout">LogOut</Link>
                </li>
              </>
            ) : (
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
};

export default NavBar;

const NavLink = ({ className, to, name }) => {
  return (
    <li className={className}>
      <i className="icon"></i>
      <Link to={to}>{name}</Link>
    </li>
  );
};
