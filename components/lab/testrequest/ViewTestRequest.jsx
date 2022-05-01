/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useEffect } from "react";
import { labActions } from "../../../services/lab/action";
import {
  NEW_TEST_APPROVE_RESET,
  NEW_TEST_DECLINE_RESET,
  NEW_TEST_DETAIL_RESET,
} from "../../../services/lab/types";
import Loading from "../../Loading";
import ToastMessage from "../../Message";

const ViewTestRequest = ({
  lab,
  dispatch,
  singleRequestActive,
  onRunningList,
}) => {
  const { data, loading, status } = lab.getNewDetailTest;
  const { loading: approveLoading, status: approveStatus } = lab.approveNewTest;
  const { loading: declineLoading, status: declineStatus } = lab.declineNewTest;
  const patient = data.patient_data;

  const [show, setShow] = useState(false);

  const approveRequest = () => {
    dispatch(labActions.approveNewTest(data.id));
  };

  const declineRequest = () => {
    dispatch(labActions.declineNewTest(data.id));
  };

  useEffect(() => {
    if (approveStatus === "success") {
      setShow({ bg: "success", message: "Test Request Approved" });
      setTimeout(() => {
        setShow(false);
        // new test request list reset
        dispatch({ type: NEW_TEST_APPROVE_RESET });
        // new test request detail reset
        dispatch({ type: NEW_TEST_DETAIL_RESET });
        // get new test requests
        dispatch(labActions.getNewTest());
      }, 1000);
    }
  }, [approveStatus, dispatch, singleRequestActive]);

  useEffect(() => {
    if (declineStatus === "success") {
      setShow({ bg: "success", message: "Test Request Declined" });
      setTimeout(() => {
        setShow(false);
        dispatch({ type: NEW_TEST_DECLINE_RESET });
        // get new test requests
        dispatch(labActions.getNewTest());
        onRunningList();
      }, 2000);
    }
  }, [declineStatus, dispatch, onRunningList, singleRequestActive]);

  return (
    <div className="col-sm-5 fullheight rightbar">
      {show && <ToastMessage show={show} bg={show.bg} message={show.message} />}
      {loading && <Loading />}
      {status === "success" && (
        <div className="">
          {/* {data.count === 0 && (
            <div className="d-flex align-items-center py-5 justify-content-center text-center">
              <div className="text-wrapper">
                <h6 className="text-muted my-3 ">
                  <img src="/media/cart-empty.svg" alt="" />
                  No Request Selected!
                </h6>
              </div>
            </div>
          )} */}
          <div>
            <div className="top">
              <div className="user text d-flex align-items-center">
                <div className="icon mr-2">
                  <i className="las la-user-injured"></i>
                </div>
                <h6 className="title mb-0">
                  <div className="name">{patient.patient_name}</div>
                  <div
                    className={
                      data.payment_status == "Pending"
                        ? "status badge badge-warning"
                        : "status badge badge-success"
                    }
                  >
                    {data.payment_status}
                  </div>
                </h6>
              </div>
              <div className="payment pl-3 d-flex align-items-center">
                <div className="icon mr-2">
                  <i className="las la-wallet"></i>
                </div>
                <div className="text price d-flex gap">
                  <div className="pricelabel">Rs. {data.total_amount}/-</div>
                </div>
              </div>
            </div>
            <div className="end">
              <div className="upper testsrequestedbyuser pr-3">
                <form>
                  <div className="row">
                    <div className="col-sm-6 valuearea">
                      <div className="form-group">
                        <label>Patient Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={patient.patient_name}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 valuearea">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          value={patient.patient_email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 valuearea">
                      <div className="form-group">
                        <label>Tests & Packages Requested</label>
                        <ul className="tests">
                          {data.test_request_services.map((item, index) => (
                            <li
                              key={index}
                              className="d-flex flex-column bg_p_dim mb-2 px-3 py-2 pb-3 rounded mb-1 align-items-center justify-content-between"
                            >
                              {!!item.service.lab_test && (
                                <div className="name w-100 d-flex justify-content-between align-items-center mb-2">
                                  <div className="labels w-100 d-flex justify-content-between align-items-center">
                                    <div className="label f14 flex5">
                                      {item.service.lab_test?.test.name}
                                    </div>
                                    <div className="rightTestDetails d-flex flex5 gap align-items-center justify-content-end">
                                      <div className="price bg_w px-3 f14 full_rounded px-2">
                                        Hematology
                                      </div>
                                      <div className="price text_p bg_p_dim px-3 fw700 f14 full_rounded px-2">
                                        Rs. {item.amount}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!!item.service.lab_package && (
                                <div className="w-100">
                                  <div className="name w-100 d-flex justify-content-between align-items-center mb-2">
                                    <div className="labels w-100 d-flex justify-content-between align-items-center">
                                      <div className="label f14 flex5">
                                        {item.service.lab_package?.name}
                                      </div>
                                      <div className="rightTestDetails d-flex flex5 gap align-items-center justify-content-end">
                                        <div className="price text_p bg_p_dim px-3 fw700 f14 full_rounded px-2">
                                          Rs. {item.amount}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="subItems w-100 d-flex bg_w px-2 pt-2 pb-0 flex6 flex-wrap rounded">
                                    {item.service.lab_package?.lab_tests.map(
                                      (ele, index) => (
                                        <li
                                          key={index}
                                          className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14"
                                        >
                                          {ele.name}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                              {/* <ul className="subItems w-100 d-flex bg_w px-2 pt-2 pb-0 flex6 flex-wrap rounded">
                              <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                Platlet Count
                              </li>
                            </ul> */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                  <div className="col-sm-12 valuearea">
                    <div className="form-group">
                      <label>Packages Requested</label>
                      <ul className="tests">
                        {data.test_request_services.map((item, index) => (
                          <li
                            key={index}
                            className="d-flex flex-column bg_p_dim mb-2 px-3 py-2 pb-3 rounded mb-1 align-items-center justify-content-between"
                          ></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> */}
                  <div className="row">
                    <div className="col-sm-6 valuearea">
                      <div className="form-group">
                        <label>Patient Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={patient.patient_address}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 valuearea">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={patient.patient_phone_number}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 valuearea">
                      <div className="form-group">
                        <label>Patient Message</label>
                        <textarea rows="3" className="form-control" disabled>
                          {patient.patient_message}
                        </textarea>
                      </div>
                    </div>
                  </div>

                  {!!data.document && (
                    <div className="row">
                      <div className="col-sm-12 valuearea">
                        <div className="form-group">
                          <label>Uploaded Document</label>
                          <div className="imagesend d-flex align-items-center justify-content-between">
                            <a
                              href="#"
                              className="btn btn_small btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <i className="fa fa-paperclip"></i> View File
                            </a>
                            <div className="filename">
                              doctor-prescription2.jpg
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <hr />
                  <div className="labaction">
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-between gap">
                        <button
                          type="button"
                          className="btn btn_p flex1"
                          onClick={approveRequest}
                          disabled={approveLoading || declineLoading}
                        >
                          <i className="las la-check"></i> Approve
                        </button>
                        <button
                          type="button"
                          className="btn bg_p_dim flex1 btn_decline_trigger"
                          onClick={declineRequest}
                          disabled={declineLoading || approveLoading}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                    {/* <div className="declineformwrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <form action="" className="declineform d-block">
                          <div className="form-group">
                            <textarea
                              rows="3"
                              className="form-control my-3"
                              placeholder="Explain why you want to decline this test request?"
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn_p">
                              Submit and Cancel Request
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTestRequest;
