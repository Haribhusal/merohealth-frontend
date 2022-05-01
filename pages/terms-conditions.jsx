/* eslint-disable @next/next/no-img-element */
import React from "react";

const terms = () => {
  return (
    <div>
      <header className="main-header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center justify-content-start">
                <ul className="topmenu socialmenu">
                  <li>
                    <a href="#">
                      <i className="las la-phone"></i> 1660 615 2022{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="las la-envelope"></i> info@merohealthapp.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 d-flex justify-content-end align-items-center">
                <ul className="topmenu socialmenu">
                  <li className="services_trigger">
                    <a href="#">
                      Our Services <i className="las la-angle-down"></i>
                    </a>
                    <div className="servicesHeader d-none">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <h6 className="title mb-3">MeroHealth Services</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="servicewrapper">
                              <div className="service_item">
                                <a href="#" className="">
                                  <div className="imagepart">
                                    <img
                                      src="../media/taking-blood.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="textpart">
                                    <div className="icon"></div>
                                    <div className="label">
                                      <h6 className="mb-2">
                                        Laboratory Services
                                      </h6>
                                      <p className="text-muted">
                                        <small>
                                          Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit. Ut
                                          magnam atque veniam praesentium quasi
                                          impedit eius? Voluptate, asperiores,
                                          suscipit est quisquam, natus mollitia
                                          tempora placeat nulla quasi enim
                                          nostrum ullam.
                                        </small>
                                      </p>
                                      <div className="buttonwrapper mt-3">
                                        <a href="#">
                                          <button
                                            type="button"
                                            className="btn btn_p btn-sm"
                                          >
                                            Send Test Request
                                          </button>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#"> About us </a>
                  </li>
                  <li>
                    <a href="#"> How it works </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> Follow us: </a>
                  </li>
                  <li className="">
                    <a href="#">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      {" "}
                      <i className="lab la-instagram"></i>{" "}
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      {" "}
                      <i className="lab la-youtube"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mainbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="../index.html">
                    <img
                      src="../../media/logo.svg"
                      alt="MeroHealth Logo"
                      className="logo"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="searcbar w-100 d-flex justify-content-end">
                      <form action="" className="searchform">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Lab, Pharmacy, Hygenic Products..."
                          id=""
                        />
                        <button type="submit" className="btn btn_p btn_search">
                          <i className="las la-search"></i>
                        </button>
                      </form>
                    </div>

                    <ul className="navbar-nav user_menu ml-auto navbar-right d-flex justify-content-end w-100">
                      <li
                        className="nav-item d-flex align-items-center nav-item-dashboard"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Go to Dashboard"
                        data-trigger="hover"
                      >
                        <a
                          className="nav-link d-flex align-items-center"
                          href="../templates/user/index.html"
                        >
                          <img src="../../media/user.png" alt="" />
                          <div className="user_info pl-2">
                            <h6 className="name mb-0">Pooja</h6>
                          </div>
                        </a>
                      </li>

                      <li
                        className="nav-item d-flex align-items-center"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="bottom"
                        title="Use Service As"
                      >
                        <a
                          className="nav-link"
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#useServiceAs"
                        >
                          <i className="las la-briefcase-medical"></i>
                        </a>
                      </li>

                      <li className="nav-item d-flex align-items-center">
                        <div className=" dropdown d-flex justify-content-center">
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
                                      Your request for doctor appointment has
                                      been approved.
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
                                      Your request for Home Lab Sample
                                      Collection has been approved.
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
                                      Home sample collector has been assigned
                                      for you at
                                      {/* {{ time }} */}
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
                                      Your samples is collected and has arrived
                                      at our Lab. Your Report will be ready by{" "}
                                      {/* {{ time }} or custom message {{ message }} */}
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
                      </li>

                      <li
                        className="nav-item d-flex align-items-center"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="User Options"
                        data-trigger="hover"
                      >
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
                              <i className="las la-user-cog"></i>
                            </a>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a
                              className="dropdown-item f16 text-muted"
                              href="user-profile.html"
                            >
                              <i className="las la-user"></i> My Profile
                            </a>

                            <div className="dropdown-divider"></div>
                            <a
                              className="dropdown-item f16 text-muted"
                              href="my-settings.html#profile"
                            >
                              <i className="las la-user-edit"></i> Account
                              Settings
                            </a>
                            <div className="dropdown-item d-flex align-items-center justify-content-between">
                              <i className="las la-adjust"></i>
                              <div className="label f16 text-muted">
                                Dark Mode
                              </div>
                              <div className="darkmode">
                                <div className="switch">
                                  <div className="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customSwitch1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customSwitch1"
                                    ></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              className="dropdown-item f16 text-muted"
                              href="help-and-support.html"
                            >
                              <i className="las la-headset"></i> Help and
                              Support
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                              className="dropdown-item f16 text-muted"
                              href="#"
                            >
                              <i className="las la-sign-out-alt"></i>Logout
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 d-flex align-items-center">
                <div className="videoWrapper">
                  <div className="thumb">
                    <div className="play">
                      <img src="../media/play.svg" alt="" />
                    </div>
                    <img
                      src="../media/video-thumbnail.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-7 d-flex align-items-center pr-5">
                <div className="text-wrapper">
                  <div className="sub-heading">About us</div>
                  <h3 className="heading my-3">Who we are?</h3>

                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga sed et ducimus? Voluptatum vero accusantium, neque hic
                    impedit libero provident a odio? Modi, dolores beatae
                    facilis voluptas laborum fugit doloribus adipisci animi eius
                    corrupti error iste incidunt labore? Perferendis, qui.
                  </p>

                  <ul className="my-3 features">
                    <li>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, eveniet!
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Lorem ipsum dolor adipisicing elit. Perspiciatis,
                        eveniet!
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, Lorem, ipsum dolor sit amet consectetur
                        adipisicing. eveniet!
                      </p>
                    </li>
                  </ul>

                  <div className="buttons my-3 d-flex">
                    <a href="#" className="btn btn_p_b">
                      Know more
                    </a>
                    <a href="#" className="btn btn_p_b">
                      Our Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <div className="text-wrapper">
                  <div className="sub-heading">
                    Our users are happy to use MeroHealth
                  </div>
                  <h3 className="heading mb-5">Customer Reviews</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="owl-carousel">
                  <div className="reviewWrapper">
                    <p className="testimonial text_different">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet dolorum recusandae cumque eum rem ipsa similique,
                      omnis quisquam mollitia obcaecati!
                    </p>
                    <strong className="by">
                      <div className="icon">
                        <img src="../media/quote.svg" alt="" />
                      </div>
                      Hari Prasad Bhusal, Kathmandu
                    </strong>
                  </div>
                  <div className="reviewWrapper">
                    <p className="testimonial text_different">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet dolorum recusandae cumque eum rem ipsa similique,
                      omnis quisquam mollitia obcaecati!
                    </p>
                    <strong className="by">
                      <div className="icon">
                        <img src="../media/quote.svg" alt="" />
                      </div>
                      Anup Jwala Poudel
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="row reviewactionrow py-4">
              <div className="col-sm-6 col-8">
                <a href="#" className="btn btn_p">
                  View all reviews
                </a>
              </div>
              <div className="col-sm-6 col-4 d-flex justify-content-end">
                <div className="buttons d-flex">
                  <button type="button" className="btn btn_left">
                    <img src="../media/right.svg" alt="" />
                  </button>
                  <button type="button" className="btn btn_right">
                    <img src="../media/right.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="socialicons">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="followlinks">
                  <strong>Follow us</strong>
                  <ul className="d-flex">
                    <li>
                      <a href="#">
                        <i className="la la-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="la la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="la la-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="la la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="la la-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-end text-right">
                <div className="followlinks">
                  <strong>Tollfree Number for Emergency</strong>
                  <h3 className="number">1660 615 2022 </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footerMain">
          <div className="container">
            <div className="row pb-5">
              <div className="col-sm-4">
                <div className="footerBrand">
                  <strong className="title">How MeroHealth Works?</strong>
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, pariatur nisi neque nemo quos aspernatur. Porro minus
                    expedita cumque, sapiente quas rerum. Saepe, voluptatibus
                    ipsum blanditiis quibusdam modi tenetur voluptatum?
                  </p>
                  <a href="#" className="btn btn-link">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="subscribewrapper">
                  <strong className="title">
                    Subscribe and get free health tips
                  </strong>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime voluptates porro quam!
                  </p>
                  <form action="" className="subscribeForm d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email address"
                    />
                    <button type="submit" className="btn btn_p">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="linksWrapper">
                  <strong className="title">For Laboratories</strong>
                  <ul className="links">
                    <li>
                      <a href="#" className="link">
                        Create an account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        Customer Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row footer_menu">
              <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light py-2">
                  <a className="navbar-brand" href="#">
                    <img
                      src="../media/logo-white.svg"
                      alt="MeroHealth Logo"
                      className="img-fluid logo"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          How it works
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          How it works
                        </a>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto navbar-right">
                      <li className="nav-item mr-2">
                        <a className=" btn btn_p_b rounded" href="#">
                          Patient/User Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="btn btn_p rounded" href="#">
                          Create Patient Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="textwrap left">
                  &copy; 2021, Prarambha Group Pvt. Ltd, All Rights Reserved
                </div>
              </div>
              <div className="col-sm-6">
                <div className="textwrap right">
                  Design with &hearts; by Prarambha Group Pvt. Ltd.
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <div
        className="modal fade loginModal"
        id="loginRegisterModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-4">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="title d-flex mb-3 align-items-center justify-content-between">
                  <h3 className="text f20 text_p fw700">
                    Login to your account
                  </h3>
                  <div className="loginwithwrapper d-flex gap align-items-center">
                    <a href="#" className="loginWith fb">
                      <i className="lab la-facebook-f"></i>
                    </a>
                    <a href="#" className="loginWith google">
                      <i className="lab la-google"></i>
                    </a>
                  </div>
                  <div className="close" data-dismiss="modal">
                    <i className="las la-times"></i>
                  </div>
                </div>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Enter Email or Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="rem" className="d-flex gap">
                      <input type="checkbox" name="rem" id="rem" />
                      <div className="label">Remember me</div>
                    </label>
                    <label htmlFor="forgetpass">
                      <a href="#" id="forgetpass">
                        Forgot password?
                      </a>
                    </label>
                  </div>

                  <div className="form-group">
                    <button type="submit" role="button" className="btn btn_p">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="title d-flex mb-3 align-items-center justify-content-between">
                  <h3 className="text f20 fw700 text_p">
                    Lets create an account
                  </h3>
                  <div className="loginwithwrapper d-flex gap align-items-center">
                    <a href="#" className="loginWith fb">
                      <i className="lab la-facebook-f"></i>
                    </a>
                    <a href="#" className="loginWith google">
                      <i className="lab la-google"></i>
                    </a>
                  </div>
                  <div className="close" data-dismiss="modal">
                    <i className="las la-times"></i>
                  </div>
                </div>
                <form action="">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group d-flex justify-content-between align-items-center">
                        <label className="d-flex gap">
                          <input type="checkbox" name="accept" id="accept" />
                          <div className="label">
                            I accept the{" "}
                            <a href="#" target="_blank">
                              Terms and Conditions
                            </a>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          role="button"
                          className="btn btn_p"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul
              className="nav nav-tabs d-flex justify-content-between"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item flex1" role="presentation">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  I already have account
                </a>
              </li>
              <li className="nav-item flex1" role="presentation">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  I do not have account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default terms;
