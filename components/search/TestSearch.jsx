/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SearchTestItem from "../front/SearchTestItem";
import Loading from "../Loading";
import { useRouter } from "next/router";
import { userActions } from "../../services/user/action";
import Pagination from "react-js-pagination";

const TestSearch = ({ user, goToRoute, dispatch }) => {
  const router = useRouter();
  // get the results of lab tests
  const { data, loading, status } = user.getLabTest;
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
      userActions.getLabTest(
        router.query.keyword,
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.keyword, router.query.page]);

  return (
    <div>
      {loading && (
        <div className="font-weight-bold py-3">
          <Loading />
        </div>
      )}
      {status === "success" && (
        <div className="results">
          {!!data.results.length && (
            <div>
              <div className="row">
                {data.results.map((item, index) => (
                  <div className="col-sm-4" key={index}>
                    <SearchTestItem item={item} goToRoute={goToRoute} />
                  </div>
                ))}
              </div>
              <hr />
              <div className="my-3 d-flex justify-content-between align-items-center">
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
                {data.count >= 10 && (
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
                )}
              </div>
            </div>
          )}

          <div className="row">
            {!data.results.length && (
              <div className="col-sm-12 text-center ">
                <img src="/media/cart-empty.svg" alt="" />
                <h5 className="font-weight-bold py-4">No Tests Found</h5>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestSearch;
