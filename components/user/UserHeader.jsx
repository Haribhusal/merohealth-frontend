/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Dropdown } from "react-bootstrap";
import { appUtils } from "../../utils/appUtils";
import SignupList from "./SignupList";
import { useDispatch, useSelector } from "react-redux";
import CartHeader from "./CartHeader";
import { userActions } from "../../services/user/action";
import SearchListShow from "./search/SearchListShow";

const UserHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data: userProfile, status: userStatus } = user.getProfile;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // set token when user is logged in
  const [token, setToken] = useState(false);
  // show the lab register popup
  const [show, setShow] = useState(false);
  const [menuopen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState(false);

  useEffect(() => {
    // get the token and set to setToken State
    const token = appUtils.getAppToken();
    setToken(token);
  }, []);

  // get the profile data
  useEffect(() => {
    if (token) {
      dispatch(userActions.getProfile());
    }
  }, [dispatch, token]);

  // when search is submitted then go to the search page
  const searchSubmit = (value) => {
    router.push({
      pathname: "/search",
      query: { tab: "tests", keyword: value.search },
    });
  };

  // when user clicks the dropdown link
  const dropdownLink = (path) => {
    router.push(path);
  };

  // when user press logout button
  const logout = () => {
    appUtils.removeToken();
    appUtils.clearLocalStorage();
    router.push("/");
  };

  // handle Popup Close
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    // set search value to the url query keyword value
    setValue("search", router.query.keyword);
  }, [router.query.keyword, setValue]);

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="main-header">
      <SignupList show={show} handleClose={handleClose} />
      <div className="mainbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/media/logo.svg"
                      alt="MeroHealth Logo"
                      className="logo"
                    />
                  </a>
                </Link>
                <button
                  className="navbar-toggler"
                  onClick={() => setMenuOpen(!menuopen)}
                  type="button"
                >
                  <i className={menuopen ? "las la-times" : "las la-bars"}></i>
                </button>

                <div
                  className={
                    menuopen
                      ? "collapse navbar-collapse mobileMenu"
                      : "collapse navbar-collapse"
                  }
                  id="navbarSupportedContent"
                >
                  <div className="searchParent w-100">
                    <div className="searcbar w-100 d-flex justify-content-end">
                      <form
                        onSubmit={handleSubmit(searchSubmit)}
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Test Services, Packages, Labs"
                          {...register("search", {
                            onChange: (e) => {
                              onSearchChange(e);
                            },
                          })}
                        />
                        <button type="submit" className="btn btn_p btn_search">
                          <i className="las la-search"></i>
                        </button>
                      </form>
                    </div>
                    {searchText.length > 1 && (
                      <SearchListShow
                        searchText={searchText}
                        dispatch={dispatch}
                        user={user}
                        setSearchText={setSearchText}
                      />
                    )}
                  </div>

                  <ul className="navbar-nav user_menu ml-auto navbar-right d-flex justify-content-end w-100">
                    {token && (
                      <li
                        className="nav-item d-flex align-items-center nav-item-dashboard"
                        title="Go to Dashboard"
                      >
                        {userStatus === "success" && (
                          <Link href="/user/dashboard">
                            <a className="nav-link d-flex align-items-center">
                              <img
                                src={
                                  userProfile.profile_picture
                                    ? userProfile.profile_picture
                                    : "/AvatarMaleFinal.png"
                                }
                                alt=""
                              />
                              <div className="user_info pl-2">
                                <h6 className="name mb-0">
                                  {userProfile.full_name}
                                </h6>
                              </div>
                            </a>
                          </Link>
                        )}
                      </li>
                    )}

                    <li
                      className="nav-item d-flex align-items-center"
                      data-toggle="tooltip"
                      title="Use Service As"
                    >
                      <a className="nav-link" onClick={() => setShow(true)}>
                        <i className="las la-briefcase-medical"></i>
                      </a>
                    </li>

                    {!token && (
                      <li className="nav-item">
                        <Link href="/login">
                          <a className="nav-link btn_login "> Login </a>
                        </Link>
                      </li>
                    )}
                    {!token && (
                      <li className="nav-item">
                        <Link href="/signup ">
                          <a className="nav-link btn_signup"> Get Started </a>
                        </Link>
                      </li>
                    )}
                    {token && (
                      <>
                        <CartHeader
                          token={token}
                          dispatch={dispatch}
                          user={user}
                        />
                        <li
                          className="nav-item d-flex align-items-center"
                          title="User Options"
                        >
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="default"
                              className="user-menu d-flex align-items-center m-0 p-0"
                              id="dropdownMenuButton"
                            >
                              <span className="nav-link nav-link-message">
                                <i className="las la-user-cog"></i>
                              </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                href=""
                                onClick={() => dropdownLink("/user/dashboard")}
                              >
                                <i className="las la-tachometer-alt"></i>{" "}
                                Dashboard
                              </Dropdown.Item>
                              <Dropdown.Item
                                href=""
                                onClick={() => dropdownLink("/user/profile")}
                              >
                                <i className="las la-user"></i> My Profile
                              </Dropdown.Item>
                              <Dropdown.Item
                                href=""
                                onClick={() => dropdownLink("/user/settings")}
                              >
                                <i className="las la-user-edit"></i> Account
                                Settings
                              </Dropdown.Item>
                              <Dropdown.Item
                                href=""
                                onClick={() => dropdownLink("/help")}
                              >
                                <i className="las la-headset"></i> Help and
                                Support
                              </Dropdown.Item>
                              <Dropdown.Item href="" onClick={() => logout()}>
                                <i className="las la-sign-out-alt"></i> Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </>
                    )}

                    {/* <li className="nav-item d-flex align-items-center">
                      <div className="dropdown d-flex justify-content-center">
                        <button
                          className="dropdown-toggle user-menu d-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <a className="nav-link nav-link-message" href="#">
                            <i className="las la-bell"></i>
                            <div className="count">35</div>
                          </a>
                        </button>
                        <div
                          className="dropdown-menu dropdown_notification shadow dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <div className="title f14 fw700 mb-2 text_p d-flex align-items-center justify-content-between text-uppercase">
                            <div className="label">Notifications</div>
                            <div className="actions">
                              <ul className="d-flex gap">
                                <li>
                                  <a
                                    href="my-settings.html#notifications"
                                    className=""
                                  >
                                    <i className="las la-cog f18"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr />
                          <div className="notificationwrapper">
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-user-nurse shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Dr. Hari Bhusal
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Your request for doctor appointment has been
                                    approved.
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Approved
                                      </li>
                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        6 Mins Ago
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-hospital  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Pokhara Reference Laboratory
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Your request for Home Lab Sample Collection
                                    has been approved.
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Approved
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        6 Mins Ago
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-hospital  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Pokhara Reference Laboratory
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Home sample collector has been assigned for
                                    you at
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Collector Assigned
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        6 Mins Ago
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-hospital  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Pokhara Reference Laboratory
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Your samples is collected and has arrived at
                                    our Lab. Your Report will be ready by{" "}
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Confirmed
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        6 Mins Ago
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-hospital  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Pokhara Reference Laboratory
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Your lab test report is ready.
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Completed
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        6 Mins Ago
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-comments  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    Dr. Ram Prasad Poudel
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    Your health query is answered.
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Answered
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        Just Now
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              className="dropdown-item  f14 text-muted"
                              href="my-activities.html"
                            >
                              <div className="notwrap d-flex align-items-start">
                                <i className="las la-comments  shadow  p-2 rounded"></i>
                                <div className="details pl-2">
                                  <div className="title text_p fw600">
                                    New Article Post
                                  </div>
                                  <p className="text-muted f12 text-wrap">
                                    New article on How to solve mental stress?
                                    has been added.
                                  </p>
                                  <div className="meta">
                                    <ul className="d-flex gap mt-2">
                                      <li className="bg_w full_rounded shw px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-check f14 text_p mr-0"></i>
                                        Answered
                                      </li>

                                      <li className="bg_w full_rounded  px-2 py-1 f12 d-flex align-items-center text-muted">
                                        <i className="las la-clock f14 text_p mr-0"></i>{" "}
                                        Just Now
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="viewall d-flex align-items-center pt-3  justify-content-center">
                            <a
                              href="my-activities.html"
                              className="bg_p_dim rounded f14 text_p py-2 px-3"
                            >
                              View all Notifications
                            </a>
                          </div>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
