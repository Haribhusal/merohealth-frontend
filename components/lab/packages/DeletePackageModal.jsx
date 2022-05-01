import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeletePackageModal = ({ show, setShow, removePackage }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Delete Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete this package?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={removePackage}>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePackageModal;
