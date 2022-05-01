/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { labActions } from "../../../services/lab/action";

import CollectorForm from "./running-forms/CollectorForm";
import ConfirmationForm from "./running-forms/ConfirmationForm";
import UploadReport from "./running-forms/UploadReport";

const ViewRunningRequest = ({
  dispatch,
  lab,
  selectedRunning,
  singleData,
  setSelectedRunning,
}) => {
  const [isOpen, setIsOpen] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(0);

  // get lab running test detail single data
  const { data, loading, status } = lab.getRunningTestDetail;
  const { data: getRunningData, status: getRunningStatus } = lab.getRunningTest;

  useEffect(() => {
    if (status === "success") {
      if (data.status === "Request Approved") {
        setIsOpen(1);
        setCurrentStatus(1);
      } else if (data.status === "Collector Assigned") {
        setCurrentStatus(2);
        setIsOpen(2);
      }

      if (singleData.collected_samples?.length > 0) {
        setCurrentStatus(3);
        setIsOpen(3);
      }
    }
  }, [data.status, singleData, status]);

  // get lab samples
  useEffect(() => {
    dispatch(labActions.getSamples());
  }, [dispatch]);

  return (
    <div className="col-sm-5 fullheight rightbar runningRequest">
      {getRunningStatus === "success" && (
        <div>
          {getRunningData.count !== 0 && (
            <div>
              {loading && (
                <div
                  className="text-center d-flex justify-content-center align-items-center font-weight-bold"
                  style={{ height: "100vh" }}
                >
                  <div>
                    <img src="/media/load-svg.svg" alt="" />
                    <div>Loading....</div>
                  </div>
                </div>
              )}
              {status === "success" && (
                <div className="top ">
                  <div className="user text d-flex align-items-center">
                    <div className="icon mr-2">
                      <i className="las la-user-injured"></i>
                    </div>
                    <div className="patientinfo">
                      <h6 className="title mb-0 p-0">
                        {data.patient_data.patient_name}
                      </h6>
                      <p>
                        <small className="text-muted m-0 p-0">
                          {/* {data.patient_data.patient_address} */}
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="payment pl-3 d-flex align-items-center">
                    <div className="icon mr-2">
                      <i className="las la-wallet"></i>
                    </div>
                    <div className="text price d-flex gap">
                      <div className="pricelabel">
                        Rs. {data.total_amount}/-
                      </div>
                      <div className="status bg_p_dim f14 px-3 full_rounded text_p">
                        {data.status}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {status === "success" && (
                <div className="end">
                  <div className="upper w-100 testsrequestedbyuser pr-3 pt-3">
                    <div
                      id="accordion"
                      className="services_groups runningSteps"
                    >
                      {/* request details  */}
                      <div className="card services_group">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-block d-flex justify-content-between group_name align-items-center"
                              onClick={() => setIsOpen(0)}
                            >
                              <div className="stepIcon">1</div>
                              <div className="label text_p f16">
                                Request Details
                              </div>
                              <div className="heading-right d-flex gap align-items-center">
                                <div className="attachment d-flex align-items-center">
                                  <i className="fa fa-paperclip f20 text_p"></i>
                                </div>

                                <div className="price f14 text-muted bg_w full_rounded px-3 text-center mb-0 d-flex align-items-center">
                                  {currentStatus >= 1 && "Approved"}
                                </div>
                              </div>
                            </button>
                          </h5>
                        </div>

                        <div
                          id="requestDetails"
                          className={
                            isOpen === 0 ? "collapse show" : "collapse"
                          }
                        >
                          <div className="step1data">
                            <div className="row">
                              <div className="col-sm-12 valuearea">
                                <div className="form-group">
                                  <div className="labelarea mb-2 d-flex justify-content-between align-items-center">
                                    <label htmlFor="title" className="mb-0">
                                      Requested
                                    </label>
                                    {/* //view attachment
                            <div className="viewattachment d-flex align-items-center">
                              <a
                                href="#"
                                className="f14"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                {" "}
                                <i className="fa fa-paperclip f16 mr-2 text_p"></i>
                                View attachment
                              </a>
                            </div> */}
                                  </div>

                                  <ul className="tests">
                                    {data.test_request_services.map((item) => (
                                      <li
                                        key={item}
                                        className="d-flex flex-column bg_p_dim mb-2 px-3 py-2 pb-3 rounded mb-1 align-items-center justify-content-between"
                                      >
                                        <div className="name w-100 d-flex justify-content-between align-items-center mb-2">
                                          <div className="labels w-100 d-flex justify-content-between align-items-center">
                                            <div className="label f14 flex4">
                                              {item.service.lab_test?.test.name}
                                            </div>
                                            <div className="rightTestDetails d-flex flex4 gap align-items-center justify-content-end">
                                              <div className="price bg_w px-3 f14 full_rounded px-2 ">
                                                {
                                                  item.service.lab_test?.lab
                                                    .name
                                                }
                                              </div>
                                              <div className="price text_p bg_p_dim px-3 fw700 f14   full_rounded px-2 ">
                                                Rs. {item.final_amount}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <ul className="subItems w-100 d-flex bg_w px-2 pt-2 pb-0 flex6 flex-wrap rounded">
                                          <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                            Quantity: {item.quantity}
                                          </li>
                                          <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                            Discount: Rs. {item.discount_amount}
                                          </li>
                                          <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                            Type:{" "}
                                            {item.service.lab_test
                                              ? "Lab Test"
                                              : "Lab Package"}
                                          </li>
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              {/* <div className="col-sm-12 valuearea">
                        <div className="form-group">
                          <label htmlFor="title">Packages Requested</label>
                          <ul className="tests">
                            <li className="d-flex flex-column bg_p_dim mb-2 px-3 py-2 pb-3 rounded mb-1 align-items-center justify-content-between">
                              <div className="name w-100 d-flex justify-content-between align-items-center mb-2">
                                <div className="labels w-100 d-flex justify-content-between align-items-center">
                                  <div className="label f14 flex5">
                                    Package Name
                                  </div>
                                  <div className="rightTestDetails d-flex flex5 gap align-items-center justify-content-end">
                                    <div className="price text_p bg_p_dim px-3 fw700 f14   full_rounded px-2 ">
                                      Rs. 1288
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul className="subItems w-100 d-flex bg_w px-2 pt-2 pb-0 flex6 flex-wrap rounded">
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  Platlet Count
                                </li>
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  WBC Count
                                </li>
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  WBC Count
                                </li>
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  WBC Count
                                </li>
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  WBC Count
                                </li>
                                <li className="subitem bg_p_dim full_rounded px-3 mr-2 mb-2 f14">
                                  WBC Count
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                              <div className="col-sm-12 valuearea">
                                <div className="form-group">
                                  <label htmlFor="title">Phone Number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={
                                      data.patient_data.patient_phone_number
                                    }
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12 valuearea">
                                <div className="form-group">
                                  <label htmlFor="title">Address</label>
                                  <textarea
                                    rows="3"
                                    className="form-control"
                                    disabled
                                    defaultValue={
                                      data.patient_data.patient_address
                                    }
                                  ></textarea>
                                </div>
                              </div>
                              {/* <div className="col-sm-6 valuearea">
                        <div className="form-group">
                          <label htmlFor="title">Requested at</label>
                          <input
                            type="text"
                            className="form-control"
                            data-toggle="modal"
                            data-placement="top"
                            title="4 m ago"
                            value="12 November, 12:34 PM"
                            disabled
                          />
                        </div>
                      </div> */}
                              <div className="col-sm-12 valuearea">
                                <div className="form-group">
                                  <label htmlFor="title">Patient Message</label>
                                  <textarea
                                    rows="3"
                                    className="form-control"
                                    disabled
                                    defaultValue={
                                      data.patient_data.patient_message
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* assign sample collector  */}
                      <div className="card services_group">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-block d-flex justify-content-between group_name align-items-center"
                              onClick={() => setIsOpen(1)}
                            >
                              <div className="stepIcon">2</div>
                              <div className="label text_p f16">
                                Assigning Sample Collector
                              </div>
                              <div className="heading-right d-flex gap align-items-center">
                                <div className="attachment d-flex align-items-center"></div>

                                <div className="price f14 text-muted bg_w full_rounded px-3 text-center mb-0 d-flex align-items-center">
                                  {currentStatus >= 2 && "Assigned"}
                                </div>
                              </div>
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          className={
                            isOpen === 1 ? "collapse show" : "collapse"
                          }
                        >
                          <div className="step1data">
                            <CollectorForm
                              dispatch={dispatch}
                              lab={lab}
                              selectedRunning={selectedRunning}
                              singleData={singleData}
                              setIsOpen={setIsOpen}
                              setSelectedRunning={setSelectedRunning}
                            />
                          </div>
                        </div>
                      </div>
                      {/* confirmation form  */}
                      {singleData.collector !== null && (
                        <div className="card services_group">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-block d-flex justify-content-between group_name align-items-center collapsed"
                                onClick={() => setIsOpen(2)}
                              >
                                <div className="stepIcon">3</div>
                                <div className="label text_p f16">
                                  Confirmation
                                </div>
                                <div className="heading-right d-flex gap align-items-center">
                                  <div className="attachment d-flex align-items-center"></div>

                                  <div className="price f14 text-muted bg_w full_rounded px-3 text-center mb-0 d-flex align-items-center">
                                    {currentStatus >= 3 && "Confirmed"}
                                  </div>
                                </div>
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className={
                              isOpen === 2 ? "collapse show" : "collapse"
                            }
                          >
                            <div className="step1data">
                              <ConfirmationForm
                                dispatch={dispatch}
                                lab={lab}
                                selectedRunning={selectedRunning}
                                setIsOpen={setIsOpen}
                                setSelectedRunning={setSelectedRunning}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {/* upload report  */}
                      {!!singleData.collected_samples.length && (
                        <div className="card services_group">
                          <div className="card-header" id="headingthree">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-block d-flex justify-content-between group_name align-items-center collapsed"
                                onClick={() => setIsOpen(3)}
                              >
                                <div className="stepIcon">4</div>
                                <div className="label text_p f16">
                                  Upload Report
                                </div>
                                <div className="heading-right d-flex gap align-items-center">
                                  <div className="attachment d-flex align-items-center"></div>

                                  <div className="price f14 text-muted bg_w full_rounded px-3 text-center mb-0 d-flex align-items-center">
                                    {currentStatus >= 4 && "Uploading..."}
                                  </div>
                                </div>
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapsethree"
                            className={
                              isOpen === 3 ? "collapse show" : "collapse"
                            }
                          >
                            <div className="step1data">
                              <UploadReport
                                dispatch={dispatch}
                                lab={lab}
                                id={selectedRunning}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {getRunningData.count === 0 && (
            <li className="d-flex align-items-center py-5 justify-content-center text-center">
              <div className="text-wrapper">
                <img src="/media/cart-empty.svg" alt="" />
                <h6 className="text-muted my-3 ">No Request Selected!</h6>
              </div>
            </li>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewRunningRequest;
