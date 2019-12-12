import React, { Fragment } from "react";

import { Route } from "react-router-dom";
//view
import Home from "../../views/Home/Home";
import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";

const Routers = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Fragment>
  );
};
export default Routers;
