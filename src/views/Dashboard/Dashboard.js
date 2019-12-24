import React from "react";
import "./dashboard.scss";

import CardsRowOne from "../../components/Dashboard/CardsRowOne/Cards";
import TasksComponent from "../../components/Dashboard/Tasks/Tasks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="col-lg-12 firstRowCards">
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

      <div className="col-lg-12 ">
        <TasksComponent />
        <div className="col-lg-7">right</div>
      </div>
    </div>
  );
};

export default Dashboard;
