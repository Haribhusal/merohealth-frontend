import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteImageModal = ({ show, setShow, onRemoveImage }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Delete Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete this Image?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="btn-sm" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" className="btn-sm" onClick={onRemoveImage}>
          Proceed
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteImageModal;
