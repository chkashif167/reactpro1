import React, { useState } from "react";
import { Navbar, Nav, Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.scss";
import { useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";
import { logoutUser } from "../../store/reducers/actions/authActions";
import confirm from "reactstrap-confirm";
import LogOut from "../../views/Logout/Logout";

const NavBar = props => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.Auth.isLoggedIn
  }));

  const [isLogedOut, setIsLogedOut] = useState(false);

  const onCancelLogoutButton = () => {
    setIsLogedOut(false);
  };

  return (
    <div className="header_navigation">
      {isLogedOut && <LogOut onCancel={onCancelLogoutButton} />}

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
              <li className="shop">
                <i className="icon"></i>
                <Link to="/shop">Shop</Link>
              </li>
            </>
            {console.log("top navi ", isLoggedIn)}
            {isLogedOut || isLoggedIn || localStorage.getItem("_token") ? (
              <>
                <li className="dashboard">
                  <i className="icon"></i>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="logout">
                  <i className="icon"></i>

                  <Button
                    onClick={() => {
                      setIsLogedOut(true);
                    }}
                  >
                    Logout
                  </Button>
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
