/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../../components/user/UserLayout";
import withAuth from "../../config/withAuth";
import { userActions } from "../../services/user/action";
import { appUtils } from "../../utils/appUtils";
import Loading from "../../components/Loading";

const UserDashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data: labListData, status: labListStatus } = user.getLabList;
  console.log("labListData", labListData);
  const {
    data: testData,
    loading: testLoading,
    status: testStatus,
  } = user.getTestRequest;

  const [userData, setUserData] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserData(user);
  }, []);

  useEffect(() => {
    // get lab list
    dispatch(userActions.getLabList());
    // get all test requests
    dispatch(userActions.getTestRequest());
  }, [dispatch]);

  //
  const onLabChoose = (slug) => {
    appUtils.setLabSlug(slug);
    router.push("/lab/dashboard");
  };

  return (
    <UserLayout>
      {testLoading && <Loading />}
      <div className="midwrapper">
        <div className="welcoming">
          <div className="row">
            <div className="col-sm-8">
              <div className="helloarea">
                <h3 className="title fw500 text_p f25">
                  Hello,{" "}
                  <span className="name fw700">{userData.full_name}</span>
                </h3>
                <p className="text-muted f14">
                  This is what we&apos;ve got for you today
                </p>
              </div>
            </div>
            {/* <div className="col-sm-4 justify-content-end d-flex align-items-center">
              {labListStatus === "success" && (
                <button
                  className="btn btn_p btn_switch_account"
                  onClick={() => setOpen(!open)}
                  disabled={labListData.count === 0}
                >
                  Switch Account
                </button>
              )}
            </div> */}
          </div>
        </div>
        {/* <Collapse in={open}>
          <div className="toggleSwitchAccount">
            {labListStatus === "success" && (
              <div className="userswitch mt-3">
                {labListData.results.map((item, index) => (
                  <div key={index} className="dashwrapper p lab_user rounded">
                    <div className="d-flex align-items-center ">
                      <div className="name flex8 pl-2 ">
                        <h3 className="f16 fw700 name">{item.name}</h3>
                        <p className="f14 address">
                          License No: {item.licence_number}
                        </p>
                        <p className="f14 address">
                          PAN/VAT No: {item.pan_number}
                        </p>

                        <ul className="d-flex mt-2 gap labNoti">
                          <li className=" py-1 px-2 f14 full_rounded">
                            <i
                              className={
                                item.is_approved
                                  ? "las la-check f18"
                                  : "las la-clock f18"
                              }
                            ></i>
                            <span className="count mr-0">
                              {item.is_approved ? " Approved" : " Pending"}
                            </span>
                          </li>
                          <li className=" py-1 px-2 f14 full_rounded">
                            <i className="las la-user f18"></i>
                            <span className="count mr-0">{item.user_role}</span>
                          </li>
                           <li className=" py-1 px-2 f14 full_rounded">
                            <i className="las la-eye f18"></i>
                            <span className="count mr-0">7</span>
                          </li>
                          <li className=" py-1 px-2 f14 full_rounded">
                            <i className="las la-comments  f18"></i>
                            <span className="count mr-0">47</span>
                          </li>
                          <li className=" py-1 px-2 f14 full_rounded">
                            <i className="las la-bell  f18"></i>
                            <span className="count mr-0">7</span>
                          </li>
                        </ul>
                      </div>

                      {item.is_approved && (
                        <div className="flex4 d-flex align-items-center justify-content-end">
                          <button
                            className="btn btn_switch mr-3 d-flex align-items-center"
                            onClick={() => onLabChoose(item.slug)}
                          >
                            <div className="label pr-2">Switch Account</div>
                            <i className="las la-arrow-right"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Collapse> */}
        <div className="counterarea mt-3">
          <div className="row">
            <div className="col-sm-12">
              <div className="counters d-flex gap flex-wrap">
                {testStatus === "success" && (
                  <Link href="/user/request">
                    <a className="counter counterBox bg_w p flex1 rounded">
                      <div className="subtitle d-flex justify-content-between f14 text-muted fw700">
                        <div className="label">Lab requests</div>
                      </div>
                      <div
                        className="title fw700 text_p f40 labRequests"
                        id="labRequests"
                      >
                        {testData.count}
                      </div>
                      <div className="boxIcon">
                        <i className="las la-flask"></i>
                      </div>
                    </a>
                  </Link>
                )}
                <a href="#" className="counter counterBox bg_w p flex1 rounded">
                  <div className="subtitle d-flex justify-content-between f14 text-muted fw700">
                    <div className="label">Queries Asked</div>
                  </div>
                  <div className="title fw700 text_p f40 queries " id="queries">
                    0
                  </div>
                  <div className="boxIcon">
                    <i className="las la-question"></i>
                  </div>
                </a>
                <a href="#" className="counter counterBox bg_w p flex1 rounded">
                  <div className="subtitle d-flex justify-content-between f14 text-muted fw700">
                    <div className="label">Doctor Appointments</div>
                  </div>
                  <div className="title fw700 text_p f40">0</div>
                  <div className="boxIcon">
                    <i className="las la-user-nurse"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {labListStatus === "success" && (
          <div className="recentActivities  mt-3">
            <div className="subtitle d-flex align-items-center justify-content-between">
              <div className="left">
                <div className="text-muted f14 fw700">Your Lab</div>
              </div>
              <div className="right">
                <p className="text-muted">
                  You operate {labListData.count} Labs
                </p>
              </div>
            </div>
            <div className="recentDash my-3">
              {labListData.results.map((item, index) => (
                <div key={index} onClick={() => onLabChoose(item.slug)}>
                  <div className="item labSelect counterBox box bg_w p rounded">
                    <div className="title fw600  d-flex align-items-center justify-content-between">
                      <div className="label text-muted f16">
                        {" "}
                        <i className="las la-building text_p"></i>{" "}
                        {item.name.length > 24
                          ? item.name.slice(0, 24) + "..."
                          : item.name}
                      </div>
                      <div className="category fw500 text-muted f12  text_p  rounded">
                        {" "}
                        <i className="las la-user f18"></i>
                        {item.user_role}
                      </div>
                    </div>
                    <div className="info my-3">
                      <div className="text-muted d-flex justify-content-between">
                        <span>License No: {item.licence_number}</span>
                      </div>
                      <p className="text-muted">
                        <span>Expiry Date: {item.expiry_date}</span>
                      </p>
                    </div>
                    <div className="tags justify-content-between align-items-center">
                      <div className="tag px-3 pt-1 bg_p_dim rounded text-muted">
                        <i
                          className={
                            item.is_approved
                              ? "las la-check f15"
                              : "las la-sync f15"
                          }
                        ></i>

                        <span className="count">
                          {item.is_approved ? " Approved" : " Pending"}
                        </span>
                      </div>
                      <div className="gotolab">
                        {item.is_approved && (
                          <div className="d-flex align-items-center justify-content-end ">
                            <button
                              className="btn btn_switch bg-success text-white f14 d-flex align-items-center"
                              onClick={() => onLabChoose(item.slug)}
                            >
                              <div className="label pr-2">Go to Lab</div>
                              <i className="las la-arrow-right"></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {testStatus === "success" && (
          <div className="recentActivities  mt-3">
            <div className="subtitle d-flex align-items-center justify-content-between">
              <div className="left">
                <div className="text-muted f14 fw700">Recent Test Requests</div>
              </div>
              <div className="right">
                <Link href="/user/request">
                  <a className="fw700 d-flex align-items-center">
                    <div className="label">See All ({testData.count})</div>{" "}
                    <i className="las la-arrow-right ml-2 f18 text_p"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="recentDash my-3">
              {testData.results.slice(0, 4).map((item, index) => (
                <div key={index}>
                  <div className="item box counterBox bg_w p rounded">
                    <div className="title fw600  d-flex align-items-center justify-content-between">
                      <div className="label text-muted f16">
                        {" "}
                        <i className="las la-flask f18 text_p bg_p_dim p-1 rounded"></i>
                        {item?.lab?.name ?? "N/A"}
                      </div>
                      <div className="category fw500 text-muted f12  text_p  rounded">
                        {" "}
                        <i className="las la-tag f16 mr-0"></i>
                        Rs. {item.final_amount}
                      </div>
                    </div>
                    <p className="text-muted py-2">
                      {item.data?.tests.length ? (
                        <div>
                          {item.data.tests.map((test, ind) => (
                            <span className="d-inline-block mr-1" key={ind}>
                              {test}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div>
                          {item.data.packages.map((pack, ind) => (
                            <span className="d-inline-block mr-1" key={ind}>
                              {pack}
                            </span>
                          ))}
                        </div>
                      )}
                    </p>
                    <div className="tags justify-content-between">
                      <li className="tag bg_p_dim rounded text-muted">
                        Status: <b>{item.status}</b>
                      </li>
                      {/* <li className="tag bg_p_dim rounded bg-success text-white">
                        Download Report
                      </li> */}
                    </div>
                    {/* <div className="labDetails bg_p_dim d-flex align-items-center justify-content-between rounded p text-muted">
                      <div className="labnamewrapper w-100">
                        <div className="labIconname d-flex">
                          <div className="icon px-1 bg_w rounded d-flex align-items-center justify-content-center ">
                            <i className="las la-hospital text_p mr-0"></i>
                          </div>
                          <div className="labname pl-2">
                            <h3 className="name f14 fw500 text-muted">
                              {" "}
                              <a href="../lab/lab-profile-public-view.html">
                                Pokhara Reference Laboratory
                              </a>
                            </h3>
                            <p className="text-muted f12 fw400">
                              Shantinagar, Pokhara
                            </p>
                          </div>
                        </div>

                        <div className="meta w-100 mt-2 d-flex gap">
                          <div className="status bg_w f10 text-muted rounded px-2 py-1 d-flex align-items-center">
                            <i className="las la-clock f16"></i> 6 hr. ago
                          </div>
                          <div className="status bg_w f10 text-muted rounded px-2 py-1 d-flex align-items-center">
                            <i className="las la-wallet f16"></i> Paid
                          </div>
                          <div className="status bg_w f10 text-muted rounded px-2 py-1 d-flex align-items-center">
                            <i className="lab la-font-awesome-flag f16"></i>
                            Collector Assigned
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* <div className="recentActivities  mt-5">
          <div className="subtitle d-flex align-items-center justify-content-between">
            <div className="left">
              <div className="text-muted f14 fw700">Recently Purchased</div>
            </div>

            <div className="right">
              <a
                href="product-orders.html"
                className="fw700 d-flex align-items-center"
              >
                <div className="label">See All (202)</div>{" "}
                <i className="las la-arrow-right ml-2 f18 text_p"></i>
              </a>
            </div>
          </div>

          <div className="posts mt-3">
            <article className="article bg_w rounded p">
              <div className="productDetails d-flex align-items-center">
                <div className="imagearea flex3">
                  <img
                    src="./media/taking-blood.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="flex6 pl-3">
                  <h3 className="name fw500 f16  mb-2 text_p d-flex align-items-center justify-content-between">
                    <a href="single-product.html">Product Name 1</a>
                    <p className="text-muted f14">
                      <i className="las la-wallet f16 text_p"></i> Rs. 2300
                    </p>
                  </h3>
                  <ul className="meta d-inline-flex gap flex-column">
                    <li className="rounded py-1 f12 text-muted mr-0">
                      <i className="las la-tags f16 text_p"></i>
                      Hygenic, Eye Care
                    </li>

                    <li className="">
                      <ul className="d-flex gap">
                        <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                          <i className="las la-truck f16 text_p"></i>
                          Shipping
                        </li>
                        <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                          <i className="las la-clock f16 text_p"></i>7 Days Ago
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="article bg_w rounded p">
              <div className="productDetails d-flex align-items-center">
                <div className="imagearea flex3">
                  <img
                    src="./media/taking-blood.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="flex6 pl-3">
                  <h3 className="name fw500 f16  mb-2 text_p d-flex align-items-center justify-content-between">
                    <a href="single-product.html">Product Name 1</a>
                    <p className="text-muted f14">
                      <i className="las la-wallet f16 text_p"></i> Rs. 2300
                    </p>
                  </h3>
                  <ul className="meta d-inline-flex gap flex-column">
                    <li className="rounded py-1 f12 text-muted mr-0">
                      <i className="las la-tags f16 text_p"></i>
                      Hygenic, Eye Care
                    </li>

                    <li className="">
                      <ul className="d-flex gap">
                        <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                          <i className="las la-truck f16 text_p"></i>
                          Shipping
                        </li>
                        <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                          <i className="las la-clock f16 text_p"></i>7 Days Ago
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div> */}

        {/* <div className="recentActivities  mt-5">
          <div className="subtitle d-flex align-items-center justify-content-between">
            <div className="left">
              <div className="text-muted f14 fw700">Recent Health Queries</div>
            </div>
            <ul className="d-flex align-items-center gap">
              <li>
                <a
                  href="listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
            </ul>
            <div className="right">
              <a
                href="listing.html"
                className="fw700 d-flex align-items-center"
              >
                <div className="label">See All (202)</div>{" "}
                <i className="las la-arrow-right ml-2 f18 text_p"></i>
              </a>
            </div>
          </div>

          <div className="posts mt-3">
            <article className="article bg_w rounded p">
              <div className="name fw600 f16 mb-3 text_p">
                <a href="single-query.html">
                  Hey Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa eos voluptas qui laborum?
                </a>
              </div>
              <ul className="meta d-flex gap mt-2">
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-clock f16 text_p"></i>6 Min Ago
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-user f16 text_p"></i>Hari Bhusal
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-tags f16 text_p"></i>Eye Problem
                </li>
              </ul>
              <div className="articleDetail">
                <div className="articlefooter mt-3 d-flex align-items-center justify-content-between">
                  <a
                    href="single-query.html"
                    className="readmore m-0 f14 fw700 text_p btn_p_b py-2 px-3 d-inline-block rounded"
                  >
                    7 Answers <i className="las la-arrow-right f16"></i>
                  </a>
                </div>
              </div>
            </article>
            <article className="article bg_w rounded p">
              <div className="name fw600 f16 mb-3 text_p">
                <a href="single-query.html">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  eos voluptas qui laborum?
                </a>
              </div>
              <ul className="meta d-flex gap mt-2">
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-clock f16 text_p"></i>6 Min Ago
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-user f16 text_p"></i>Hari Bhusal
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-tags f16 text_p"></i>Eye Problem
                </li>
              </ul>
              <div className="articleDetail">
                <div className="articlefooter mt-3 d-flex align-items-center justify-content-between">
                  <a
                    href="single-query.html"
                    className="readmore m-0 f14 fw700 text_p btn_p_b py-2 px-3 d-inline-block rounded"
                  >
                    7 Answers <i className="las la-arrow-right f16"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div> */}

        {/* <div className="recentActivities  mt-5">
          <div className="subtitle d-flex align-items-center justify-content-between">
            <div className="left">
              <div className="text-muted f14 fw700">Recent Articles</div>
            </div>
            <ul className="d-flex align-items-center gap">
              <li>
                <a
                  href="blog-listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="blog-listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="blog-listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
              <li>
                <a
                  href="blog-listing.html"
                  className="bg_w rounded px-2 py-1 text_p f12"
                >
                  Eye Problem
                </a>
              </li>
            </ul>
            <div className="right">
              <a
                href="blog-listing.html"
                className="fw700 d-flex align-items-center"
              >
                <div className="label">See All (202)</div>{" "}
                <i className="las la-arrow-right ml-2 f18 text_p"></i>
              </a>
            </div>
          </div>

          <div className="posts mt-3">
            <article className="article bg_w rounded p">
              <div className="name fw600 mb-3 f16 text_p">
                <a href="single-blog.html">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  eos voluptas qui laborum?
                </a>
              </div>
              <ul className="meta d-flex gap mt-2">
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-clock f16 text_p"></i>6 Min Ago
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-user f16 text_p"></i>Hari Bhusal
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-tags f16 text_p"></i>Eye Problem
                </li>
              </ul>
              <figure className="my-3">
                <img
                  src="./media/taking-blood.png"
                  alt=""
                  className="img-fluid rounded"
                />
              </figure>
              <div className="articleDetail">
                <p className="text-muted f14">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  ut. Facilis voluptate nostrum non voluptatum facere tempora
                  atque enim ab quidem, fugit aperiam distinctio dolore nam
                  laborum voluptas corrupti nemo!
                </p>
                <div className="articlefooter mt-3 d-flex align-items-center justify-content-between">
                  <a
                    href="single-blog.html"
                    className="readmore m-0 fw700 text_p btn_p_b py-2 px-3 d-inline-block rounded"
                  >
                    Read More <i className="las la-arrow-right f16"></i>
                  </a>
                </div>
              </div>
            </article>
            <article className="article bg_w rounded p">
              <div className="name fw600 mb-3 f16 text_p">
                <a href="single-blog.html">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  eos voluptas qui laborum?
                </a>
              </div>
              <ul className="meta d-flex gap mt-2">
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-clock f16 text_p"></i>6 Min Ago
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-user f16 text_p"></i>Hari Bhusal
                </li>
                <li className="shw bg_p_dim rounded px-2 py-1 f12 text-muted mr-0">
                  <i className="las la-tags f16 text_p"></i>Eye Problem
                </li>
              </ul>
              <figure className="my-3">
                <img
                  src="./media/taking-blood.png"
                  alt=""
                  className="img-fluid rounded"
                />
              </figure>
              <div className="articleDetail">
                <p className="text-muted f14">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                  ut. Facilis voluptate nostrum non voluptatum facere tempora
                  atque enim ab quidem, fugit aperiam distinctio dolore nam
                  laborum voluptas corrupti nemo!
                </p>
                <div className="articlefooter mt-3 d-flex align-items-center justify-content-between">
                  <a
                    href="single-blog.html "
                    className="readmore m-0 fw700 text_p btn_p_b py-2 px-3 d-inline-block rounded"
                  >
                    Read More <i className="las la-arrow-right f16"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div> */}
      </div>
      <div
        className="modal fade"
        id="appointmentmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Doctor Appointment
              </h5>
              <button
                type="button"
                className="close f12"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="doctor-profile d-flex align-items-center">
                <img
                  src="./media/7771683223d86b237a3304d6f32828b9.svg"
                  alt=""
                  className="img-fluid flex1"
                />
                <div className="details text-wrapper flex4 px-3">
                  <h3 className="title name mb-0">Dr. Rakesh Maharjan</h3>
                  <p className="text-muted">Physician, MBBS (TU)</p>
                  <p>
                    <small>
                      He is one of the most experienced doctor with merohealth
                      and has been working as seior physician at Bir Hospital,
                      Kathmandu, Nepal
                    </small>
                  </p>
                </div>
                <div className="buttonwraper mt-3">
                  <a href="#">
                    <button
                      type="button"
                      className="btn btn_p btn-sm px-2 py-1"
                    >
                      View Profile
                    </button>
                  </a>
                </div>
              </div>
              <div className="appointmentinfo my-3 text-wrapper">
                <hr />
                <div className="title text_bold">Appointment Info</div>
                <hr />
                <div className="info py-2 d-flex gap">
                  <div className="label flex4">Appointment Date :</div>
                  <div className="value flex6">6th June 2021</div>
                </div>
                <div className="info py-2 d-flex gap">
                  <div className="label flex4">Appointment Time :</div>
                  <div className="value flex6">06:36 PM</div>
                </div>
                <div className="info py-2 d-flex gap">
                  <div className="label flex4">Appointment Note :</div>
                  <div className="value flex6">Khali Pet ma aaunu hola.</div>
                </div>
                <div className="info py-2 d-flex gap">
                  <div className="label flex4">Appointment Status :</div>
                  <div className="value flex6">Appointment Granted</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary f12"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade p-3"
        id="forwardmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header d-flex gap align-items-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Forward Report
              </h5>
              <form action="#" className="d-flex gap">
                <input
                  type="text"
                  className="form-control py-2 mb-0"
                  placeholder="Search..."
                />
                <button type="submit" className="btn px-3 py-2 bg_p_dim">
                  Forward
                </button>
              </form>
            </div>
            <div className="modal-body text-wrapper">
              <div className="row p-3">
                <div className="col-sm-6">
                  <div className="heading d-flex gap justify-content-between">
                    <h6 className="mb-3 text-muted">
                      <strong>Nearest Lab</strong>
                    </h6>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <div className="heading d-flex gap justify-content-between">
                    <h6 className="mb-3 text-muted">
                      <strong>Recent Doctors</strong>
                    </h6>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Dr. Mukesh Chaudhary</strong>
                        </div>
                        <p className="text-muted">Physician, MBBS (TU)</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="labinfo">
                        <div className="text">
                          <strong>Abs Laboradoty</strong>
                        </div>
                        <p className="text-muted">Shantinagar, Pokhara</p>
                      </div>
                      <button className="btn btn_forward py-2 px-3 bg_p_dim">
                        <i className="las la-share"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary f12"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default withAuth(UserDashboard);
