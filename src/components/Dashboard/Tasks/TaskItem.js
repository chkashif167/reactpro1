import React from "react";
import "./taskItem.scss";

const TaskItem = ({ heading, description }) => {
  return (
    <div className="col-lg-12 TaskItem">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 checkboxdiv">
          <div className="row">
            <label>
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="row">
            <h6>{heading} </h6>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 actionButtons">
          <div className="row">
            <i className="fa  fa-pencil"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
