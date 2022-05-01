import React from "react";
import { Modal } from "react-bootstrap";

const UpdateProfileImageModal = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      className="modal_overview"
      keyboard={false}
      size="lg"
      centered
    ></Modal>
  );
};

export default UpdateProfileImageModal;
