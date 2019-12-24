import React from "react";
import "./cards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const CardsRowOne = ({
  mainicon,
  category,
  title,
  footerIcon,
  footerText,
  bigCircleClass
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card card-stats">
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <div className={`icon-circle ${bigCircleClass}`}>
                {/* <i className={` ${mainiconsClass} tim-icons`}></i> */}
                <FontAwesomeIcon icon={mainicon} />
              </div>
            </div>
            <div className="col-7 text-right">
              <div className="numbers">
                <p className="card-category m-0">{category}</p>
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="stats">
            <div>
              <i className={`${footerIcon}`}></i> {footerText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsRowOne;
