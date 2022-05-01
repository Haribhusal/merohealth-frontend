/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UserHeader from "../../components/user/UserHeader";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../services/user/action";
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import Loading from "../../components/Loading";

const ServiceIndex = () => {
  const router = useRouter();

  const { index } = router.query;

  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.singleLabService;
  const {
    data: labData,
    loading: labLoading,
    status: labStatus,
  } = user.labTestByCategory;

  const [selectedPackages, setSelectedPackages] = useState([]);

  const [total, setTotal] = useState(0);
  const [checkedState, setCheckedState] = useState();

  const [selectedTests, setSelectedTests] = useState([]);
  const [selectAllTests, setSelectAlltests] = useState(false);

  useEffect(() => {
    if (index) {
      // get single lab service data
      dispatch(userActions.singleLabService(index));
      // get lab according to categoriess
      dispatch(userActions.labTestByCategory(index));
    }
  }, [dispatch, index]);

  useEffect(() => {
    if (labStatus === "success") {
      const val = labData.results.map((item) =>
        item.lab_tests.map((ele) => ({
          ...ele,
          checked: false,
        }))
      );
      setSelectedTests(val);
      console.log(val);
    }
  }, [labData, labStatus]);

  // package added to the cart
  const selectPackage = (item) => {
    const arry = {
      name: item.name,
      price: item.actual_price,
      slug: item.slug,
    };
    // if there is already packages selected this function helps to remove the redundency!
    if (selectedPackages.length != 0) {
      selectedPackages.forEach((ele) => {
        if (item.slug !== ele.slug) {
          setTotal((total += arry.price));
          setSelectedPackages([...selectedPackages, arry]);
        }
      });
    }
    // if there aren't any packages selected
    else {
      setTotal((total += arry.price));
      setSelectedPackages([...selectedPackages, arry]);
    }
  };

  // package removed from the cart
  const removePackage = (slug) => {
    const removedPkg = selectedPackages.filter((item) => item.slug !== slug);
    if (removedPkg.length > 0) {
      const totalval = 0;
      removedPkg.forEach((arry) => {
        totalval -= arry.price;
      });
      setTotal(totalval);
    } else {
      setTotal(0);
    }
    setSelectedPackages(removedPkg);
  };

  const selectTests = (item, event) => {
    const value = event.type === "checkbox" ? event.checked : event.value;

    const valueD = selectedTests.map((test) => ({
      ...test,
      checked: test.slug === item.slug ? value : !value,
    }));
    // if (selectedPackages.length != 0) {
    //   setSelectedTests([...selectedTests, val]);
    // }else{
    // }
    setSelectedTests(valueD);
  };

  return (
    <div>
      <UserHeader />
      <main className="mainbody user_test_request pt-3">
        <section className="lablisting pb-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                {loading && <Loading />}
                {status === "success" && (
                  <div className="results">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="labitem mb-3 bg_w rounded">
                          <div className="useSelectServiceFrom  p-3">
                            <div className="selectLabTests">
                              <div className="title_group mb-2 d-flex align-items-center justify-content-between">
                                <h4 className="title f14 fw600">{data.name}</h4>
                                <Link href={`/profile/${data.slug}`}>
                                  <a className="link bg_p_dim text_p full_rounded px-3 py-1">
                                    Lab Profile
                                  </a>
                                </Link>
                              </div>
                              {labStatus === "success" && (
                                <ul className="filter-content">
                                  {labData.results.map((item, index) => (
                                    <li className="filter" key={index}>
                                      <div className="panel someclassName">
                                        <div className="d-flex flex-column panelLabel">
                                          <input
                                            type="checkbox"
                                            name="level-1"
                                            className="all"
                                            id="panelid1"
                                            data-placement="top"
                                            data-toggle="tooltip"
                                            title="Select all test items"
                                          />
                                          <div className="panel_heading text_p d-flex justify-content-between">
                                            <div className="left">
                                              <div className="inputPart d-flex gap align-items-center">
                                                {item.name}
                                              </div>
                                            </div>
                                            <div className="rightpart d-flex align-items-center gap">
                                              <div className="category">
                                                <i className="las la-tag"></i>
                                                Category
                                              </div>
                                              <div className="price">
                                                Rs. {item.total_price}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panelBody">
                                            <div className="panelItems d-flex flex-wrap">
                                              {item.lab_tests.map(
                                                (ele, ind) => (
                                                  <OverlayTrigger
                                                    key={ele.slug}
                                                    placement="top"
                                                    overlay={
                                                      <Tooltip id="tooltip-top">
                                                        Rs. {ele.price}
                                                      </Tooltip>
                                                    }
                                                  >
                                                    <label
                                                      htmlFor={`testid1-${ele.slug}`}
                                                      className="d-flex panelItem align-items-center"
                                                    >
                                                      <input
                                                        type="checkbox"
                                                        name={ele.slug}
                                                        className="subTestItems"
                                                        id={`testid1-${ele.slug}`}
                                                        // checked={
                                                        //   selectedTests[i].checked
                                                        // }
                                                        onChange={(e) => {
                                                          console.log(
                                                            selectedTests,
                                                            "hello"
                                                          );
                                                          selectTests(
                                                            ele,
                                                            e.target
                                                          );
                                                        }}
                                                      />
                                                      <div className="label">
                                                        {" "}
                                                        {ele.test}
                                                      </div>
                                                    </label>
                                                  </OverlayTrigger>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            {!data.lab_packages.length && (
                              <div className="text-center">
                                <img
                                  src="../nodatafound.png"
                                  className="img-fluid w-25"
                                  alt=""
                                />
                                <div className=" title f14 fw600 py-2">
                                  No Health Packages Available
                                </div>
                              </div>
                            )}
                            {!!data.lab_packages.length && (
                              <div className="labPackages my-2">
                                <div className="title_group d-flex align-items-center justify-content-between">
                                  <h4 className="title f14 fw600">
                                    Available Health Packages
                                  </h4>
                                  {data.lab_packages.length > 1 && (
                                    <a href="#" className="link">
                                      View all
                                    </a>
                                  )}
                                </div>
                                <div className="packages lab_packages_user_select">
                                  <div className="package_grid">
                                    {data.lab_packages.map((ele, index) => (
                                      <div
                                        className="package_item rounded p mb-3"
                                        key={index}
                                      >
                                        <div className="d-flex w-100 gap package">
                                          <div className="w-100">
                                            <div className="packageDetails mb-2  d-flex justify-content-between align-items-center">
                                              <h4 className="name f14 text_p mb-0">
                                                {ele.name}
                                              </h4>
                                              <div className="buttonsPrice d-flex gap">
                                                <div className=" rounded text_p fw700">
                                                  <i className="las la-wallet"></i>{" "}
                                                  Rs. {ele.actual_price}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="packageIncludes flex7">
                                              <p className="package_text text-muted f12 mb-3">
                                                {ele.description.slice(0, 400)}
                                                {ele.description.length >=
                                                  400 && "..."}
                                              </p>
                                            </div>
                                            <button
                                              className="btn bg_p_dim f14 btn_select_package"
                                              onClick={() => selectPackage(ele)}
                                            >
                                              Select Package
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="labHeading px-3 py-2 d-flex gap">
                            <div className="lab_info d-flex gap flex3">
                              <div className="lablogo d-flex align-items-center">
                                <img
                                  src={data.display_picture}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="labDetails py-2 flex7">
                                <div className="detailwrapper w-100 d-flex gap align-items-start">
                                  <h6 className="title f14  mb-0 flex3">
                                    {data.name}
                                    <div className="text-muted address f12 mb-0">
                                      {data.lab_address[0].tole},{" "}
                                      {data.lab_address[0].district.name}
                                    </div>
                                  </h6>
                                  <div className="ratewrapper d-flex flex-column gap align-items-end justify-content-end flex2">
                                    <div
                                      className="rating"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Good Service"
                                    >
                                      <i className="las la-star"></i>
                                      <i className="las la-star"></i>
                                      <i className="las la-star"></i>
                                      <i className="las la-star"></i>
                                      <i className="las la-star"></i>
                                    </div>
                                    <span className="text-muted address f12 mb-0">
                                      87 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-sm-3">
                <div className="cartwrapper sticky_cartwrapper">
                  <div className="titlewrapper">
                    <h4 className="title f14 fw600 mb-2">Selected Tests</h4>
                  </div>
                  <div
                    className="box rounded p bg_p_dim mb-2"
                    data-toggle="tooltip"
                    data-trigger="hover"
                    title="RBC Test, WBC Test, Lipid function Test, Next test, next test like new test"
                    data-placement="bottom"
                  >
                    <div className="upper d-flex justify-content-between">
                      <div className="test_name fw600">
                        {" "}
                        <i className="las la-flask f16"></i> RBC Test, WBC
                        Test...
                      </div>
                      <div className="rightside d-flex">
                        <div className="test_price fw700 text_p f14">
                          <i className="las la-wallet f16"></i>1200
                        </div>
                        <button
                          type="button"
                          className=" btn test_delete fw700 text_p btn_remove f14"
                        >
                          <i className="las la-trash f16"></i>
                        </button>
                      </div>
                    </div>
                    <p className="lab_name f14 text-muted">
                      Pokhara Reference Laboratory
                    </p>
                  </div>

                  {!!selectedPackages.length && (
                    <div>
                      <div className="titlewrapper">
                        <h4 className="title f14 fw600 mb-2">
                          Selected Packages
                        </h4>
                      </div>
                      {selectedPackages.map((item) => (
                        <div
                          key={item.name}
                          className="box rounded p bg_p_dim mb-2"
                        >
                          <div className="upper d-flex justify-content-between">
                            <div className="test_name fw600">
                              {" "}
                              <i className="las la-box f16"></i> {item.name}
                            </div>
                            <div className="rightside d-flex">
                              <div className="test_price fw700 text_p f14">
                                <i className="las la-wallet f16"></i>
                                {item.price}
                              </div>
                              <button
                                type="button"
                                className=" btn test_delete fw700 text_p btn_remove f14"
                                onClick={() => removePackage(item.slug)}
                              >
                                <i className="las la-trash f16"></i>
                              </button>
                            </div>
                          </div>
                          {status === "success" && (
                            <p className="lab_name f14 text-muted">
                              {data.name}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="titlewrapper">
                    <h4 className="title f14 fw600 mb-2">Payment</h4>
                  </div>
                  <div className="paymentwrapper">
                    <div className="item d-flex justify-content-between">
                      <div className="label f14 text-muted">Cart Total</div>
                      <div className="label f14 text_p fw700">Rs. {total}</div>
                    </div>
                    <div className="item d-flex justify-content-between">
                      <div className="label f14 text-muted">Discount</div>
                      <div className="label f14 text_p fw700">Rs. 200</div>
                    </div>
                    <hr />
                    <div className="item d-flex justify-content-between">
                      <div className="label f14 text-muted">Grand Total</div>
                      <div className="label f14 text_p fw700">Rs. 2200</div>
                    </div>
                  </div>
                  <div className="buttonwrapper my-3">
                    <button className="btn btn_p btn-block">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceIndex;
