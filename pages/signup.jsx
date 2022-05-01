/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../services/auth/action";

const Signup = () => {
  const router = useRouter();

  const dispatch = useDispatch(null);
  const auth = useSelector((state) => state.auth);
  const { data, loading, status, error } = auth.signUp;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onRegisterSubmit = (values) => {
    dispatch(authActions.signUp(values));
  };

  useEffect(() => {
    if (status === "success") {
      router.push("/user/profile");
    }
  }, [router, status]);

  return (
    <main>
      <section className="login">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-5 bg_w p-5 loginformwrapper shadow rounded d-flex align-items-center">
              <div className="leftwrapper w-100">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="logowrapper">
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
                          <p className="mb-0">Signup With</p>

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
                  <h3 className="heading my-3">Create an account</h3>
                  <p className="text-muted mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cum cumque inventore.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onRegisterSubmit)}
                  className="loginform needs-validation"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input
                          name="full_name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Full Name"
                          {...register("full_name", { required: true })}
                        />
                        {errors.full_name && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your full name.
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Contact Number</label>
                        <input
                          name="phone_number"
                          type="number"
                          className="form-control"
                          placeholder="Enter Your Contact Number"
                          {...register("phone_number", { required: true })}
                        />
                        {errors.phone_number && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your phone number.
                            </small>
                          </i>
                        )}
                        {!!error?.phone_number && (
                          <i className="mb-3">
                            <small className="text-danger">
                              {error.phone_number[0]}
                            </small>
                          </i>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email"
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
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <div className="customPasswordShow">
                          <input
                            type={!showPassword ? "password" : "text"}
                            className="form-control"
                            placeholder="Enter Password"
                            {...register("password1", {
                              required: true,
                              minLength: 8,
                            })}
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
                        {errors.password1 && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your password.
                            </small>
                          </i>
                        )}
                        {!!error?.password1?.password && (
                          <i className="mb-3">
                            <small className="text-danger">
                              {error.password1.password}
                            </small>
                          </i>
                        )}
                        {/* <div className="error_message text-danger">
                          <small>
                            Password must contain one uppercase letter and
                            special character like @,#,$,%
                          </small>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Confirm Password</label>
                        <div className="customPasswordShow">
                          <input
                            type={!showPassword ? "password" : "text"}
                            className="form-control"
                            placeholder="Confirm Password"
                            {...register("password2", {
                              required: true,
                              minLength: 8,
                            })}
                          />
                        </div>

                        {errors.password2 && (
                          <i className="mb-3">
                            <small className="text-danger">
                              Please enter your confirm password.
                            </small>
                          </i>
                        )}

                        {!!error?.password2?.password && (
                          <i className="mb-3">
                            <small className="text-danger">
                              {error.password2.password}
                            </small>
                          </i>
                        )}
                        {/* <div className="error_message text-danger">
                          <small>Passwords must match</small>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div>
                    {!!error?.non_field_errors && (
                      <i className="alert alert-danger d-block mb-3">
                        <small className="text-danger">
                          {error.non_field_errors[0]}
                        </small>
                      </i>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="group gap d-flex justify-content-between">
                        <div className="form-group d-flex gap align-items-center">
                          <input
                            type="checkbox"
                            name="rem"
                            id="rem"
                            {...register("read_terms", { required: true })}
                          />
                          <label htmlFor="rem" className="mb-0">
                            I have read the{" "}
                            <Link href="/terms">
                              <a style={{ textDecoration: "underline" }}>
                                Terms and Conditions
                              </a>
                            </Link>
                            , I agree and want to proceed.
                          </label>
                        </div>
                      </div>
                      {errors.read_terms && (
                        <i className="mb-3 d-block">
                          <small className="text-danger">
                            Please accept the terms and condition.
                          </small>
                        </i>
                      )}
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

                  <div className="row">
                    <div className="col-sm-12">
                      <Link href="/login">
                        <a className="d-flex gap align-items-center">
                          I already have an account and want to login now
                          <i className="las la-long-arrow-alt-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="col-sm-7 p-5 loginbg rounded"
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

export default Signup;
