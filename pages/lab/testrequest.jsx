/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabLayout from "../../components/lab/LabLayout";
import AddTestRequest from "../../components/lab/testrequest/AddTestRequest";
import CompletedtList from "../../components/lab/testrequest/CompletedList";
import RequestList from "../../components/lab/testrequest/RequestList";
import RunningList from "../../components/lab/testrequest/RunningList";
import ViewRunningRequest from "../../components/lab/testrequest/ViewRunningRequest";
import ViewTestRequest from "../../components/lab/testrequest/ViewTestRequest";
import withAuth from "../../config/withAuth";
import { labActions } from "../../services/lab/action";
import { appUtils } from "../../utils/appUtils";

const TestRequest = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);
  const auth = useSelector((state) => state.auth);

  // const { data, loading, status } = lab.getLabTest;
  useEffect(() => {
    // get new test requests
    // dispatch(labActions.getNewTest());
    // if user has not created lab return to dashboard
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
  }, [dispatch, router]);

  // on category active
  // new running completed
  const [active, setActive] = useState(0);
  // on new request press
  // 0 is new test request
  // 1 is running test
  // 2 is completed test
  const [isAddRequest, setIsAddRequest] = useState(1);
  // on single New Request Show
  const [singleRequestActive, setSingleRequestActive] = useState(false);
  // selected current running test
  const [selectedRunning, setSelectedRunning] = useState(0);
  // selected current running value
  const [singleSelectedRunning, setSingleSelectedRunning] = useState(false);

  // when single data is pressed
  const onSingleNewReq = (item) => {
    setIsAddRequest(1);
    setSingleRequestActive(item.id);
    // get the single new request data
    dispatch(labActions.getNewDetailTest(item.id));
  };

  // on select new request
  const onNewRequest = () => {
    // setActive(0);
    // setIsAddRequest(1);
    // dispatch(labActions.getNewDetailTest(singleRequestActive));
    // // get new test requests
    // dispatch(labActions.getNewTest());
    router.push({
      pathname: "/lab/testrequest",
      query: { tab: "new" },
    });
  };

  // get the running list
  const onRunningList = () => {
    // setActive(1);
    // setIsAddRequest(2);
    // get the running lab list
    // dispatch(labActions.getRunningTest());

    router.push({
      pathname: "/lab/testrequest",
      query: { tab: "running" },
    });
  };

  // get the completed list
  const onCompletedList = () => {
    router.push({
      pathname: "/lab/testrequest",
      query: { tab: "completed" },
    });
  };

  useEffect(() => {
    if (singleRequestActive) {
      dispatch(labActions.getNewDetailTest(singleRequestActive));
    }
  }, [dispatch, singleRequestActive]);

  useEffect(() => {
    if (router.query.tab === "running") {
      setActive(1);
      setIsAddRequest(2);
      // get the running lab list
      // dispatch(labActions.getRunningTest());
    } else if (router.query.tab === "new") {
      setActive(0);
      setIsAddRequest(1);
      // dispatch(labActions.getNewDetailTest(singleRequestActive));
      // get new test requests
      // dispatch(labActions.getNewTest());
    } else if (router.query.tab === "completed") {
      setActive(2);
      setIsAddRequest(3);
    }
  }, [dispatch, router.query.tab]);

  return (
    <LabLayout>
      <div className="col-sm-4 fullheight middlebar test_request">
        <div className="top">
          <h6 className="title my-3">Test Requests</h6>
          <button className="btn btn_p" onClick={() => setIsAddRequest(0)}>
            <i className="las la-plus f16"></i>
            Add Request
          </button>
        </div>
        <div className="end">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className={active === 0 ? "nav-link active" : "nav-link"}
                id="pills-home-tab"
                href="#"
                onClick={onNewRequest}
              >
                New
                {/* <div className="counter">12</div> */}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={active === 1 ? "nav-link active" : "nav-link"}
                id="pills-profile-tab"
                href="#"
                onClick={onRunningList}
              >
                Running
                {/* <div className="counter">23</div> */}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={active === 2 ? "nav-link active" : "nav-link"}
                id="pills-contact-tab"
                href="#"
                onClick={onCompletedList}
              >
                Completed
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className={active === 3 ? "nav-link active" : "nav-link"}
                id="pills-contact-tab"
                href="#"
                onClick={() => setActive(3)}
              >
                Declined
              </a>
            </li> */}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {active === 0 && (
              <RequestList
                dispatch={dispatch}
                lab={lab}
                onSingleNewReq={onSingleNewReq}
                setSingleRequestActive={setSingleRequestActive}
              />
            )}
            {active === 1 && (
              <RunningList
                lab={lab}
                dispatch={dispatch}
                setSelectedRunning={setSelectedRunning}
                setSingleSelectedRunning={setSingleSelectedRunning}
              />
            )}
            {/* {active === 2 && (
              <CompletedtList
              dispatch={dispatch}
              lab={lab}
              onSingleNewReq={onSingleNewReq}
              setSingleRequestActive={setSingleRequestActive}
            />
              <div className="tab-pane fade show active" id="completed">
                <div className="upper">
                  <ul className="services">
                    <li className="d-flex align-items-center py-5 justify-content-center text-center">
                      <div className="text-wrapper">
                        <img src="/media/cart-empty.svg" alt="" />
                        <h6 className="text-muted my-3 ">
                          Completed Requests Are Coming Soon!
                        </h6>
                      </div>
                    </li>
                    <li className="active">
                      <a href="#" className="service-wrapper d-flex">
                        <div className="icon">
                          <i className="las la-user-injured"></i>
                        </div>
                        <div className="text-wrapper">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="text_p">Puja Bastakoti</h6>
                            <div className="datetime">
                              <small>
                                <i className="fa fa-history"></i> 7 Min Ago
                              </small>
                            </div>
                          </div>

                          <p className="text mb-0">
                            Blood Test
                            <small className="text-muted">
                              - Shankhamul, Kathmandu
                            </small>
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* ADD REQUEST TAB */}
      {isAddRequest === 0 && (
        <AddTestRequest lab={lab} dispatch={dispatch} auth={auth} />
      )}

      {/* VIEW NEW REQUEST TAB */}
      {isAddRequest === 1 && (
        <ViewTestRequest
          lab={lab}
          dispatch={dispatch}
          singleRequestActive={singleRequestActive}
          onRunningList={onRunningList}
        />
      )}

      {/* VIEW RUNNING REQUEST TAB */}
      {isAddRequest === 2 && (
        <ViewRunningRequest
          dispatch={dispatch}
          lab={lab}
          selectedRunning={selectedRunning}
          setSelectedRunning={setSelectedRunning}
          singleData={singleSelectedRunning}
        />
      )}

      {/* VIEW COMPLETED REQUEST TAB */}
      {isAddRequest === 3 && (
        <div className="col-sm-5 fullheight rightbar runningRequest">
          <div className="reportwrapper py-5 text-capitalize">
            <div className="module text-center">
              <h5 className="title">pokhara reference laboratory</h5>
              <div className="meta d-flex gap justify-content-center">
                <p className="text-muted">
                  {" "}
                  <i className="las la-map f16"></i> shantinagar, pokhara
                </p>
                <p className="text-muted">
                  {" "}
                  <i className="las la-phone f16"></i> 984xxxxxxx
                </p>
              </div>
            </div>

            <div className="module btn btn_p w-100 my-3 d-flex justify-content-between">
              <div className="left">cash receipt (22342) </div>
              <div className="right">24 march, 2022 10:00 am</div>
            </div>
            <div className="module tests">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">services</th>
                    <th scope="col">cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="tests my-2">
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                      </div>
                    </td>
                    <td>rs. 2300</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tests my-2">
                        <div className="tag">some text</div>
                      </div>
                    </td>
                    <td>rs. 200</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tests my-2">
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                      </div>
                    </td>
                    <td>rs. 200</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tests my-2">
                        <div className="tag">some text</div>
                        <div className="tag">some text</div>
                      </div>
                    </td>
                    <td>rs. 200</td>
                  </tr>
                </tbody>
                <tfoot className="">
                  <tr>
                    <td>
                      <strong>Sub total</strong>
                    </td>
                    <td>
                      <strong>rs. 230000</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Discount</strong>
                    </td>
                    <td>
                      <strong>rs. 230</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>total</strong>
                    </td>
                    <td>
                      <strong>rs. 230770</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </LabLayout>
  );
};

export default withAuth(TestRequest);
