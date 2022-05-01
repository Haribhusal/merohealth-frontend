/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ToastMessage from "../components/Message";
import { userActions } from "../services/user/action";
import { FORGET_PASS_RESET } from "../services/user/types";

// TODO: Forget Password
const ForgetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);

  const { data, loading, status, error } = user.forgetPassword;

  const onSubmitLogin = (values) => {
    const formData = {
      user: values.email,
    };
    dispatch(userActions.forgetPassword(formData));
  };

  useEffect(() => {
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: FORGET_PASS_RESET });
        // router.push("/user/dashboard");
      }, 1000);
    }
  }, [dispatch, router, status]);

  return (
    <main>
      {show && (
        <ToastMessage
          show={show}
          bg="success"
          message="Email Sent Successfully!"
        />
      )}
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 bg_w p-5 loginformwrapper shadow rounded d-flex align-items-center">
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
                  <div className="col-sm-6"></div>
                </div>

                <br />
                <div className="text-wrapper">
                  <h3 className="heading my-3">Forgot Password?</h3>
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
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
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

                  <div className="row mt-3">
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

                  <div className="row mt-3">
                    <div className="col-sm-12">
                      <Link href="/login">
                        <a className="d-flex gap align-items-center">
                          <i className="las la-long-arrow-alt-left"></i>
                          Back to Login
                        </a>
                      </Link>
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
                    <h2 className="heading mb-3 f40">Do you know?</h2>
                    <p className="text">
                      80% of the time, people don’t know what they want until
                      they do.
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

export default ForgetPassword;
