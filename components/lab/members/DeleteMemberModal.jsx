import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteMemberModal = ({ show, setShow, removeMember }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Delete Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete this member?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={removeMember}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteMemberModal;
