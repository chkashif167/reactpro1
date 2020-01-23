import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/reducers/actions/authActions";
import { Redirect } from "react-router-dom";

const LogOut = () => {
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.Auth.isLoggedIn
  }));

  console.log("log out page", isLoggedIn);

  localStorage.clear(isLoggedIn);
  return (
    <div className="home">
      <Redirect to={"/"} />; You are logged out from the app
    </div>
  );
};

export default LogOut;
