import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";
//view
import Home from "../../views/Home/Home";
import Dashboard from "../../views/Dashboard/Dashboard";
import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";
import Protected from "../Protected/Protected";
import Logout from "../../views/Logout/Logout";
import { ToastContainer, toast } from "react-toastify";

import Shop from "../../views/Shop/Shop";

const Routers = () => {
  return (
    <Fragment>
      <Route path="/" exact>
        <Protected component={Home} />
      </Route>
      <Route path="/shop" component={Shop} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
    </Fragment>
  );
};
export default Routers;
