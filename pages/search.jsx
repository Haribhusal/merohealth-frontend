/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import SearchLabItem from "../components/front/SearchLabItem";
import SearchPackageItem from "../components/front/SearchPackageItem";
import SearchTestItem from "../components/front/SearchTestItem";
import Loading from "../components/Loading";
import PaginationComponent from "../components/PaginationComponent";
import LabSearch from "../components/search/LabSearch";
import PackageSearch from "../components/search/PackageSearch";
import TestSearch from "../components/search/TestSearch";
import UserHeader from "../components/user/UserHeader";
import { userActions } from "../services/user/action";

const SearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);

  // state for active tabs
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   // get all the service list data
  //   dispatch(userActions.getLabTest(router.query.keyword));
  // }, [dispatch, router.query.keyword]);

  // go to the profilecart route
  const goToRoute = (slug, tabIndex) => {
    router.push({
      pathname: `/profilecart/${slug}`,
      query: {
        keyword: tabIndex === 0 ? "" : router.query.keyword,
        tab: tabIndex,
      },
    });
  };

  // when tab is changed
  const onTabChange = (val) => {
    setActive(val);
    if (val === 0) {
      router.push({
        pathname: `/search/`,
        query: {
          tab: "tests",
          keyword: router.query.keyword,
        },
      });
    } else if (val === 1) {
      router.push({
        pathname: `/search/`,
        query: {
          tab: "packages",
          keyword: router.query.keyword,
        },
      });
    } else if (val === 2) {
      router.push({
        pathname: `/search/`,
        query: {
          tab: "labs",
          keyword: router.query.keyword,
        },
      });
    }
  };

  useEffect(() => {
    if (router.query.tab === "tests") {
      setActive(0);
      dispatch(userActions.getLabTest(router.query.keyword));
    } else if (router.query.tab === "packages") {
      setActive(1);
      dispatch(userActions.getLabPackage(router.query.keyword));
    } else if (router.query.tab === "labs") {
      setActive(2);
      dispatch(userActions.getLabService(router.query.keyword));
    }
  }, [dispatch, router.query.keyword, router.query.tab]);

  const onGetLabTest = (offset) => {
    dispatch(userActions.getLabTest(router.query.keyword, offset));
  };

  const options = [
    { value: "pkr", label: "Pokhara" },
    { value: "ktm", label: "Kathmandu" },
    { value: "btl", label: "Butwal" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: "5px 15px",
      background: state.isSelected ? "green" : "white",
      color: state.isSelected ? "white" : "green",
      border: "none",
    }),
  };

  return (
    <div>
      <UserHeader />
      <main className="mainbody user_test_request">
        <section className="lablisting pb-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row mb-2 searchResultCategories">
                  <div className="col-sm-12">
                    <div className="d-flex mb-3 cats d-flex gap justify-content-between">
                      <div className="left d-flex gap p-0 align-items-center">
                        <div
                          className={
                            active === 0
                              ? "d-block cursor-pointer activeSearch"
                              : "d-block cursor-pointer"
                          }
                          onClick={() => onTabChange(0)}
                        >
                          <strong>Tests</strong>
                        </div>
                        <div
                          className={
                            active === 1
                              ? "d-block cursor-pointer activeSearch"
                              : "d-block cursor-pointer"
                          }
                          onClick={() => onTabChange(1)}
                        >
                          <strong>Packages</strong>
                        </div>
                        <div
                          className={
                            active === 2
                              ? "d-block cursor-pointer activeSearch"
                              : "d-block cursor-pointer"
                          }
                          onClick={() => onTabChange(2)}
                        >
                          <strong>Labs</strong>
                        </div>
                      </div>
                      <div className="right f14" style={{ minWidth: "300px" }}>
                        <Select
                          options={options}
                          placeholder="Select Your City"
                          styles={customStyles}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="leftcontent f14 mb-2 d-flex align-items-center">
                        <span className=" d-block">Search Results for</span>
                        <div className="textsearch px-2">
                          <b>
                            {router.query.keyword
                              ? router.query.keyword
                              : " All "}{" "}
                            {!router.query.keyword && (
                              <>
                                {active === 0 && "Tests"}
                                {active === 1 && "Packages"}
                                {active === 2 && "Labs"}
                              </>
                            )}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {active === 0 && (
                  <TestSearch
                    user={user}
                    goToRoute={goToRoute}
                    dispatch={dispatch}
                  />
                )}
                {active === 1 && (
                  <PackageSearch
                    user={user}
                    goToRoute={goToRoute}
                    dispatch={dispatch}
                  />
                )}
                {active === 2 && (
                  <LabSearch
                    user={user}
                    goToRoute={goToRoute}
                    dispatch={dispatch}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
