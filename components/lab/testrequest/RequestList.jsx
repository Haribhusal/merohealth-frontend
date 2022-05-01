/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Loading from "../../Loading";
import { useRouter } from "next/router";
import { labActions } from "../../../services/lab/action";
import CustomDate from "../../date/CustomDate";

const RequestList = ({
  dispatch,
  lab,
  onSingleNewReq,
  setSingleRequestActive,
}) => {
  const router = useRouter();
  const {
    data: newData,
    loading: newLoading,
    status: newStatus,
  } = lab.getNewTest;

  // set active on new, running, completed
  const [active, setActive] = useState(0);
  // set active page on pagination
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (newStatus === "success") {
      if (newData.count !== 0) {
        setActive(newData.results[0].id);
        setSingleRequestActive(newData.results[0].id);
      }
    }
  }, [newData.count, newData.results, newStatus, setSingleRequestActive]);

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    // dispatch(labActions.getLabTest(pageNumber * 10 - 10));
    router.push({
      pathname: "/lab/testrequest",
      query: { tab: "new", page: pageNumber },
    });
  };

  useEffect(() => {
    if (router.query.tab === "new") {
      dispatch(
        labActions.getNewTest(
          !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
        )
      );
      setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
    }
  }, [dispatch, router.query]);

  return (
    <div className="tab-pane fade show active" id="new">
      {newLoading && <Loading />}
      {newStatus === "success" && (
        <div className="upper">
          <ul className="services">
            {newData.results.length === 0 && (
              <div className="d-flex align-items-center py-5 justify-content-center text-center">
                <div className="text-wrapper">
                  <img src="/media/cart-empty.svg" alt="" />
                  <h6 className="text-muted my-3 ">No New Requests!</h6>
                </div>
              </div>
            )}
            {newData.results.map((item, index) => (
              <li
                className={active === item.id ? "active" : ""}
                key={index}
                onClick={() => {
                  onSingleNewReq(item);
                  setActive(item.id);
                }}
              >
                <div className="service-wrapper d-flex">
                  <div className="icon">
                    <i className="las la-user-injured"></i>
                  </div>
                  <div className="text-wrapper">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="text_p mb-0">
                        {item.patient_data.patient_name}
                      </h6>
                      <div className="datetime">
                        <small>
                          <i className="fa fa-history"></i>{" "}
                          <CustomDate date={item.created_at} />
                        </small>
                      </div>
                    </div>

                    <p className="text mb-0">
                      {/* {item.patient_data.patient_phone_number} */}
                      <small className="text-muted">
                        {item.patient_data.patient_phone_number}
                      </small>
                    </p>
                  </div>
                </div>
              </li>
            ))}

            {newData.count >= 10 && (
              <li className="my-3 d-flex justify-content-between align-items-center">
                <div>
                  <small>
                    Showing{" "}
                    {!!router.query.page ? router.query.page * 10 - 10 : 0} -{" "}
                    {newData.next === null
                      ? newData.count
                      : !!router.query.page
                      ? router.query.page * 10
                      : 10}{" "}
                    of total {newData.count}
                  </small>
                </div>
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={newData.count}
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
        </div>
      )}
    </div>
  );
};

export default RequestList;
