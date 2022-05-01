/* eslint-disable @next/next/no-img-element */
/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyFeatures from "../../KeyFeatures";
import Slider from "react-slick";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { labActions } from "../../../services/lab/action";
import DeleteImageModal from "./DeleteImageModal";
import ToastMessage from "../../Message";
import { DELETE_GALLERY_RESET } from "../../../services/lab/types";

const TabsComp = ({
  lab,
  dispatch,
  data,
  labMemberData,
  labMemberStatus,
  setshowOverviewEdit,
  setShowGallery,
}) => {
  const { loading, status: deleteGalleryStatus } = lab.deleteGallery;

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [open, setOpen] = useState(0);
  // show message alert
  const [show, setShow] = useState(false);
  // show delete modal
  const [showModal, setShowModal] = useState(false);
  const [imageId, setImageId] = useState(false);

  const onDeleteImage = (id) => {
    setShowModal(true);
    setImageId(id);
  };

  const onRemoveImage = () => {
    setShowModal(false);
    dispatch(labActions.deleteGallery(imageId));
  };

  useEffect(() => {
    if (deleteGalleryStatus === "success") {
      setShow({ bg: "success", message: "Image Deleted Successfully!" });
      setTimeout(() => {
        setShow(false);
        dispatch({ type: DELETE_GALLERY_RESET });
        dispatch(labActions.getLabProfile());
      }, 1500);
    }
  }, [deleteGalleryStatus, dispatch]);

  return (
    <div className="menu">
      {show && (
        <ToastMessage
          show={show}
          setShow={setShow}
          bg={show.bg}
          message={show.message}
        />
      )}
      {showModal && (
        <DeleteImageModal
          show={showModal}
          setShow={setShowModal}
          onRemoveImage={onRemoveImage}
        />
      )}
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
              Members
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
          <li className="social_link">
            <OverlayTrigger overlay={<Tooltip>Facebook</Tooltip>}>
              <a href="#">
                <i className="lab la-facebook"></i>
              </a>
            </OverlayTrigger>
          </li>
          <li
            className="social_link"
            data-toggle="tooltip"
            data-placement="Bottom"
            title="Tooltip on Bottom"
          >
            <OverlayTrigger overlay={<Tooltip>Instagram</Tooltip>}>
              <a href="#">
                <i className="lab la-instagram"></i>
              </a>
            </OverlayTrigger>
          </li>
          <li className="social_link">
            <OverlayTrigger overlay={<Tooltip>Youtube</Tooltip>}>
              <a href="#">
                <i className="lab la-youtube"></i>
              </a>
            </OverlayTrigger>
          </li>
          <li className="social_link">
            <OverlayTrigger overlay={<Tooltip>Asia</Tooltip>}>
              <a href="#">
                <i className="las la-globe-asia"></i>
              </a>
            </OverlayTrigger>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="profilecontent">
        {open === 0 && (
          <div className="tab-pane fade show active" id="overview">
            <div className="tabcontentwrapper">
              <a href="#" onClick={() => setshowOverviewEdit(true)}>
                <i className="las la-pen edit"></i>
              </a>
              <div className="title mb-3">
                Expiry Date: <b>{data.expiry_date}</b>
              </div>
              <h5 className="title mb-3">Overview</h5>
              <div className="textdetails f14 text-muted">
                <p>
                  {data.lab_profile.overview
                    ? data.lab_profile.overview
                    : "No Data Available"}
                </p>
              </div>
              <KeyFeatures keyfeature={data.lab_profile.key_features} />

              <div className="lab_gallery">
                <i
                  className="las la-plus edit"
                  onClick={() => setShowGallery(true)}
                ></i>

                <div className="row">
                  <div className="col-md-12">
                    <div className="title my-3">
                      <strong>Gallery</strong>
                    </div>
                    {!!data.lab_images ? (
                      <div className="row">
                        <div className="col-sm-12 labGallery">
                          <Gallery>
                            {data.lab_images.map((ele, ind) => (
                              <Item
                                key={ind}
                                original={ele.image}
                                thumbnail={ele.image}
                                width="1000"
                                height="1000"
                              >
                                {({ ref, open }) => (
                                  <div className="tabImg">
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={ele.image}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn_delete"
                                      onClick={() => onDeleteImage(ele.id)}
                                    >
                                      <i className="las la-times"></i>
                                    </button>
                                  </div>
                                )}
                              </Item>
                            ))}
                          </Gallery>
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
          <div className="tab-pane fade show active" id="services">
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
                      autoFocus
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
                        id="dropdownMenuLink"
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
              <div div className="services_groups">
                <div className="card services_group">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-block d-flex justify-content-between group_name align-items-center">
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

                  <div id="collapseOne" className="collapse show">
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
              {labMemberStatus === "success" && (
                <ul className="doctors">
                  {labMemberData.results.length > 0
                    ? labMemberData.results.map((item, index) => (
                        <li key={index} className="doctor">
                          <div className="image">
                            <img
                              src={
                                item.profile_picture != null
                                  ? item.profile_picture
                                  : "/AvatarMaleFinal.png"
                              }
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="doctor-details">
                            <h6 className="name">{item.user_data.full_name}</h6>
                            <p className="text-muted mb-0">{item.role}</p>
                          </div>
                          {/* <div className="appointment">
                        <a href="#">
                          <button className="btn btn-sm btn_appointment">
                            Book Appointment
                          </button>
                        </a>
                      </div> */}
                        </li>
                      ))
                    : "No Members Found"}
                </ul>
              )}
              <KeyFeatures keyfeature={data.lab_profile.key_features} />
            </div>
          </div>
        )}
        {open === 3 && (
          <div
            className="tab-pane fade show active"
            id="packages"
            role="tabpanel"
          >
            <div className="tabcontentwrapper">
              <div className="textdetails">
                <h5 className="title text-center mb-3 mt-4">
                  Our Health Packages
                </h5>
              </div>
              {data.lab_packages.length > 0 ? (
                <ul className="doctors packages">
                  {data.lab_packages.map((item) => (
                    <li className="doctor package bg_p_dim" key={item.slug}>
                      <div className="doctor-details package-details">
                        <div className="image package-image mb-3">
                          <img
                            src={item.image ?? "/cover.png"}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="titleare d-flex justify-content-between mx-2">
                          <h5 className="name">{item.name}</h5>
                          <div>
                            <h6 className="price">Rs. {item.actual_price}</h6>
                            {item.discount > 0 && (
                              <del>
                                <small>Rs. {item.price}</small>
                              </del>
                            )}
                          </div>
                        </div>
                        <p className="text-muted my-3 mx-2">
                          {item.description.slice(0, 200)}
                          {item.description.length >= 200 && "..."}
                        </p>
                      </div>
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
                        <Image
                          src="/media/support.png"
                          alt=""
                          className="img-fluid"
                          width="10"
                          height="10"
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

export default TabsComp;
