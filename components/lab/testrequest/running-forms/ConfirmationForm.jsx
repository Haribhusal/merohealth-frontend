import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { labActions } from "../../../../services/lab/action";
import { CONFIRM_RESET } from "../../../../services/lab/types";
import ToastMessage from "../../../Message";
// import ToastMessage from "../../../Message";

const ConfirmationForm = ({
  dispatch,
  lab,
  selectedRunning,
  setIsOpen,
  setSelectedRunning,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);

  const {
    data: confirmData,
    loading: confirmLoading,
    status: confirmStatus,
  } = lab.getConfirmData;

  // confirm put data
  const { status, loading } = lab.confirmData;

  // when confirmed is submitted
  const onConfirmSubmit = (val) => {
    const formdata = {
      collected_samples: Array.isArray(val.samples)
        ? val.samples
        : [val.samples],
      payment_status: val.payment_status ? "Verified" : "Pending",
      time_estimation: val.time_estimation,
    };
    dispatch(labActions.confirmData(selectedRunning, formdata));
  };

  useEffect(() => {
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: CONFIRM_RESET });
        dispatch(labActions.getRunningTest());
        dispatch(labActions.getRunningTestDetail(selectedRunning));
        dispatch(labActions.getConfirmData(selectedRunning));
        setIsOpen(3);
        setSelectedRunning(selectedRunning);
      }, 1000);
    }
  }, [status, dispatch, selectedRunning, setIsOpen, setSelectedRunning]);

  useEffect(() => {
    if (confirmStatus === "success") {
      if (!!confirmData.collected_samples.length) {
        setValue(
          "samples",
          confirmData.collected_samples.map((item) => item.slug)
        );
      }
      setValue(
        "payment_status",
        confirmData.payment_status === "Verified" ? true : false
      );
      setValue("time_estimation", confirmData.time_estimation);
    }
  }, [confirmData, confirmStatus, setValue]);

  return (
    <form onSubmit={handleSubmit(onConfirmSubmit)} className="confirmation">
      <ToastMessage show={show} bg="success" message="Confirmed" />
      {confirmLoading && "Loading..."}
      {confirmStatus === "success" && (
        <div className="row">
          <div className="col-sm-12 ">
            <div className="form-group mb-0">
              <label>Collected Samples</label>
            </div>
            <div className="samplestotale">
              {confirmData.samples.map((sample, index) => (
                <div
                  key={index}
                  className="form-group d-flex align-items-center"
                >
                  {/* when uncheckd doesn't go  */}
                  <input
                    type="checkbox"
                    defaultValue={sample.slug}
                    id={sample.slug + "1"}
                    {...register("samples", {
                      required: true,
                    })}
                  />
                  <label htmlFor={sample.slug + "1"} className="mb-0 ml-2">
                    {sample.name}
                  </label>
                </div>
              ))}
            </div>

            {errors.samples && (
              <i className="mb-3 d-block">
                <small className="text-danger">Please select samples</small>
              </i>
            )}
          </div>
          <div className="col-sm-12">
            <div className="form-group px-3 py-2 rounded bg_p_dim d-flex gap align-items-center">
              <input
                type="checkbox"
                id="receivedPayment"
                {...register("payment_status")}
              />
              <label
                htmlFor="receivedPayment"
                className="mb-0 d-flex w-100 justify-content-between"
              >
                <div className="label">Received Payment</div>
                <div className="due">
                  Payment : Rs. {confirmData.final_amount}
                </div>
              </label>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="timeestimationmessage">
                Date and Time estimation
              </label>
              <div className="radios d-flex gap">
                <div className="form-group d-flex gap align-items-center">
                  <input
                    type="radio"
                    id="timeslot1"
                    name="timeslot"
                    defaultValue="5 Hours"
                    {...register("time_estimation", { register: true })}
                  />
                  <label
                    htmlFor="timeslot1"
                    className="mb-0"
                    onClick={() => setOpenMsg(false)}
                  >
                    5 Hours
                  </label>
                </div>
                <div className="form-group d-flex gap align-items-center">
                  <input
                    type="radio"
                    id="slot2"
                    name="timeslot"
                    defaultValue="7 Hours"
                    {...register("time_estimation", { register: true })}
                  />
                  <label
                    htmlFor="slot2"
                    className="mb-0"
                    onClick={() => setOpenMsg(false)}
                  >
                    7 Hours
                  </label>
                </div>
                <div className="form-group d-flex gap align-items-center">
                  <input
                    type="radio"
                    id="slot3"
                    name="timeslot"
                    defaultValue="10 Hours"
                    {...register("time_estimation", {
                      register: true,
                    })}
                  />
                  <label
                    htmlFor="slot3"
                    className="mb-0"
                    onClick={() => setOpenMsg(false)}
                  >
                    10 Hours
                  </label>
                </div>
                {/* <div className="form-group otherSlotTrigger d-flex gap align-items-center">
                  <label
                    htmlFor=""
                    className="mb-0"
                    onClick={() => setOpenMsg(true)}
                  >
                    Custom Message
                  </label>
                </div> */}
              </div>
              {/* {openMsg && (
                <div className="customMessage d-block">
                  <div className="formwrapper d-flex gap align-items-start">
                    <textarea
                      rows="3"
                      className="form-control flex8"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                </div>
              )} */}
              {errors.time_estimation && (
                <i className="mb-3 d-block">
                  <small className="text-danger">
                    Please select time estimation
                  </small>
                </i>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              {loading ? (
                <button
                  className="btn bg_p_dim text_p fw700"
                  disabled={loading}
                >
                  Loading...
                </button>
              ) : (
                <button
                  className="btn bg_p_dim text_p fw700"
                  // disabled={!!confirmData.collected_samples.length}
                >
                  {!!confirmData.collected_samples.length && (
                    <i className="las la-check f18"></i>
                  )}
                  {!!confirmData.collected_samples.length
                    ? " Confirmed"
                    : "Confirm"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ConfirmationForm;
