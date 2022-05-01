/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { labActions } from "../../../services/lab/action";
import Loading from "../../Loading";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import CustomDate from "../../date/CustomDate";

const RunningList = ({
  lab,
  dispatch,
  setSelectedRunning,
  setSingleSelectedRunning,
}) => {
  const router = useRouter();
  const { data, loading, status } = lab.getRunningTest;

  //  active running
  const [active, setActive] = useState(0);
  const [selected, setSeleted] = useState("all");
  // set active pagination page
  const [activePage, setActivePage] = useState(1);

  const onRunningSelect = (id, item) => {
    setSelectedRunning(id);
    dispatch(labActions.getRunningTestDetail(id));
    dispatch(labActions.getConfirmData(id));
    // selected data
    setSingleSelectedRunning(item);
  };

  // when user filters the running
  const onFilterRunning = (e) => {
    setSeleted(e.target.value);
    setSelectedRunning(0);
    if (e.target.value === "all") {
      dispatch(labActions.getRunningTest());
    } else {
      dispatch(labActions.getRunningTest(0, e.target.value));
    }
  };

  useEffect(() => {
    if (status === "success") {
      if (data.count !== 0) {
        setActive(data.results[0].id);
        setSelectedRunning(data.results[0].id);
        dispatch(labActions.getRunningTestDetail(data.results[0].id));
        dispatch(labActions.getConfirmData(data.results[0].id));
        setSingleSelectedRunning(data.results[0]);
      }
    }
  }, [data, dispatch, setSelectedRunning, setSingleSelectedRunning, status]);

  // when user change pagination
  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    router.push({
      pathname: "/lab/testrequest",
      query: { tab: "running", page: pageNumber },
    });
  };

  useEffect(() => {
    if (router.query.tab === "running") {
      dispatch(
        labActions.getRunningTest(
          !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
        )
      );
      setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
    }
  }, [dispatch, router.query]);

  return (
    <div className="tab-pane fade show active" id="running">
      <div className="upper">
        <form className="filterStatus mb-3">
          <select
            className="form-control"
            onChange={onFilterRunning}
            value={selected}
          >
            <option value="all">All Requests</option>
            <option value="Collector Assigned">Collector Assigned</option>
            <option value="Sample Collected">Sample Collected</option>
            <option value="Report Uploaded">Report Uploaded</option>
          </select>
        </form>
        {loading && <Loading />}
        {status === "success" && (
          <ul className="services">
            {data.count === 0 && (
              <li className="d-flex align-items-center py-5 justify-content-center text-center">
                <div className="text-wrapper">
                  <img src="/media/cart-empty.svg" alt="" />
                  <h6 className="text-muted my-3 ">No Running Requests!</h6>
                </div>
              </li>
            )}
            {data.results.map((item, index) => (
              <li
                key={index}
                className={active === item.id ? "active" : ""}
                onClick={() => {
                  onRunningSelect(item.id, item);
                  setActive(item.id);
                }}
              >
                <a href="#" className="service-wrapper d-flex">
                  <div className="icon">
                    <i className="las la-user-injured"></i>
                  </div>
                  <div className="text-wrapper">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="text_p">
                        {item.patient_data.patient_name}
                      </h6>
                      {item.collection_date !== null && (
                        <div className="datetime">
                          <small>
                            <i className="las la-history"></i>{" "}
                            {item.collection_date}
                            {/* <CustomDate date={item.collection_date} /> */}
                          </small>
                        </div>
                      )}
                    </div>

                    <p className="text text-muted mb-0">
                      <small className="d-block" style={{ lineHeight: "12" }}>
                        {item.patient_data.patient_email}
                      </small>
                      <small className="d-block" style={{ lineHeight: "12" }}>
                        {item.patient_data.patient_phone_number}
                      </small>
                    </p>
                  </div>
                </a>
              </li>
            ))}

            {data.count >= 10 && (
              <li className="my-3 d-flex justify-content-between align-items-center">
                <div>
                  <small>
                    Showing{" "}
                    {!!router.query.page ? router.query.page * 10 - 10 : 0} -{" "}
                    {data.next === null
                      ? data.count
                      : !!router.query.page
                      ? router.query.page * 10
                      : 10}{" "}
                    of total {data.count}
                  </small>
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
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RunningList;
