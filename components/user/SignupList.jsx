/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Modal } from "react-bootstrap";

const SignupList = ({ show, handleClose }) => {
  return (
    <div
      className="modal fade"
      id="useServiceAs"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="bg_p_dim p-0">
          <div className="title bg_w p rounded f18 fw700 d-flex align-items-center justify-content-between">
            <div className="flex2 d-flex justify-content-start">
              <div className="logo ">
                <img src="../../media/logo.svg" alt="" className="img-fluid" />
              </div>
            </div>

            <div className="flex10 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn_p_b f12 "
                data-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
          <div className="userTypes my-3 px-3">
            <div className="row">
              <div className="col-sm-6">
                <div className="typewrapper bg_w p rounded">
                  <figure>
                    <img
                      src="../../media/taking-blood.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <div className="details">
                    <h3 className="title f18 text_p mb-2 fw700">
                      Join as Laboratory
                    </h3>
                    <p className="text-muted f14">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Saepe possimus nam consequatur tempore! Placeat eveniet,
                      vero a fugiat odio assumenda?
                    </p>
                    <div className="buttonwrapper mt-3">
                      <Link href="/lab-signup">
                        <a>
                          <button className="btn btn_p">Register Now</button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="joinFooter bg_w p mt-3 rounded">
            <div className="row">
              <div className="col-sm-12">
                <div className="linkswrapper ">
                  <ul className="d-flex align-items-center justify-content-center gap">
                    <li>
                      <a href="/how-it-works" className="f14 text_p">
                        How it works?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="f14 text_p">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="/help" className="f14 text_p">
                        Help and Support{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="f14 text_p">
                        Why choose us{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupList;
