/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import UserHeader from "../components/user/UserHeader";
import UserFooter from "../components/user/UserFooter";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../services/user/action";
import withAuth from "../config/withAuth";
import Link from "next/link";
import Loading from "../components/Loading";

import ContactForm from "../components/ContactForm";

const Payment = () => {
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.getProfile;

  const {
    data: cartData,
    loading: cartLoading,
    status: cartStatus,
  } = user.getCart;

  console.log(cartData);

  useEffect(() => {
    // user profile
    dispatch(userActions.getProfile());
    // get cart details
    dispatch(userActions.getCart());
  }, [dispatch]);

  return (
    <div classNameName="bg">
      <UserHeader />
      <main className="confirm_lab_request">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              {cartLoading && <Loading />}
              {cartStatus === "success" && (
                <div className="confirm_wrapper bg_w rounded  mb-5">
                  <div className="confirmHeading d-flex gap align-items-center">
                    <div className="confirm_icon">
                      <i className="lar la-check-circle"></i>
                    </div>
                    <div className="confirm_text">
                      <h3 className="title f20 text_p">
                        {cartData.results.length} tests selected from
                        <span className="mr-3">
                          {" "}
                          <Link
                            href={`/profile/${cartData.results[0].service.lab_test.lab.slug}`}
                          >
                            <a>
                              {cartData.results[0].service.lab_test.lab.name}
                            </a>
                          </Link>
                        </span>
                      </h3>
                      <p className="text-muted f14 mb-0">
                        Please verify your selection and pay the amount
                      </p>
                    </div>
                  </div>
                  <div className="requestedWrapper">
                    <div className="requested mb-3 ">
                      {/* <div className="requestedLab">
                        <div className="lab-head d-flex align-items-center justify-content-between">
                          <div className="textpart">
                            <h3 className="labname f16 mb-0">
                              <Link href="/profile/">
                                <a>Pokhara Reference Laboratory</a>
                              </Link>
                            </h3>
                            <p className="text-muted f14 mb-0">
                              Hospital Chowk, Pokhara
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <label className="f14 d-block mt-2 text-muted fw600">
                        Requested Tests &amp; Packages
                      </label>

                      <ul className="tests">
                        {cartData.results.map((item) => (
                          <li key={item}>
                            {item.service.lab_test && (
                              <div className="d-flex bg_p_dim px-3 py-2 rounded mb-1 align-items-center justify-content-between">
                                <div className="name d-flex flex3 align-items-start">

                                  <div className="labels">
                                    <div className="d-flex gap mb-2">
                                      <span>
                                        <i className="las la-flask" ></i>
                                      </span>
                                      <strong style={{ fontSize: "22px" }}>
                                        {item.service.lab_test.test.name}
                                      </strong>
                                    </div>
                                    <div className="text-muted d-flex gap">
                                      <span>
                                        <i className="las la-wallet"></i> {item.final_amount}
                                      </span>
                                      <span>
                                        <i className="las la-hospital"></i>
                                        {item.service.lab_test.lab.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/* <ul className="subItems d-flex flex6 flex-wrap">
                                  <li className="subitem">Platlet Count</li>
                                  <li className="subitem">WBC Count</li>
                                  <li className="subitem">RBC Count</li>
                                  <li className="subitem">
                                    Lipid Profile Test
                                  </li>
                                  <li className="subitem">Test 1</li>
                                </ul> */}

                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      <label className="f14 d-block mt-3 text-muted fw600">
                        Requested Packages
                      </label>
                      <ul className="packages">
                        {cartData.results.map((item) => (
                          <li key={item}>
                            {item.service.lab_package && (
                              <div className="package bg_p_dim d-flex mb-3 flex-column align-items-start gap">
                                <div className="packageText flex5">
                                  <h3 className="packageName f14 d-flex justify-content-between align-items-center">
                                    {item.service.lab_package.name}
                                    <div className="cost">
                                      <i className="las la-wallet"></i> Rs.{" "}
                                      {item.final_amount}
                                    </div>
                                  </h3>
                                  <p className="text-muted mb-0 f14">
                                    Included{" "}
                                    {item.service.lab_package.lab_tests.map(
                                      (ele) => (
                                        <span key={ele}>{ele.name} </span>
                                      )
                                    )}
                                  </p>
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      <label className="f14 d-block mt-3 text-muted fw600">
                        Pay Now
                      </label>
                      <div className="payBox">
                        <div className="payItem mb-2 align-items-center d-flex justify-content-between">
                          <div className="left">
                            <div className="label">Total Amount</div>
                          </div>
                          <div className="right">
                            <div className="value bg_p_dim text_p px-3 py-1 rounded">
                              <i className="las la-wallet f18"></i> Rs{" "}
                              {cartData.total.total_amount}
                            </div>
                          </div>
                        </div>
                        <div className="payItem mb-2 align-items-center d-flex justify-content-between">
                          <div className="left">
                            <div className="label">Discount</div>
                          </div>
                          <div className="right">
                            <div className="value bg_p_dim text_p px-3 py-1 rounded">
                              <i className="las la-percentage f18"></i>{" "}
                              {cartData.total.discount_amount}
                            </div>
                          </div>
                        </div>
                        <div className="payItem mb-2 align-items-center d-flex justify-content-between">
                          <div className="left">
                            <div className="label">Total Amount Now</div>
                          </div>
                          <div className="right">
                            <div className="value bg_p_dim text_p px-3 py-1 rounded">
                              <i className="las la-wallet f18"></i> Rs{" "}
                              {cartData.total.final_amount}
                            </div>
                          </div>
                        </div>
                        <div className="payItem mb-2 align-items-center d-flex justify-content-between">
                          <div className="left w-100 d-flex justify-content-between align-items-center">
                            <div className="label">Choose Payment Method</div>
                            <form className="payform">
                              <ul className="availablePaymentMethods">
                                {/* <li>
                                <label htmlFor="esewa">
                                  <input
                                    type="radio"
                                    id="esewa"
                                    name="paymentmethod"
                                  />
                                  <img
                                    src="https://laxmanbaralblog.com/wp-content/uploads/2020/11/eSewa-Nepal.png"
                                    alt=""
                                  />
                                </label>
                              </li>
                              <li>
                                <label htmlFor="khalti">
                                  <input
                                    type="radio"
                                    id="khalti"
                                    name="paymentmethod"
                                  />
                                  <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Khalti_Digital_Wallet_Logo.png/640px-Khalti_Digital_Wallet_Logo.png"
                                    alt=""
                                  />
                                </label>
                              </li>
                              <li>
                                <label htmlFor="connectIps">
                                  <input
                                    type="radio"
                                    id="connectIps"
                                    name="paymentmethod"
                                  />
                                  <img
                                    src="https://www.prabhulife.com/wp-content/uploads/2020/05/connectips-icon.png"
                                    alt=""
                                  />
                                </label>
                              </li> */}
                                <li>
                                  <label htmlFor="cashondelivery">
                                    <input
                                      type="radio"
                                      id="cashondelivery"
                                      name="paymentmethod"
                                      checked
                                    />
                                    <img
                                      src="https://w7.pngwing.com/pngs/510/354/png-transparent-food-indian-cuisine-bangladeshi-cuisine-devops-dubai-cash-on-delivery.png"
                                      alt=""
                                    />
                                  </label>
                                </li>
                              </ul>
                            </form>
                          </div>
                        </div>
                      </div>
                      <hr />

                      {/* <div className="finalaction">
                        <div className="cancelwrapper d-flex justify-content-between">
                          <div className="leftbuttons">
                            <button className="btn btn-sm cancel_trigger f12 p-0 ">
                              <i className="las la-times f16"></i>
                              Cancel
                            </button>
                          </div>
                          <div className="rightbuttons d-flex gap">
                            <button className="btn btn-sm bg_p_dim cancel_message f14">
                              {" "}
                              <i className="las la-comment f16"></i> Attachments
                            </button>
                          </div>
                        </div>
                        <div className="formwrapper hide bg_p_dim p rounded my-3">
                          <div className="my-3 d-flex flex-column gap align-items-start">
                            <div className="form-group">
                              <label htmlFor="cancelmessage">
                                Tell us why you want to cancel the test service
                              </label>
                              <textarea
                                name=""
                                id=""
                                cols=""
                                rows="3"
                                placeholder="Please tell us why you want to cancel test requests and packages"
                                className="form-control flex6"
                              ></textarea>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn_p">
                                Cancel Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="messageForm hide bg_p_dim p rounded my-3">
                          <div className=" d-flex flex-column gap align-items-start">
                            <div className="form-group">
                              <label className="text-muted ">
                                Attach Doctor Prescription Here
                              </label>

                              <input
                                type="file"
                                id="attchamnet"
                                className="form-control"
                                name="attchamnet"
                              />
                            </div>
                            <div className="form-group">
                              <label className="text-muted">
                                Send message to Lab Here
                              </label>
                              <textarea
                                name="message"
                                id="message"
                                cols=""
                                rows="3"
                                placeholder="Please type your message here"
                                className="form-control flex6"
                              ></textarea>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn_p">
                                Submit Attachment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-sm-4">
              <div className="bg_w mb-5 p rounded stickySidebar">
                <h4 className="text_p">Sending Health Request For</h4>
                <p className="text-muted">Please Provide Us the Patient Information</p>
                <hr />
                {loading && "Loading Contact Details...."}
                {status === "success" && (
                  <ContactForm
                    status={status}
                    data={data}
                    dispatch={dispatch}
                    user={user}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="spacer"></div>
      <UserFooter />
    </div>
  );
};

export default withAuth(Payment);
