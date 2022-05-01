import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { labActions } from "../../../services/lab/action";
import { EDIT_PROFILEOVERVIEW_RESET } from "../../../services/lab/types";

const EditOverviewModal = ({ show, setShow, overviewData, dispatch, lab }) => {
  const { loading, status } = lab.editProfileOverview;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [featInput, setFeatInput] = useState("");
  const [features, setFeatures] = useState([]);
  const [alertSame, setAlertSame] = useState("");

  const onSubmitForm = (values) => {
    const formdata = {};
    if (features.length) {
      formdata = {
        ...values,
        key_features: { features: features },
      };
    } else {
      formdata = values;
    }
    dispatch(labActions.editProfileOverview(formdata));
  };

  // on adding features
  const onAddFeature = () => {
    if (!!features) {
      features.forEach((item) => {
        if (item.toLowerCase() === featInput.toLowerCase()) {
          setAlertSame("Already Added");
        } else {
          setFeatures([...features, featInput]);
          setFeatInput("");
          setAlertSame("");
        }
      });
    } else {
      setFeatures([featInput]);
      setAlertSame("");
      setFeatInput("");
    }
  };

  // on remove the feature
  const onRemoveFeature = (singleItem) => {
    const newFet = features.filter((item) => item !== singleItem);
    setFeatures(newFet);
  };

  useEffect(() => {
    setValue("overview", overviewData ? overviewData.overview : "");
    setFeatures(overviewData ? overviewData.key_features?.features : []);
  }, [overviewData, setValue]);

  useEffect(() => {
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: EDIT_PROFILEOVERVIEW_RESET });
        dispatch(labActions.getLabProfile());
      }, 1000);
    }
  }, [dispatch, setShow, status]);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      className="modal_overview"
      keyboard={false}
      size="lg"
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="modal-header">
          <h5 className="modal-title text_p f16" id="exampleModalLabel">
            Update Lab Overview
          </h5>
        </div>
        <div className="modal-body bg_p_dim px-4">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Lab Overview</label>
                <textarea
                  placeholder="Explain about your laboratory"
                  rows="5"
                  className="form-control"
                  {...register("overview", { required: true })}
                ></textarea>
                {errors.overview && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      Please enter the description.
                    </small>
                  </i>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Lab Key Features</label>
                <div className="addNew d-flex gap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Key Feature"
                    value={featInput}
                    onChange={(e) => setFeatInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn_p_b"
                    onClick={onAddFeature}
                  >
                    Add
                  </button>
                </div>
              </div>
              {alertSame && (
                <small className="text-danger mb-3 d-block">{alertSame}</small>
              )}
              <div className="keyfeatures">
                {!!features && (
                  <ul className="features">
                    {features.map((item, index) => (
                      <li
                        key={index}
                        className="feature d-flex align-items-center justify-content-between"
                      >
                        <div className="text">{item}</div>
                        <button
                          type="button"
                          className="btn btn_delete"
                          onClick={() => onRemoveFeature(item)}
                        >
                          <i className="las la-times"></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn btn_p_b"
            onClick={() => setShow(false)}
            disabled={loading}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn_p" disabled={loading}>
            {loading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
    // <div
    //   className="modal fade customModal modal_overview show"
    //   id="editOverview"
    // >
    //   <div className="modal-dialog modal-lg modal-dialog-lg modal-dialog-centered">
    //     <div className="modal-content">

    //     </div>
    //   </div>
    // </div>
  );
};

export default EditOverviewModal;
