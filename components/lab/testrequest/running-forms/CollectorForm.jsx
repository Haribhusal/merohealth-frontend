import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { labActions } from "../../../../services/lab/action";
import { ASSIGN_COLLECTOR_RESET } from "../../../../services/lab/types";
import ToastMessage from "../../../Message";

const CollectorForm = ({
  dispatch,
  lab,
  selectedRunning,
  singleData,
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

  const {
    data: memberData,
    loading: memberLoading,
    status: memberStatus,
  } = lab.getLabMember;

  const {
    data: sampleData,
    loading: sampleLoading,
    status: sampleStatus,
  } = lab.getSamples;

  const {
    data: collData,
    loading: collLoading,
    status: collStatus,
  } = lab.assignCollector;

  // when assign collector is pressed
  const onAssignCollector = (val) => {
    dispatch(labActions.assignCollector(selectedRunning, val));
  };

  useEffect(() => {
    // get lab members
    dispatch(labActions.getLabMember());
  }, [dispatch]);

  useEffect(() => {
    if (collStatus === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: ASSIGN_COLLECTOR_RESET });
        dispatch(labActions.getSamples());
        dispatch(labActions.getRunningTest());
        dispatch(labActions.getRunningTestDetail(selectedRunning));
        dispatch(labActions.getConfirmData(selectedRunning));
        setIsOpen(2);
        setSelectedRunning(selectedRunning);
      }, 1000);
    }
  }, [collStatus, dispatch, selectedRunning, setIsOpen, setSelectedRunning]);

  useEffect(() => {
    if (singleData.collector !== null) {
      setValue("collector", singleData.collector.id);
      setValue(
        "samples",
        singleData.samples.map((item) => item.slug)
      );
      setValue("collection_date", singleData.collection_date);
      setValue("collection_time", singleData.collection_time);
    }
  }, [setValue, singleData]);

  return (
    <form onSubmit={handleSubmit(onAssignCollector)}>
      <ToastMessage show={show} bg="success" message="Collector Assigned" />
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="cname">
              Collector Name <span className="text-danger">*</span>
            </label>
            {memberStatus === "success" && (
              <select
                className="form-control"
                {...register("collector", { required: true })}
              >
                <option value="" disabled selected>
                  Choose Collector
                </option>
                {memberData.results.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.user_data.full_name}
                  </option>
                ))}
              </select>
            )}
            {errors.collector && (
              <i className="mb-3">
                <small className="text-danger">
                  Please select the collector
                </small>
              </i>
            )}
          </div>
        </div>
        <div className="col-sm-12 ">
          <div className="form-group mb-0">
            <label htmlFor="">
              Choose the type of samples <span className="text-danger">*</span>
            </label>
          </div>
          {sampleLoading && "Samples Loading...."}
          {sampleStatus === "success" && (
            <div className="samplestotale">
              {sampleData.results.map((sample, index) => (
                <div
                  key={(sample, index)}
                  className="form-group d-flex align-items-center"
                >
                  <input
                    type="checkbox"
                    defaultValue={sample.slug}
                    id={sample.slug}
                    {...register("samples", {
                      required: true,
                    })}
                  />
                  <label htmlFor={sample.slug} className="mb-0 ml-2">
                    {sample.name}
                  </label>
                </div>
              ))}
            </div>
          )}
          {errors.samples && (
            <i className="mb-3">
              <small className="text-danger">Please select samples</small>
            </i>
          )}
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="">
              Sample Collection Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              {...register("collection_date", {
                required: true,
              })}
            />
            {errors.collection_date && (
              <i className="mb-3">
                <small className="text-danger">Please select the date</small>
              </i>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="">
              Sample Collection Time <span className="text-danger">*</span>
            </label>
            <input
              type="time"
              className="form-control"
              {...register("collection_time", {
                required: true,
              })}
            />
            {errors.collection_time && (
              <i className="mb-3">
                <small className="text-danger">Please select the time</small>
              </i>
            )}
          </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-between gap">
          <button
            type="submit"
            className="btn bg_p_dim text_p fw700 "
            disabled={collLoading}
          >
            <i className="las la-user f18 "></i>
            {collLoading ? "Loading..." : "Assign Collector"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CollectorForm;
