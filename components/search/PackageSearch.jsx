/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SearchPackageItem from "../front/SearchPackageItem";
import Loading from "../Loading";
import { useRouter } from "next/router";
import { userActions } from "../../services/user/action";
import Pagination from "react-js-pagination";

const PackageSearch = ({ user, goToRoute, dispatch }) => {
  const router = useRouter();
  // get the results of lab packages
  const {
    data: packageData,
    loading: packageLoading,
    status: packageStatus,
  } = user.getLabPackage;
  // set active page on pagination
  const [activePage, setActivePage] = useState(1);
  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    // dispatch(labActions.getLabTest(pageNumber * 10 - 10));
    router.push({
      pathname: `/search`,
      query: {
        tab: "packages",
        keyword: router.query.keyword,
        page: pageNumber,
      },
    });
  };

  useEffect(() => {
    dispatch(
      userActions.getLabPackage(
        router.query.keyword,
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.keyword, router.query.page]);

  return (
    <div>
      {packageLoading && (
        <div className="font-weight-bold py-3">
          <Loading />
        </div>
      )}
      {packageStatus === "success" && (
        <div className="results">
          {!!packageData.results.length && (
            <div className="row">
              {packageData.results.map((item, index) => (
                <div className="col-sm-4" key={index}>
                  <SearchPackageItem item={item} goToRoute={goToRoute} />
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
                {packageData.next === null
                  ? packageData.count
                  : !!router.query.page
                  ? router.query.page * 10
                  : 10}{" "}
                of total {packageData.count}
              </small>
            </div>
            {packageData.count >= 10 && (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={packageData.count}
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
            {!packageData.results.length && (
              <div className="col-sm-12 text-center">
                <img src="/media/cart-empty.svg" alt="" />
                <h5 className="font-weight-bold py-4">No Packages Found</h5>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSearch;
