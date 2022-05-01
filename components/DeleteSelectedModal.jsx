import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteSelectedModal = ({ show, setShow, removeSelected }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        Are you sure?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={removeSelected}>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteSelectedModal;
