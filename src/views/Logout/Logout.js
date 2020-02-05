import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/reducers/actions/authActions";
import { Redirect, withRouter } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

// this page view is not in use anymore

const LogOut = props => {
  const { onCancel } = props;

  const onConfirmLogoutButton = () => {
    localStorage.clear();
    onCancel();
    props.history.push("/");
  };

  return (
    <div className="home">
      <ConfirmDialog
        bodyText="this is body text"
        okButtonText="Confirm"
        cancelButtonText="Cancel"
        onCancleButtonClick={() => {
          console.log("clickedon cancle");
          onCancel();
        }}
        onOkButtonClick={() => {
          console.log("clickedon ok");
          onConfirmLogoutButton();
        }}
        modalTitle="This is modal Title"
        modalToggle={() => {
          console.log("clickedon toggle");
        }}
        modalOpen
      />
    </div>
  );
};

export default withRouter(LogOut);
