/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ToastMessage from "../../../components/Message";
import { authActions } from "../../../services/auth/action";
import { NEW_PASS_RESET } from "../../../services/auth/types";
import Loading from "../../../components/Loading";

const PasswordReset = ({}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { uid, token } = router.query;

  const dispatch = useDispatch(null);
  const auth = useSelector((state) => state.auth);

  const {
    data: checkData,
    loading: checkLoading,
    status: checkStatus,
  } = auth.checkUidToken;
  const { loading, status, error } = auth.postNewPassword;

  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = (values) => {
    dispatch(authActions.postNewPassword(uid, token, values));
  };

  useEffect(() => {
    if (uid && token) {
      dispatch(authActions.checkUidToken(uid, token));
    }
  }, [dispatch, token, uid]);

  useEffect(() => {
    if (checkStatus === "failed") {
      router.push("/404");
    }
  }, [checkStatus, router]);

  useEffect(() => {
    // if login success then go to dashboard
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: NEW_PASS_RESET });
        router.push("/login");
      }, 1000);
    }
  }, [dispatch, router, status]);

  return (
    <main>
      {checkLoading && <Loading />}
      <section className="login">
        {show && (
          <ToastMessage
            show={show}
            bg="success"
            message="Password Reset Successfully"
          />
        )}
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4 bg_w p-5 loginformwrapper shadow rounded d-flex align-items-center">
              <div className="leftwrapper w-100">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="logowrapper">
                      <Link href="/">
                        <a>
                          <img
                            src="/media/logo.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6"></div>
                </div>

                <br />
                <div className="text-wrapper">
                  <h3 className="heading my-3">New Account Password</h3>
                  <p className="text-muted mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cum cumque inventore.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmitLogin)}
                  className="loginform needs-validation"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">NEW PASSWORD</label>
                        <div className="customPasswordShow">
                          <input
                            type={!showPassword ? "password" : "text"}
                            className="form-control"
                            placeholder="Enter Password"
                            {...register("password1", { required: true })}
                          />
                        </div>
                        {errors.password && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your password.
                            </small>
                          </i>
                        )}
                        {status === "failed" && (
                          <i className="mb-3">
                            <small className="text-danger">
                              {error.password1.password}
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">CONFIRM NEW PASSWORD</label>
                        <div className="customPasswordShow">
                          <input
                            type={!showPassword ? "password" : "text"}
                            className="form-control"
                            placeholder="Enter Password"
                            {...register("password2", { required: true })}
                          />
                          {!showPassword && (
                            <i
                              className="las la-eye"
                              onClick={() => setShowPassword(true)}
                            ></i>
                          )}
                          {showPassword && (
                            <i
                              className="las la-eye-slash"
                              onClick={() => setShowPassword(false)}
                            ></i>
                          )}
                        </div>
                        {errors.password && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your password.
                            </small>
                          </i>
                        )}
                        {status === "failed" && (
                          <i className="mb-3">
                            <small className="text-danger">
                              {error.password2.password}
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn_p"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="col-sm-8 p-5 loginbg rounded"
              style={{
                backgroundImage:
                  "url('http://pillwill.com/login/image/login-background1.png')",
              }}
            >
              <div className="top"></div>
              <div className="bgtextwrapper">
                <div className="owl-carousel">
                  <div className="item text-center">
                    <h2 className="heading mb-3 f40">
                      You can protect all, all can protect you.
                    </h2>
                    <p className="text">
                      COVID-19 does not seem to be a soon ending journey as the
                      new variants of the Coronavirus have been emerging.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bgtextwrapper">
                <div className="bottomtextlink gap d-flex justify-content-center">
                  <Link href="/terms">
                    <a className="">Terms and Conditions</a>
                  </Link>
                  <Link href="/privacy">
                    <a className="">Data Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PasswordReset;
