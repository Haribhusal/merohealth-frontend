/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../services/auth/action";
import { LOGIN_USER_RESET } from "../services/auth/types";
import ToastMessage from "../components/Message";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch(null);
  const auth = useSelector((state) => state.auth);

  const { data, loading, status, error } = auth.login;

  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = (values) => {
    dispatch(authActions.login(values));
  };

  // if access token is found, redirect to dashboard
  // useEffect(() => {
  //   const token = appUtils.getAppToken();
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (token) {
  //     router.push("/user/dashboard");
  //     // if (user.is_lab_member) {
  //     //   router.push("/lab/dashboard");
  //     // } else {
  //     // }
  //   }
  // }, [router]);

  useEffect(() => {
    // if login success then go to dashboard
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: LOGIN_USER_RESET });
        router.push("/user/dashboard");
      }, 1000);
    }
  }, [dispatch, router, status]);

  return (
    <main>
      <section className="login">
        <ToastMessage
          show={show}
          bg="success"
          message="Logged In Successfully"
        />
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4 bg_w p-5 loginformwrapper shadow rounded d-flex align-items-center">
              <div className="leftwrapper w-100">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="logowrapper mb-3">
                      <Link href="/">
                        <a>
                          <img
                            src="./media/logo.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
                    <div className="">
                      <div className="row">
                        <div className="col-sm-12 d-flex gap align-items-center justify-content-end">
                          <p className="mb-0">Login With</p>

                          <div className="group gap d-flex justify-content-between align-items-center">
                            <div className="options gap d-flex justify-content-between align-items-center">
                              <a href="#" className="btn bg_fb">
                                <i className="lab la-facebook-f"></i>
                              </a>

                              <a href="#" className="btn bg_g">
                                <i className="lab la-google"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                <br />
                <div className="text-wrapper">
                  <h3 className="heading">Log In to your account</h3>
                  <p className="text-muted mb-3">Mero Health welcomes you</p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmitLogin)}
                  className="loginform needs-validation"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email Address"
                          {...register("email", { required: true })}
                        />

                        {errors.email && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your email.
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <div className="customPasswordShow">
                          <input
                            name="password"
                            type={!showPassword ? "password" : "text"}
                            className="form-control"
                            placeholder="Enter Your Password"
                            {...register("password", { required: true })}
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
                          <i className="mb-3 d-block">
                            <small className="text-danger">
                              Please enter your password.
                            </small>
                          </i>
                        )}
                        {!!error?.detail && (
                          <i className="mb-3 d-block">
                            <small className="text-danger">
                              {error.detail}
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* {!!errorResponse && (
                    <div className="py-3 d-block text-danger">
                      <i>{errorResponse}</i>
                    </div>
                  )} */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="group gap d-flex justify-content-between">
                        <div className="form-group d-flex gap align-items-center">
                          <input type="checkbox" name="rem" id="rem" />
                          <div className="remforget w-100 align-items-center d-flex justify-content-between">
                            <label htmlFor="rem" className="d-block mb-0">
                              Remember me
                            </label>
                            <Link href="/forgetpassword">
                              <a style={{ textDecoration: "underline" }}>
                                <small>Forgot Password?</small>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 d-flex justify-content-between">
                      <div className="">
                        <button
                          type="submit"
                          className="btn btn_p mt-3"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Log In"}
                        </button>
                      </div>
                      <div className="flex1 d-flex justify-content-end align-items-end ">
                        <small className="d-flex">
                          New User?
                          <Link href="/signup">
                            <a
                              className="d-flex gap align-items-center ml-2 text-underline"
                              style={{ textDecoration: "underline" }}
                            >
                              Create an Account
                            </a>
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="row"></div>
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

export default Login;
