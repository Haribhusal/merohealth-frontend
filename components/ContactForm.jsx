import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userActions } from "../services/user/action";
import { PAYMENT_RESET } from "../services/user/types";

const ContactForm = ({ status, data, dispatch, user }) => {
  const router = useRouter();

  const { data: postData, loading, status: postStatus } = user.postPayment;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === "success") {
      setValue("full_name", data.full_name);
      setValue("client_address", data.client_address?.full_address);
      setValue("phone_number", data.phone_number);
      setValue("email", data.email);
    }
  }, [data, setValue, status]);

  const onSubmitPay = (val) => {
    const formData = {
      patient_name: val.full_name,
      patient_phone_number: val.phone_number,
      patient_message: val.message,
      patient_email: val.email,
      patient_address: val.client_address,
    };
    dispatch(userActions.postPayment(formData));
  };

  useEffect(() => {
    if (postStatus === "success") {
      dispatch({ type: PAYMENT_RESET });
      router.push("/user/request");
    }
  }, [dispatch, postStatus, router]);

  return (
    <div className="addressdata my-3">
      <form onSubmit={handleSubmit(onSubmitPay)}>
        <div className="form-group editableFormGroup">
          <label className="d-flex justify-content-between">
            <div className="text">
              Patient Name <span className="text-danger">*</span>{" "}
            </div>
          </label>

          <input
            style={{ display: "inline-block" }}
            type="text"
            className="form-control eidtableFormInput"
            placeholder="Enter Patient Name"
            {...register("full_name", { required: true })}
          />
          {errors.full_name && (
            <i className="mb-3">
              <small className="text-danger">
                Please enter patient full name.
              </small>
            </i>
          )}
        </div>
        <div className="form-group editableFormGroup">
          <label className="d-flex justify-content-between">
            <div className="text">
              Sample Collection Address <span className="text-danger">*</span>
            </div>
          </label>

          <textarea
            style={{ display: "inline-block" }}
            type="text"
            rows={2}
            className="form-control eidtableFormInput "
            placeholder="Your Address"
            {...register("client_address", { required: true })}
          ></textarea>
          {/* <input
            style={{ display: "inline-block" }}
            type="text"
            className="form-control eidtableFormInput"
            placeholder="Your Address"
            {...register("client_address", { required: true })}
          /> */}
          {errors.client_address && (
            <i className="mb-3">
              <small className="text-danger">Please enter the address.</small>
            </i>
          )}
        </div>
        <div className="form-group editableFormGroup">
          <label className="d-flex justify-content-between">
            <div className="text">
              Phone Number <span className="text-danger">*</span>
            </div>
          </label>

          <input
            style={{ display: "inline-block" }}
            type="number"
            className="form-control eidtableFormInput"
            placeholder="Your Contact Number"
            {...register("phone_number", { required: true })}
          />

          {errors.phone_number && (
            <i className="mb-3">
              <small className="text-danger">
                Please enter the phone number.
              </small>
            </i>
          )}
        </div>
        <div className="form-group editableFormGroup">
          <label className="d-flex justify-content-between">
            <div className="text">
              Email Address <span className="text-danger">*</span>
            </div>
          </label>

          <input
            style={{ display: "inline-block" }}
            type="email"
            className="form-control eidtableFormInput"
            placeholder="Your Email Address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <i className="mb-3">
              <small className="text-danger">Please enter your email.</small>
            </i>
          )}
        </div>
        <div className="form-group editableFormGroup">
          <label className="d-flex justify-content-between">
            <div className="text">Any Additional Message</div>
          </label>

          <textarea
            style={{ display: "inline-block" }}
            type="text"
            rows={3}
            className="form-control eidtableFormInput "
            placeholder="Your message"
            {...register("message")}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn_p btn-block"
            disabled={loading}
          >
            <i className="las la-wallet me-3"></i> Place test request to Lab
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
