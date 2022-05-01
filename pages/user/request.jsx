/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserLayout from "../../components/user/UserLayout";
import { userActions } from "../../services/user/action";
import withAuth from "../../config/withAuth";
import Loading from "../../components/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import CustomDate from "../../components/date/CustomDate";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const UserRequest = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.getTestRequest;

  const {
    data: singleData,
    loading: singleLoading,
    status: singleStatus,
  } = user.singleTestRequest;

  const [open, setOpen] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const onSingleData = (id) => {
    if (open === id) {
      setOpen(0);
    } else {
      setOpen(id);
      dispatch(userActions.singleTestRequest(id));
    }
  };

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(userActions.getTestRequest(pageNumber * 10 - 10));
    router.push({
      pathname: "/user/request",
      query: { page: pageNumber },
    });
  };

  // get all test requests
  useEffect(() => {
    dispatch(
      userActions.getTestRequest(
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.page]);

  return (
    <UserLayout>
      <div className="midwrapper">
        <div className="lab-requests text-wrapper">
          <div className="title bg_p px-4 py-4 rounded myrequestsheading  d-flex align-items-center justify-content-between mb-4">
            <div className="left d-flex  gap">
              <i className="las la-flask px-3 py-3 bg_w_dim"></i>
              <div className="wrap">
                <h3 className="title  mb-2">My Lab Request</h3>
                <p className="small ">
                  Click on the each request to view the details
                </p>
              </div>
            </div>
            <div className="right">
              <Link href={{ pathname: "/search", query: { keyword: "" } }}>
                <a>
                  <button type="button" className="btn btn_p btn_add">
                    Add New Request
                  </button>
                </a>
              </Link>
            </div>
          </div>

          {loading && <Loading />}

          {status === "success" && (
            <div>
              <ul className="requests">
                {!data.results.length && (
                  <div className="emptystate py-5 d-flex align-items-center justify-content-center flex-column">
                    <img
                      src="/media/cart-empty.svg"
                      style={{ maxWidth: "100px" }}
                      alt="no found"
                    />
                    <h5 className="my-3">
                      You have no lab request yet. <br />
                    </h5>
                  </div>
                )}
                {data.results.map((item, index) => (
                  <li key={index} className="request m-0 p-0">
                    <div
                      className="upper"
                      onClick={() => onSingleData(item.id)}
                    >
                      <div className="quickinfo px-4 py-3 d-flex gap align-items-center">
                        <div className="labtests flex4 ">
                          <div className="tests d-flex">
                            <div className="name">
                              {item.data?.tests.length ? (
                                <div>
                                  {item.data.tests.map((test, ind) => (
                                    <span
                                      className="text-capitalize testbadge"
                                      key={ind}
                                    >
                                      {" "}
                                      {test}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <div>
                                  {item.data.packages.map((pack, ind) => (
                                    <span
                                      className="d-inline-block mr-1"
                                      key={ind}
                                    >
                                      {pack}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="price">
                            <i className="las la-wallet mt-1 text_p f16"></i>{" "}
                            Rs. {item.final_amount ?? "N/A"}
                          </div>
                        </div>
                        <div className="labinfo flex3">
                          <h6 className="labname text_p mb-2">
                            <i className="las la-hospital mt-1 text_p f20"></i>{" "}
                            {item?.lab?.name ?? "N/A"}
                          </h6>

                          <div className="time">
                            <span className="text-muted d-flex">
                              <i className="las la-clock mt-1  f16"></i>{" "}
                              <CustomDate date={item.created_at ?? "N/A"} />
                            </span>
                          </div>
                        </div>
                        <div className="status flex2 text-center">
                          <div className="bg_p_dim text_p rounded py-2">
                            {item.status ?? "N/A"}
                          </div>
                          <span className="text-muted">Current Status</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        open === item.id ? "lower d-block activeTest" : "lower"
                      }
                    >
                      {singleLoading && <Loading />}
                      {singleStatus === "success" && (
                        <div className="more_info_lab px-4 py-4">
                          <div className="steps">
                            <div className="step">
                              <div className="bg_w f14">
                                <div className="step_title d-flex align-items-center justify-content-between">
                                  <p className="text-muted mb-0">
                                    Step 1{" "}
                                    <i className="las la-angle-right f12"></i>{" "}
                                    Approval
                                  </p>
                                  <OverlayTrigger
                                    overlay={<Tooltip>Approval Status</Tooltip>}
                                  >
                                    <i className="las la-question-circle"></i>
                                  </OverlayTrigger>
                                </div>

                                <div className="status bg_p_dim py-2 text-center my-2 text_p f14">
                                  {singleData.is_approved
                                    ? "Request Approved"
                                    : "Request Pending"}
                                </div>
                                <div className="mb-2">
                                  <p className="text-muted mb-2">
                                    Payment Details
                                  </p>
                                  <ul className="m-0 text-muted">
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="lar la-calendar-check mr-2"></i>{" "}
                                          {singleData.payment_method}
                                        </div>
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="lar la-calendar-check mr-2"></i>{" "}
                                          Rs. {singleData.final_amount} /-
                                        </div>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <hr />
                                {singleData.is_approved && (
                                  <div>
                                    <p className="text-muted mb-2">
                                      Approval Details
                                    </p>
                                    <ul className="m-0 text-muted">
                                      <li>
                                        <p className="text-muted f14 mb-0">
                                          <div className="d-flex align-items-center">
                                            <i className="lar la-calendar-check mr-2"></i>{" "}
                                            <CustomDate
                                              date={singleData.approved_time}
                                            />
                                          </div>
                                        </p>
                                      </li>
                                      <li>
                                        <p className="text-muted f14 mb-0">
                                          <div className="d-flex align-items-center">
                                            <i className="lar la-user mr-2"></i>{" "}
                                            {singleData.approved_by?.full_name}
                                          </div>
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                            {!!singleData.collector && (
                              <div className="step">
                                <div className="bg_w f14">
                                  <div className="step_title d-flex align-items-center justify-content-between">
                                    <p className="text-muted mb-0">
                                      Step 2{" "}
                                      <i className="las la-angle-right f12"></i>{" "}
                                      Collector
                                    </p>
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip>
                                          See who is assigned to take your
                                          sample
                                        </Tooltip>
                                      }
                                    >
                                      <i className="las la-question-circle"></i>
                                    </OverlayTrigger>
                                  </div>

                                  <div className="status bg_p_dim py-2 text-center my-2 text_p f14">
                                    Collector Assigned
                                  </div>

                                  <p className="text-muted mb-2">Assigned to</p>
                                  <ul className="m-0 text-muted">
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="lar la-user mr-2"></i>{" "}
                                          {
                                            singleData.collector.user_data
                                              .full_name
                                          }
                                        </div>
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="las la-briefcase-medical mr-2"></i>{" "}
                                          {singleData.collector.role}
                                        </div>
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="las la-phone mr-2"></i>
                                          {
                                            singleData.collector.user_data
                                              .phone_number
                                          }
                                        </div>
                                      </p>
                                    </li>
                                    <hr />
                                    <p className="text-muted mb-2">
                                      Collection Date and Time
                                    </p>
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="lar la-calendar-check mr-2"></i>{" "}
                                          {singleData.collection_date}
                                        </div>
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="lar la-clock mr-2"></i>{" "}
                                          {singleData.collection_time}
                                        </div>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                            {!!singleData.collected_samples.length && (
                              <div className="step">
                                <div className="bg_w  f14">
                                  <div className="step_title d-flex align-items-center justify-content-between">
                                    <p className="text-muted mb-0">
                                      Step 3{" "}
                                      <i className="las la-angle-right f12"></i>{" "}
                                      Samples
                                    </p>
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip>
                                          Confirm your tests and Payment Details
                                        </Tooltip>
                                      }
                                    >
                                      <i className="las la-question-circle"></i>
                                    </OverlayTrigger>
                                  </div>

                                  <div className="status bg_p_dim py-2 text-center my-2 text_p f14">
                                    Collected Samples
                                  </div>

                                  <p className="text-muted mb-2">
                                    Samples Collected
                                  </p>
                                  <ul className="m-0 text-muted">
                                    {singleData.collected_samples.map(
                                      (item, index) => (
                                        <li key={index}>
                                          <p className="text-muted f14 mb-0">
                                            <div className="d-flex align-items-center">
                                              <i className="las la-vials mr-2"></i>{" "}
                                              {item.name}
                                            </div>
                                          </p>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                  <p className="text-muted mt-2">
                                    Payment Collected
                                  </p>
                                  <ul className="m-0 text-muted py-2">
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="las la-wallet mr-2"></i>{" "}
                                          Rs. {singleData.paid_amount}
                                        </div>
                                      </p>
                                    </li>
                                  </ul>
                                  <p className="text-muted mt-2">
                                    Report Arrival Time
                                  </p>
                                  <ul className="m-0 text-muted py-2">
                                    <li>
                                      <p className="text-muted f14 mb-0">
                                        <div className="d-flex align-items-center">
                                          <i className="las la-clock mr-2"></i>{" "}
                                          {singleData.time_estimation}{" "}
                                          (estimated)
                                        </div>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                            {singleData.is_completed && (
                              <div className="step">
                                <div className="bg_w  f14">
                                  <div className="step_title d-flex align-items-center justify-content-between">
                                    <p className="text-muted mb-0">
                                      Step 4{" "}
                                      <i className="las la-angle-right f12"></i>{" "}
                                      Report
                                    </p>
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip>
                                          Download Generated Report and View the
                                          message
                                        </Tooltip>
                                      }
                                    >
                                      <i className="las la-question-circle"></i>
                                    </OverlayTrigger>
                                  </div>

                                  <div className="status bg_p_dim py-2 text-center my-2 text_p f14">
                                    Generated Report
                                  </div>

                                  <p className="text-muted mb-2">
                                    Report Actions
                                  </p>
                                  <ul className="m-0 text-muted">
                                    {singleData.test_request_reports.map(
                                      (rpt, index) => (
                                        <li key={index}>
                                          <a
                                            className="f14 mb-0"
                                            href={rpt.report}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <div className="d-flex align-items-center">
                                              <i className="las la-cloud-download-alt mr-2"></i>{" "}
                                              Download Report {index + 1}
                                            </div>
                                          </a>
                                        </li>
                                      )
                                    )}
                                    {/* <li>
                                      <a
                                        className="text-muted f14 mb-0"
                                        href="#"
                                      >
                                        <div className="d-flex align-items-center">
                                          <i className="las la-share mr-2"></i>{" "}
                                          Forward
                                        </div>
                                      </a>
                                    </li> */}
                                  </ul>
                                  <hr />
                                  <p className="text-muted mt-3 mb-2">
                                    Message to Patient
                                  </p>
                                  <p className=" mt-2">{singleData.message}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {!!data.results.length && (
                <div className="d-flex justify-content-between a">
                  <div className="text-muted">
                    Showing{" "}
                    {!!router.query.page ? router.query.page * 10 - 10 : 0} -{" "}
                    {data.next === null
                      ? data.count
                      : !!router.query.page
                      ? router.query.page * 10
                      : 10}{" "}
                    of total {data.count}
                  </div>
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={data.count}
                    pageRangeDisplayed={5}
                    onChange={onChangePaginate}
                    innerClass="pagination"
                    itemClass="page-item"
                    activeLinkClass="page-link active"
                    linkClass="page-link"
                    prevPageText="Previous"
                    nextPageText="Next"
                  />
                </div>
              )}

              {/* <div className="row">
                <div className="col-sm-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item ">
                        <Link
                          href={{
                            pathname: "/user/request",
                            query: { current: page },
                          }}
                        >
                          <a className="page-link active">{page}</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default withAuth(UserRequest);
