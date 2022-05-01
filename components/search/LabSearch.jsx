/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import SearchLabItem from "../front/SearchLabItem";
import Loading from "../Loading";
import { useRouter } from "next/router";
import { userActions } from "../../services/user/action";
import Pagination from "react-js-pagination";

const LabSearch = ({ user, goToRoute, dispatch }) => {
  const router = useRouter();
  // get results of lab search lists
  const {
    data: labData,
    loading: labLoading,
    status: labStatus,
  } = user.getLabService;
  // set active page on pagination
  const [activePage, setActivePage] = useState(1);

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    // dispatch(labActions.getLabTest(pageNumber * 10 - 10));
    router.push({
      pathname: `/search`,
      query: {
        tab: "tests",
        keyword: router.query.keyword,
        page: pageNumber,
      },
    });
  };

  useEffect(() => {
    dispatch(
      userActions.getLabService(
        router.query.keyword,
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.keyword, router.query.page]);

  return (
    <div>
      {labLoading && (
        <div className="font-weight-bold py-3">
          <Loading />
        </div>
      )}
      {labStatus === "success" && (
        <div className="results">
          {!!labData.results.length && (
            <div className="row">
              {labData.results.map((item, index) => (
                <div className="col-sm-4" key={index}>
                  <SearchLabItem item={item} goToRoute={goToRoute} />
                </div>
              ))}
            </div>
          )}
          <hr />
          <div className="my-3 d-flex justify-content-between align-items-center">
            <div>
              <small>
                Showing {!!router.query.page ? router.query.page * 10 - 10 : 0}{" "}
                -{" "}
                {labData.next === null
                  ? labData.count
                  : !!router.query.page
                  ? router.query.page * 10
                  : 10}{" "}
                of total {labData.count}
              </small>
            </div>
            {labData.count >= 10 && (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={labData.count}
                pageRangeDisplayed={5}
                onChange={onChangePaginate}
                innerClass="pagination"
                itemClass="page-item"
                activeLinkClass="page-link active"
                linkClass="page-link"
                prevPageText="Previous"
                nextPageText="Next"
              />
            )}
          </div>
          <div className="row">
            {!labData.results.length && (
              <div className="col-sm-12 text-center ">
                <img src="/media/cart-empty.svg" alt="" />
                <h5 className="font-weight-bold py-4">No Labs Found</h5>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LabSearch;
