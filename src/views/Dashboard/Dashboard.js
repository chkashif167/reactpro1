import React from "react";
import "./dashboard.scss";

import CardsRowOne from "../../components/Dashboard/CardsRowOne/Cards";
import Tasks from "../../components/Dashboard/Tasks/Tasks";
import Managment from "../../components/Dashboard/Managment/Managment";
import Highchart from "../../components/Dashboard/HighChart/Highchart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.Auth.isLoggedIn
  }));

  // console.log("dashboard page isloggedin", isLoggedIn);
  // console.log("dashboard page _token", localStorage.getItem("_token"));

  if (!localStorage.getItem("_token" || !isLoggedIn)) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div className="dashboard_container">
      <div className="col-lg-12 firstRowCards">
        <Highchart />
        <div className="row">
          <CardsRowOne
            mainicon={faCoffee}
            category="Number"
            bigCircleClass="firstCircle"
            title="150GB"
            footerIcon="fa fa-comments-o"
            footerText="Update Now"
          />
          <CardsRowOne
            mainicon={faAppleAlt}
            category="Followers"
            bigCircleClass="secondCircle"
            title="+45K"
            footerIcon="	fa fa-street-view"
            footerText="Last Research"
          />
          <CardsRowOne
            mainicon={faAddressCard}
            category="Users"
            bigCircleClass="thirdCircle"
            title="150,000"
            footerIcon="	fa fa-user"
            footerText="Customer feedback"
          />
          <CardsRowOne
            mainicon={faAtom}
            category="Errors"
            bigCircleClass="fourthCircle"
            title="23"
            footerIcon="fa fa-spinner "
            footerText="In the last hours"
          />
        </div>
      </div>

      <div className="col-lg-12 secondrowTasks">
        <div className="row">
          <Tasks />
          <Managment />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
