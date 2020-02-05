//https://reactstrap.github.io/components/modals/
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmDialog = props => {
  const {
    className,
    bodyText,
    okButtonText,
    cancelButtonText,
    onCancleButtonClick,
    onOkButtonClick,
    modalTitle,
    modalToggle,
    modalOpen
  } = props;

  return (
    <Modal
      isOpen={modalOpen}
      toggle={modalToggle}
      className={"modal-class " + className}
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onOkButtonClick}>
          {okButtonText}
        </Button>{" "}
        <Button color="secondary" onClick={onCancleButtonClick}>
          {cancelButtonText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDialog;
