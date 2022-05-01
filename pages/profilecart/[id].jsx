import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLabProfile from "../../components/CartLabProfile";
import LabCartProfileTab from "../../components/LabCartProfileTab";
import Loading from "../../components/Loading";
import ToastMessage from "../../components/Message";
import UserHeader from "../../components/user/UserHeader";
import { userActions } from "../../services/user/action";
import {
  POST_CART_RESET,
  POST_PAYMENTSERVICE_RESET,
  REMOVE_CART_RESET,
} from "../../services/user/types";
import { appUtils } from "../../utils/appUtils";

const ProfileCart = () => {
  const router = useRouter();

  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.singleLabService;

  const {
    data: paymentServiceData,
    loading: paymentServiceLoading,
    status: paymentServiceStatus,
  } = user.postPaymentService;

  const {
    data: sendCartData,
    loading: sendCartLoading,
    status: sendCartStatus,
  } = user.postToCart;

  const {
    data: cartData,
    loading: cartLoading,
    status: cartStatus,
  } = user.getCart;

  const {
    data: removeCartData,
    loading: removeCartLoading,
    status: removeCartStatus,
  } = user.removeCart;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // show toast message
  const [show, setShow] = useState(false);

  // state to open the tabs
  const [open, setOpen] = useState(0);
  // selected packages
  const [selectedPackages, setSelectedPackages] = useState([]);
  // selected tests
  const [selectedTests, setSelectedTests] = useState([]);
  // total price
  const [total, setTotal] = useState(0);

  const { id } = router.query;

  useEffect(() => {
    setIsLoggedIn(appUtils.isLogin());
  }, []);

  useEffect(() => {
    if (id) {
      // get single lab service data
      dispatch(userActions.singleLabService(id));
      // get lab according to categoriess
      dispatch(userActions.labTestByCategory(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // set tab to what is selected
    if (!!router.query.tab) {
      setOpen(parseInt(router.query.tab));
    } else {
      setOpen(0);
    }
  }, [router.query.tab]);

  const onSelectTest = (val) => {
    if (isLoggedIn) {
      const formdata = {
        lab_test: val.id,
      };
      dispatch(userActions.postPaymentService(formdata));
    }
    // dispatch(userActions.postPaymentService());
    // dispatch(userActions.postToCart());

    // if (selectedTests.length != 0) {
    //   console.log(selectedTests);
    //   selectedTests.forEach((ele) => {
    //     if (val.slug !== ele.slug) {
    //       // console.log(ele.slug, val.slug);
    //       setSelectedTests([...selectedTests, val]);
    //     }
    //   });
    // } else {
    //   setSelectedTests([...selectedTests, val]);
    // }
  };

  // package added to the cart
  const selectPackage = (item) => {
    if (isLoggedIn) {
      const arry = {
        id: item.id,
        name: item.name,
        price: item.actual_price,
        slug: item.slug,
      };
      const formdata = {
        lab_package: arry.id,
      };
      dispatch(userActions.postPaymentService(formdata));
    } else {
      router.push("/login");
    }
    // dispatch(userActions.postToCart(formdata));
    // if there is already packages selected this function helps to remove the redundency!
    // if (selectedPackages.length != 0) {
    //   selectedPackages.forEach((ele) => {
    //     if (item.slug !== ele.slug) {
    //       setTotal((total += arry.price));
    //       setSelectedPackages([...selectedPackages, arry]);
    //     }
    //   });
    // }
    // if there aren't any packages selected
    // else {
    //   setTotal((total += arry.price));
    //   setSelectedPackages([...selectedPackages, arry]);
    // }
  };

  const removeCart = (id) => {
    if (isLoggedIn) {
      dispatch(userActions.removeCart(id));
    }
  };

  useEffect(() => {
    if (paymentServiceStatus === "success") {
      const required = {
        service: paymentServiceData.id,
      };
      dispatch(userActions.postToCart(required));
      dispatch({ type: POST_PAYMENTSERVICE_RESET });
    }
  }, [dispatch, paymentServiceData, paymentServiceStatus]);

  useEffect(() => {
    if (sendCartStatus === "success") {
      dispatch(userActions.getCart());
      dispatch({ type: POST_CART_RESET });
    }
  }, [dispatch, sendCartStatus]);

  useEffect(() => {
    if (isLoggedIn) {
      if (removeCartStatus === "success") {
        setShow({
          bg: "danger",
          message: "Cart Item Deleted Successfully!",
        });
        setTimeout(() => {
          setShow(false);
          dispatch({ type: REMOVE_CART_RESET });
          dispatch(userActions.getCart());
        }, 1000);
      }
    }
  }, [dispatch, removeCartStatus, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userActions.getCart());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="lab-profile lab-profile-public-view">
      <UserHeader />
      {show && (
        <ToastMessage
          bg={show.bg}
          message={show.message}
          show={show}
          setShow={setShow}
        />
      )}
      {(loading || sendCartLoading || paymentServiceLoading) && <Loading />}
      {status === "success" && (
        <section className="hero mt-3 mb-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 middlebar">
                <div className="profilewrapper">
                  <h1 className="f18 mb-2 pl-4 pt-3">{data.name}</h1>
                  <div className="contentwrapper">
                    <div className="menu">
                      <div className="linkbar d-flex align-items-center justify-content-between">
                        <ul
                          className="nav nav-tabs fixtopmenu d-flex"
                          id="myTab"
                        >
                          <LabCartProfileTab
                            name="Overview"
                            tabIndex={0}
                            id={id}
                            router={router}
                            open={open}
                            setOpen={setOpen}
                          />
                          <LabCartProfileTab
                            name="Test Services"
                            tabIndex={1}
                            id={id}
                            router={router}
                            open={open}
                            setOpen={setOpen}
                          />
                          <LabCartProfileTab
                            name="Members"
                            tabIndex={2}
                            id={id}
                            router={router}
                            open={open}
                            setOpen={setOpen}
                          />
                          <LabCartProfileTab
                            name="Health Packages"
                            tabIndex={3}
                            id={id}
                            router={router}
                            open={open}
                            setOpen={setOpen}
                          />
                          {/* <li className="nav-item">
                            <a
                              className={
                                open === 4 ? "nav-link active" : "nav-link"
                              }
                              id="contact-tab"
                              href="#reviews"
                              onClick={() => setOpen(4)}
                            >
                              Reviews
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className={
                                open === 5 ? "nav-link active" : "nav-link"
                              }
                              id="contact-tab"
                              href="#enquiry"
                              onClick={() => setOpen(5)}
                            >
                              Enquiry
                            </a>
                          </li> */}
                        </ul>
                        <ul className="social-links mr-2">
                          <li
                            className="social_link"
                            data-toggle="tooltip"
                            data-placement="Bottom"
                            title="Tooltip on Bottom"
                          >
                            <a href="#">
                              <i className="lab la-facebook"></i>
                            </a>
                          </li>
                          <li
                            className="social_link"
                            data-toggle="tooltip"
                            data-placement="Bottom"
                            title="Tooltip on Bottom"
                          >
                            <a href="#">
                              <i className="lab la-instagram"></i>
                            </a>
                          </li>
                          <li className="social_link">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="Bottom"
                              title="Tooltip on Bottom"
                            >
                              <i className="lab la-youtube"></i>
                            </a>
                          </li>
                          <li
                            className="social_link"
                            data-toggle="tooltip"
                            data-placement="Bottom"
                            title="Tooltip on Bottom"
                          >
                            <a href="#">
                              <i className="las la-globe-asia"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <CartLabProfile
                        data={data}
                        open={open}
                        router={router}
                        selectPackage={selectPackage}
                        user={user}
                        onSelectTest={onSelectTest}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {isLoggedIn && (
                <div className="col-sm-3">
                  {cartLoading && "Updating Cart...."}
                  {cartStatus === "success" && (
                    <div className="cartwrapper sticky_cartwrapper">
                      {!!selectedTests.length && (
                        <div>
                          <div className="titlewrapper">
                            <h4 className="title f14 fw600 mb-2">
                              Selected Tests
                            </h4>
                          </div>
                          {selectedTests.map((item, index) => (
                            <div
                              className="box rounded p bg_p_dim mb-2"
                              key={index}
                            >
                              <div className="upper d-flex justify-content-between">
                                <div className="test_name fw600">
                                  {" "}
                                  <i className="las la-flask f16"></i>{" "}
                                  {item.test.name}
                                </div>
                                <div className="rightside d-flex">
                                  <div className="test_price fw700 text_p f14">
                                    <i className="las la-wallet f16"></i>Rs.{" "}
                                    {item.price}
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
                                {item.test.category.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="titlewrapper">
                        <h4 className="title f14 fw600 mb-2">
                          {cartData.count === 0
                            ? "Cart Empty"
                            : "Selected Items"}
                        </h4>
                      </div>
                      <hr />
                      {cartData.results.map((item, index) => (
                        <div key={index}>
                          <div className="box rounded p bg_p_dim mb-2">
                            <div className="upper d-flex justify-content-between">
                              <div className="test_name fw600">
                                {" "}
                                <i className="las la-box f16"></i>{" "}
                                {item.service.lab_test
                                  ? item.service.lab_test?.test?.name
                                  : item.service.lab_package?.name}
                              </div>
                              <div className="rightside d-flex">
                                <div className="test_price fw700 text_p f14">
                                  <i className="las la-wallet f16"></i>
                                  {item.final_amount}
                                </div>
                                <button
                                  type="button"
                                  className=" btn test_delete fw700 text_p btn_remove f14"
                                  onClick={() => removeCart(item.id)}
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
                        </div>
                      ))}

                      <div className="titlewrapper">
                        <h4 className="title f14 fw600 mb-2">Payment</h4>
                      </div>
                      <div className="paymentwrapper">
                        <div className="item d-flex justify-content-between">
                          <div className="label f14 text-muted">Cart Total</div>
                          <div className="label f14 text_p fw700">
                            Rs. {cartData.total.total_amount}
                          </div>
                        </div>
                        <div className="item d-flex justify-content-between">
                          <div className="label f14 text-muted">Discount</div>
                          <div className="label f14 text_p fw700">
                            Rs. {cartData.total.discount_amount}
                          </div>
                        </div>
                        <div className="item d-flex justify-content-between">
                          <div className="label f14 text-muted">Tax</div>
                          <div className="label f14 text_p fw700">
                            Rs. {cartData.total.tax_amount}
                          </div>
                        </div>
                        <hr />
                        <div className="item d-flex justify-content-between">
                          <div className="label f14 text-muted">
                            Grand Total
                          </div>
                          <div className="label f14 text_p fw700">
                            Rs. {cartData.total.final_amount}
                          </div>
                        </div>
                      </div>

                      {cartData.count !== 0 && (
                        <div className="buttonwrapper my-3">
                          <Link href="/payment">
                            <a>
                              <button className="btn btn_p btn-block">
                                Proceed to Payment
                              </button>
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              {!isLoggedIn && (
                <div className="col-sm-3">
                  <div className="cartwrapper sticky_cartwrapper">
                    <div className="buttonwrapper my-3">
                      <Link href="/login">
                        <a>
                          <button className="btn btn_p btn-block">
                            Please Login To Proceed
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfileCart;
