import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

const ToastMessage = ({ bg, message, show, setShow }) => {
  // const [show, setShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 5000);
  // }, []);
  return (
    <div className={show ? "messageToast" : "d-none"}>
      <div className={"px-4 py-2 rounded text-white bg-" + bg}>{message}</div>
      {/* <Toast  show={show}>
        <Toast.Body className="text-white"></Toast.Body>
      </Toast> */}
    </div>
  );
};

export default ToastMessage;
