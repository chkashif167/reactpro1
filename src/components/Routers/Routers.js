import React, { Fragment } from "react";

import { Route } from "react-router-dom";
//view
import Home from "../../views/Home/Home";
import Dashboard from "../../views/Dashboard/Dashboard";
import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";
import Form from "reactstrap/lib/Form";

const Routers = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Fragment>
  );
};
export default Routers;
