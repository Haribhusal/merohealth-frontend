/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import KeyFeatures from "./KeyFeatures";

const LabPublicProfile = ({ data }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="menu">
      <div className="linkbar d-flex align-items-center justify-content-between">
        <ul
          className="nav nav-tabs fixtopmenu d-flex"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className={open === 0 ? "nav-link active" : "nav-link"}
              id="home-tab"
              href="#overview"
              onClick={() => setOpen(0)}
            >
              Overview
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={open === 1 ? "nav-link active" : "nav-link"}
              id="profile-tab"
              href="#services"
              onClick={() => setOpen(1)}
            >
              Test Services
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={open === 2 ? "nav-link active" : "nav-link"}
              id="profile-tab"
              href="#doctors"
              onClick={() => setOpen(2)}
            >
              Doctors
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={open === 3 ? "nav-link active" : "nav-link"}
              id="contact-tab"
              href="#packages"
              onClick={() => setOpen(3)}
            >
              Health Packages
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={open === 4 ? "nav-link active" : "nav-link"}
              id="contact-tab"
              href="#reviews"
              onClick={() => setOpen(4)}
            >
              Reviews
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={open === 5 ? "nav-link active" : "nav-link"}
              id="contact-tab"
              href="#enquiry"
              onClick={() => setOpen(5)}
            >
              Enquiry
            </a>
          </li>
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

      <div className="tab-content" id="profilecontent">
        {open === 0 && (
          <div
            className="tab-pane fade show active"
            id="overview"
            role="tabpanel"
          >
            <div className="tabcontentwrapper">
              <h5 className="title mb-3">Overview</h5>
              <div className="textdetails f14 text-muted">
                <p>
                  {data.lab_profile.overview
                    ? data.lab_profile.overview
                    : "No Data Available."}
                </p>
              </div>
              <KeyFeatures keyfeature={data.lab_profile.key_features} />

              <div className="lab_gallery">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title my-3">
                      <strong>Gallery</strong>
                    </div>
                    {!!data.lab_images ? (
                      <div className="row">
                        <div className="owl-carousel d-flex flex-wrap">
                          {data.lab_images.map((element, index) => (
                            <div className="gallery_item" key={index}>
                              <a
                                href={element.image}
                                data-toggle="lightbox"
                                data-gallery="example-gallery"
                                className=""
                              >
                                <img
                                  src={element.image}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      "No Images Available"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {open === 1 && (
          <div
            className="tab-pane fade show active"
            id="services"
            role="tabpanel"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-center mb-3">Our Services</h5>
              </div>

              <div className="heading_services my-3">
                <form
                  action=""
                  className="w-100 d-flex align-items-center justify-content-between gap"
                >
                  <div className="searchbar flex6 d-flex align-items-center">
                    <input
                      type="text"
                      name=""
                      autoF0
                      ocus
                      id=""
                      className="form-control"
                      placeholder="Search Services, Test Group"
                    />
                    <button type="submit" className="btn btn_p">
                      <i className="las la-search"></i>
                    </button>
                  </div>
                  <div className="category flex2 d-flex justify-content-end">
                    <div className="dropdown filter_cat w-100 show">
                      <a
                        className="btn btn-block btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="las la-filter"></i> Filter
                      </a>

                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Haematology <span className="count">23</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          Paracitology <span className="count">3</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          Something Logy
                          <span className="count">18</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div id="accordion" className="services_groups">
                <div className="card services_group">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between group_name align-items-center"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="label">Complete Blood Count (CBC)</div>
                        <div className="heading-right d-flex gap">
                          <div className="category">
                            <strong>
                              <small>
                                {" "}
                                <i className="las la-tag"></i>
                                Haematology
                              </small>
                            </strong>
                          </div>

                          <div className="price">Rs 3400</div>
                        </div>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="tests d-flex flex-wrap">
                        <li className="test">
                          <i className="las la-flask"></i> Haemoglobin
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> PCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Red Blood Cell Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCH
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCHC
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Platelet Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> RDW
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Total Leucocyte Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Differential
                          Leucocyte Count
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card services_group">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between group_name align-items-center collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="label">Test group 2</div>
                        <div className="price">Rs 400</div>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="tests d-flex flex-wrap">
                        <li className="test">
                          <i className="las la-flask"></i> Haemoglobin
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> PCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Red Blood Cell Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCH
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCHC
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Platelet Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> RDW
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Total Leucocyte Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Differential
                          Leucocyte Count
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card services_group">
                  <div className="card-header" id="headingthree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-block d-flex justify-content-between group_name align-items-center collapsed"
                        data-toggle="collapse"
                        data-target="#collapsethree"
                        aria-expanded="false"
                        aria-controls="collapsethree"
                      >
                        <div className="label">Test Group 3 like lorem</div>
                        <div className="price">Rs 1400</div>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapsethree"
                    className="collapse"
                    aria-labelledby="headingthree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="tests d-flex flex-wrap">
                        <li className="test">
                          <i className="las la-flask"></i> Haemoglobin
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> PCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Red Blood Cell Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCV
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCH
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> MCHC
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Platelet Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> RDW
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Total Leucocyte Count
                        </li>
                        <li className="test">
                          <i className="las la-flask"></i> Differential
                          Leucocyte Count
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg_p_dim px-3 py-2 rounded">
                <div className="left-content"></div>
                <div className="right-content"></div>
              </div>

              <KeyFeatures keyfeature={data.lab_profile.key_features} />
            </div>
          </div>
        )}
        {open === 2 && (
          <div
            className="tab-pane fade show active"
            id="doctors"
            role="tabpanel"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-center mb-3">Our Members</h5>
              </div>
              <ul className="doctors">
                <li className="doctor">
                  <div className="image">
                    {/* <Image
                      src="http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg"
                      alt=""
                      className="img-fluid"
                    /> */}
                  </div>
                  <div className="doctor-details">
                    <h6 className="name">Hari Bhusal</h6>
                    <p className="text-muted mb-0">Physiotherapist</p>
                  </div>
                  <div className="appointment">
                    <a href="#">
                      <button className="btn btn-sm btn_appointment">
                        Book Appointment
                      </button>
                    </a>
                  </div>
                </li>
              </ul>
              <KeyFeatures keyfeature={data.lab_profile.key_features} />
            </div>
          </div>
        )}
        {open === 3 && (
          <div
            className="tab-pane fade show active"
            id="packages"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-center mb-3">Our Health Packages</h5>
              </div>
              {data.lab_packages.length > 0 ? (
                <ul className="doctors packages">
                  {data.lab_packages.map((item) => (
                    <li className="doctor package" key={item.slug}>
                      <div className="image package-image">
                        <img
                          src={item.image ?? "/cover.png"}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="doctor-details package-details">
                        <h6 className="name">{item.name}</h6>
                        <p className="text-muted mb-0 mt-3">
                          <h6>Rs. {item.actual_price}</h6>
                          {item.discount > 0 && (
                            <del>
                              <small>Rs. {item.price}</small>
                            </del>
                          )}
                        </p>
                        <p className="text-muted my-3">
                          {item.description.slice(0, 400)}
                          {item.description.length >= 400 && "..."}
                        </p>
                      </div>
                      {/* <div className="appointment">
                        <a href="#">
                          <button className="btn btn-sm btn_appointment ">
                            Book Appointment
                          </button>
                        </a>
                      </div> */}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center">No Packages Available!</div>
              )}
              <KeyFeatures keyfeature={data.lab_profile.key_features} />
            </div>
          </div>
        )}
        {open === 4 && (
          <div
            className="tab-pane fade show active"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-center mb-3">
                  What people are saying about our services
                </h5>
              </div>
              <ul className="doctors packages reviews">
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
                <li className="doctor package review">
                  <div className="doctor-details package-details review-by">
                    <p className="text-muted my-3">
                      This lab is very good as Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Laborum, odit? Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Nisi, sint.
                    </p>
                    <div className="ratewrapper my-3">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                    <h6 className="name mb-0">Ram Sharma</h6>
                    <p className="text-muted mb-0">
                      <small>Kathmandu, Nepal</small>
                    </p>
                  </div>
                </li>
              </ul>
              <KeyFeatures keyfeature={data.lab_profile.key_features} />
            </div>
          </div>
        )}
        {open === 5 && (
          <div
            className="tab-pane fade show active"
            id="enquiry"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-left mb-3">Enquiry Form</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <form action="">
                      <div className="form-group">
                        <label>
                          <small>Your Name</small>
                        </label>
                        <input
                          type="text"
                          name=""
                          id="name"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          <small>Your Email</small>
                        </label>
                        <input
                          type="email"
                          name=""
                          id="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          <small>Your Contact Number</small>
                        </label>
                        <input
                          type="tel"
                          name=""
                          id="tel"
                          className="form-control"
                          placeholder="Contact Number"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          <small>Your Message</small>
                        </label>
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          cols=""
                          rows="4"
                          placeholder="Explain your Issue"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn_p">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-6 enquiry_contact_details d-flex align-items-center justify-content-center">
                    <div className="helpwrapper">
                      <div className="imgwrapper">
                        <img
                          src="/media/support.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="titlewrapper">
                        <h3 className="title">Need Help?</h3>
                        <p className="text-muted">
                          You can contact us with the following contact
                          lab-details
                        </p>
                        <ul>
                          <li>
                            <a href="tel:9847458523">
                              {" "}
                              <i className="las la-phone"></i> Call us at
                              9847458523
                            </a>
                          </li>
                          <li>
                            <a href="tel:1660016152022">
                              {" "}
                              <i className="las la-map"></i> Find us at Lab
                              address
                            </a>
                          </li>
                          <li>
                            <i className="las la-calendar"></i> 06:00 AM - 07:00
                            PM (Everyday)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabPublicProfile;
