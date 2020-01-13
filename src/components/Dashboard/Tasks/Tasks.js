import React from "react";
import "./tasks.scss";
import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <div className="col-lg-5 ">
      <div className="col-lg-12 tasksSections">
        <div className="card-header">
          <h6 className="d-inline">Tasks (5)</h6>
          <span className="d-inline date">Today</span>
          <div className="settingButton">
            <i className="fa fa-cog"></i>
          </div>
        </div>
        <TaskItem
          heading="GDPR Compliance"
          description="The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states."
        />
        <TaskItem
          heading="Solve the issues"
          description="Fifty percent of all respondents said they would be more likely to shop at a company"
        />
        <TaskItem
          heading="Release v2.0.0"
          description="Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM"
        />
        <TaskItem
          heading="Export the processed files"
          description="The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs."
        />
        <TaskItem
          heading="Arival at export process"
          description="The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states."
        />
      </div>
    </div>
  );
};

export default Tasks;
