import React from "react";
import "./dashboard.scss";
import CardsRowOne from "../../components/Dashboard/CardsRowOne/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <CardsRowOne
          mainicon={faCoffee}
          category="Number"
          title="150GB"
          footerIcon="faCoffee"
          footerText="Update Now"
        />
        <CardsRowOne />
        <CardsRowOne />
        <CardsRowOne />
      </div>
    </div>
  );
};

export default Dashboard;
