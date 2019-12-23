import React from "react";
import "./cards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const CardsRowOne = ({ mainicon, category, title, footerIcon, footerText }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card card-stats">
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <div className="info-icon text-center icon-warning">
                {/* <i className={` ${mainiconsClass} tim-icons`}></i> */}
                <FontAwesomeIcon icon={mainicon} />
              </div>
            </div>
            <div className="col-7">
              <div className="numbers">
                <p className="card-category">{category}</p>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <hr />
          <div className="stats">
            <div>
              <i className={`${footerIcon} icon-refresh-01`}></i> {footerText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsRowOne;
