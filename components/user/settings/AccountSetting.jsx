import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { userActions } from "../../../services/user/action";
import { CHANGE_PASS_RESET } from "../../../services/user/types";
import ToastMessage from "../../Message";

const AccountSetting = ({ dispatch, user }) => {
  const { data, loading, status, error } = user.changePassword;

  // show toast message
  const [show, setShow] = useState(false);

  const password = useRef({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  password.current = watch("password", "");

  const onChangePassword = (value) => {
    const formdata = {
      current_password: value.current_password,
      password1: value.password,
      password2: value.confirmPassword,
    };
    dispatch(userActions.changePassword(formdata));
  };

  useEffect(() => {
    if (status === "success") {
      setShow({
        bg: "success",
        message: "Password Changed Successfully!",
      });
      setTimeout(() => {
        reset();
        dispatch({ type: CHANGE_PASS_RESET });
        setShow(false);
      }, 1000);
    }
    if (status === "failed") {
      setShow({
        bg: "danger",
        message: "Validation Error",
      });
      setTimeout(() => {
        setShow(false);
      }, 1000);
    }
  }, [dispatch, reset, status]);

  return (
    <div className="tab-pane fade show active" id="general">
      {show && (
        <ToastMessage
          bg={show.bg}
          message={show.message}
          show={show}
          setShow={setShow}
        />
      )}
      <div className="textwrapper">
        <div className="title f16 text_p">Account Settings</div>
      </div>
      <div className="formwrapper">
        <form onSubmit={handleSubmit(onChangePassword)}>
          {/* <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  <p className="">Username</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col-sm-12">
              <div className="textwrapper">
                <p className="f14 fw700 mb-2">Change Password</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  <p className="">Current Password</p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="curpass"
                  placeholder="Current Password"
                  {...register("current_password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Current password is required",
                    },
                  })}
                />
                {errors.current_password && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {errors.current_password.message}
                    </small>
                  </i>
                )}
                {status === "failed" && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {error.current_password ? error.current_password[0] : ""}
                      {error.non_field_errors ? error.non_field_errors[0] : ""}
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  <p className="">New Password</p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="curpass"
                  placeholder="New Password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {errors.password?.message}
                    </small>
                  </i>
                )}
                {status === "failed" && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {error.password1 ? error.password1.password : ""}
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  <p className="">Confirm Password</p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newpass1"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {errors.confirmPassword.message}
                    </small>
                  </i>
                )}
                {status === "failed" && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      {error.password2 ? error.password2.password : ""}
                    </small>
                  </i>
                )}
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div className="form-group">
                <label>
                  <p className="">Confirm Password</p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="conpass"
                  placeholder="Confirm Password"
                />
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-sm-9">
              <div className="form-group">
                <label>
                  <p className="">Add Secondary Email</p>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="veremail"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="col-sm-3 d-flex align-items-end">
              <div className="form-group w-100">
                <button className="btn btn_p btn-sm btn_otpCode btn-block">
                  Add and Verify
                </button>
              </div>
            </div>
          </div> */}
          <div className="otpcodewrapper hide">
            <div className="row">
              <div className="col-sm-6">
                <p className="text-muted f14 mb-0">
                  You will receive an email with OTP Code, Please provide us to
                  verify your account
                </p>
                <div className="form-group mt-3">
                  <label>OTP CODE</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="OTP Code"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button type="submit" className="btn btn_p" disabled={loading}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
