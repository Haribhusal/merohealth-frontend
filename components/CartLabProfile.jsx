import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userActions } from "../services/user/action";

const CartLabProfile = ({
  data,
  open,
  router,
  selectPackage,
  user,
  onSelectTest,
}) => {
  // get the results of lab tests
  const {
    data: labTestData,
    loading: labTestLoading,
    status: labTestStatus,
  } = user.getLabTest;

  const {
    data: testData,
    loading: testLoading,
    status: testStatus,
  } = user.labTestByCategory;

  // cart post data
  const {
    error: sendCartError,
    data: sendCartData,
    loading: sendCartLoading,
    status: sendCartStatus,
  } = user.postToCart;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!!router.query.keyword) {
      setValue("search", router.query.keyword);
    }
  }, [router.query.keyword, setValue]);

  const addSingleTests = (value) => {
    onSelectTest(value);
  };
  const onSearchTest = (value) => {
    dispatch(userActions.getLabTest(value));
  };

  return (
    <div className="tab-content" id="profilecontent">
      {open === 0 && (
        <div className="tab-pane fade show active">
          <div className="tabcontentwrapper">
            <div className="imagepart">
              <div className="cover">
                <img src={data.cover_picture} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="branding d-flex gap justify-content-start">
              <div className="flex2">
                <div className="profile">
                  <img
                    src={data.display_picture}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="branding-details  flex10 d-flex  gap justify-content-between align-items-center">
                <div className="brand-info flex7">
                  <div className="brand-name mb-0">
                    <h1 className="f18 mb-2">{data.name} </h1>
                  </div>
                  <div className="d-flex brand-meta gap f14">
                    <div className="meta_item address">
                      <i className="las la-clipboard-check"></i> Verified
                    </div>
                    {/* <div className="meta_item category">
                      <i className="las la-tag"></i> Medical Lab
                    </div> */}
                    <div className="meta_item address">
                      <i className="las la-map"></i> {data.lab_address[0].tole},{" "}
                      {data.lab_address[0].district.name}
                    </div>
                  </div>
                </div>
                {/* <div className="cta flex-2">
                  <a href="#">
                    <button className="btn btn_p btn_cta">
                      {" "}
                      <i className="las la-flask"></i>Test Request
                    </button>
                  </a>
                </div> */}
              </div>
            </div>
            <hr />
            <h5 className="title mb-3">Overview</h5>
            <div className="textdetails f14 text-muted">
              <p>
                {data.lab_profile.overview
                  ? data.lab_profile.overview
                  : "No Data Available."}
              </p>
            </div>
            <div className="keyfeatureswrapper">
              <div className="title my-3">
                <strong>Key Features</strong>
              </div>
              {data.lab_profile.key_features ? (
                <ul className="keyfeatures">
                  <li>
                    <i className="las la-check"></i> 24/7 Service Open
                  </li>
                </ul>
              ) : (
                "No Data Available"
              )}
            </div>

            <div className="lab_gallery">
              <div className="row">
                <div className="col-md-12">
                  <div className="title my-3">
                    <strong>Gallery</strong>
                  </div>
                  {data.lab_profile.lab_images ? (
                    <div className="row">
                      <div className="owl-carousel">
                        <div className="gallery_item">
                          <a
                            href="https://unsplash.it/1200/768.jpg?image=251"
                            data-toggle="lightbox"
                            data-gallery="example-gallery"
                            className=""
                          >
                            <img
                              src="https://unsplash.it/600.jpg?image=251"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
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
        <div className="tab-pane fade show active">
          <div className="tabcontentwrapper">
            <div className="heading d-flex align-items-center justify-content-between">
              <div className="textdetails my-4">
                <h5 className="title">Our Services</h5>
                <p className="text-muted">
                  Please click on test names to send request.
                </p>
              </div>
              <div className="formwrapp">
                <form
                  onSubmit={handleSubmit(onSearchTest)}
                  className="w-100 d-flex align-items-center justify-content-between gap"
                >
                  <div className="searchbar profileSearchTest flex6 d-flex align-items-center">
                    <input
                      type="text"
                      autoFocus
                      className="form-control"
                      placeholder="Search Services, Test Group"
                      {...register("search")}
                    />
                    <button type="submit" className="btn btn_p">
                      <i className="las la-search flipX"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="heading_services my-3"></div>
            {testLoading && "Loading Services ..."}
            {testStatus === "success" && (
              <div id="accordion" className="services_groups">
                <div>
                  {testData.results.map((item) => (
                    <div key={item.slug} className="card services_group">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-block d-flex justify-content-between group_name align-items-center">
                            <div className="label">{item.name}</div>
                            <div className="heading-right d-flex gap">
                              <div className="category">
                                <strong>
                                  <small>
                                    {" "}
                                    <i className="las la-tag"></i>
                                    {item.name}
                                  </small>
                                </strong>
                              </div>

                              <div className="price">Rs {item.total_price}</div>
                            </div>
                          </button>
                        </h5>
                      </div>

                      <div id="collapseOne" className="collapse show">
                        <div className="card-body">
                          <ul className="tests d-flex flex-wrap">
                            {item.lab_tests.map((ele) => (
                              <li
                                key={ele.slug}
                                className="test cursor-pointer"
                                onClick={() => addSingleTests(ele)}
                              >
                                <i className="las la-flask"></i> {ele.test.name}{" "}
                                (Rs. {ele.price})
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    {!testData.results.length && (
                      <div className="col-sm-12 text-center">
                        <h5 className="font-weight-bold py-4">
                          No Results Found
                        </h5>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* <div className="bg_p_dim px-3 py-2 rounded">
              <div className="left-content"></div>
              <div className="right-content"></div>
            </div> */}
          </div>
        </div>
      )}
      {open === 2 && (
        <div className="tab-pane fade show active">
          <div className="tabcontentwrapper">
            <div className="textdetails">
              <h5 className="title text-center mb-3">Our Members</h5>
            </div>
            <ul className="doctors">
              <li className="doctor">
                <div className="image">
                  <img
                    src="http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg"
                    alt=""
                    className="img-fluid"
                  />
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
          </div>
        </div>
      )}
      {open === 3 && (
        <div className="tab-pane fade show active">
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
                        src="http://wwsthemes.com/themes/medwise/v1.4/images/doctor-single.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="doctor-details package-details">
                      <h6 className="name">{item.name}</h6>
                      <p className="text-muted mb-0">
                        <small className="text-underline">
                          Rs. {item.actual_price}
                        </small>
                        <br />
                        <small>Rs. {item.price}</small>
                      </p>
                      <p className="text-muted my-3">
                        {item.description.slice(0, 400)}
                        {item.description.length >= 400 && "..."}
                      </p>
                    </div>
                    <div className="appointment">
                      <button
                        className="btn btn-sm btn_appointment"
                        onClick={() => selectPackage(item)}
                        disabled={sendCartLoading}
                      >
                        {sendCartLoading ? "Loading.." : "Add Package"}
                      </button>
                    </div>

                    {sendCartStatus === "failed" && (
                      <small className="text-danger d-block mt-3">
                        {sendCartError.detail}
                      </small>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center">No Packages Available!</div>
            )}
          </div>
        </div>
      )}
      {/* {open === 4 && (
        <div className="tab-pane fade show active">
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
            <div className="keyfeatureswrapper">
              <div className="title my-3">
                <strong>Key Features</strong>
              </div>
              <ul className="keyfeatures">
                <li>
                  <i className="las la-check"></i> 24/7 Service Open
                </li>
                <li>
                  <i className="las la-check"></i> Best Quality Testing
                </li>
                <li>
                  <i className="las la-check"></i> Online Report
                </li>
                <li>
                  <i className="las la-check"></i> Sample Collection from Home
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {open === 5 && (
        <div className="tab-pane fade show active">
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
                        src="../../media/support.png"
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
      )} */}
    </div>
  );
};

export default CartLabProfile;
