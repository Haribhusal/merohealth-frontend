import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { authActions } from "../../../services/auth/action";
import { labActions } from "../../../services/lab/action";
import { EDIT_LABPROFILE_RESET } from "../../../services/lab/types";

const EditProfileModal = ({ show, setShow, profileData, dispatch, lab }) => {
  const auth = useSelector((state) => state.auth);

  const {
    data: stateData,
    loading: stateLoading,
    status: stateStatus,
  } = auth.stateList;
  const {
    data: districtData,
    loading: districtLoading,
    status: districtStatus,
  } = auth.districtList;
  const {
    data: muniData,
    loading: muniLoading,
    status: muniStatus,
  } = auth.municipalityList;

  // for lab
  const { loading, status } = lab.editLabProfile;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [stateVal, setStateVal] = useState("");
  const [districtVal, setDistrictVal] = useState("");
  const [muniVal, setMuniVal] = useState("");

  useEffect(() => {
    dispatch(authActions.stateList());
  }, [dispatch]);

  useEffect(() => {
    if (stateStatus === "success") {
      console.log(profileData.lab_address[0].province.slug);
      dispatch(
        authActions.districtList(profileData.lab_address[0].province.slug)
      );
    }
  }, [dispatch, profileData.lab_address, stateStatus]);

  useEffect(() => {
    if (districtStatus === "success") {
      console.log(profileData.lab_address[0].district.slug);
      dispatch(
        authActions.municipalityList(profileData.lab_address[0].district.slug)
      );
    }
  }, [dispatch, districtStatus, profileData.lab_address]);

  const onSubmitForm = (values) => {
    const formData = {
      name: values.name,
      licence_number: values.licence_number,
      pan_number: values.pan_number,
      telephone_number: values.telephone_number,
      mobile_number: values.mobile_number,
      lab_address: {
        province: values.province,
        district: values.district,
        municipality: values.municipality,
        ward_no: values.ward_no,
        tole: values.tole,
      },
    };
    dispatch(labActions.editLabProfile(formData));
  };

  useEffect(() => {
    setValue("name", profileData ? profileData.name : "");
    setValue("licence_number", profileData ? profileData.licence_number : "");
    setValue("pan_number", profileData ? profileData.pan_number : "");
    setValue("tole", profileData ? profileData.lab_address[0].tole : "");
    setValue("mobile_number", profileData ? profileData.mobile_number : "");
    setValue(
      "telephone_number",
      profileData ? profileData.telephone_number : ""
    );
    setValue("province", profileData.lab_address[0].province.slug);
    setValue("district", profileData.lab_address[0].district.slug);
    setValue("municipality", profileData.lab_address[0].municipality.slug);
    setValue("ward_no", profileData ? profileData.lab_address[0]?.ward_no : "");
  }, [profileData, setValue]);

  // get district on select state
  const onChangeState = (slug) => {
    dispatch(authActions.districtList(slug));
  };

  // get municipality on select district
  const onChangeDistrict = (slug) => {
    dispatch(authActions.municipalityList(slug));
  };

  useEffect(() => {
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: EDIT_LABPROFILE_RESET });
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
      centered
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="modal-header">
          <h5 className="modal-title text_p f16" id="exampleModalLabel">
            Update Brand Information
          </h5>
        </div>
        <div className="modal-body bg_p_dim p">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Lab Name</label>
                <input
                  type="text"
                  placeholder="Lab Name"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      Please enter the lab name.
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Licence Number</label>
                <input
                  type="text"
                  placeholder="2423A"
                  className="form-control"
                  disabled={profileData.is_approved}
                  {...register("licence_number", {
                    required: true,
                    maxLength: 5,
                    pattern: /^\d\d\d\d[a-zA-Z]+$/,
                  })}
                />
                {errors.licence_number && (
                  <i className="mb-3">
                    <small className="text-danger">
                      Your License number should be in format 4 numbers and 1
                      character, eg. 2423A 2423B, 2423C
                    </small>
                  </i>
                )}
                {profileData.is_approved && (
                  <i className="mb-3">
                    <small className="text-success">
                      You cannot edit license number as it is approved.
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Pan No / VAT Number</label>
                <input
                  type="text"
                  placeholder="Enter PAN/VAT Number"
                  className="form-control"
                  disabled={profileData.is_approved}
                  {...register("pan_number", {
                    required: true,
                  })}
                />
                {errors.pan_number && (
                  <i className="mb-3">
                    <small className="text-danger">
                      Please enter your PAN/VAT number.
                    </small>
                  </i>
                )}
                {profileData.is_approved && (
                  <i className="mb-3">
                    <small className="text-success">
                      You cannot edit PAN/VAT number as it is approved.
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  placeholder="9811111111"
                  className="form-control"
                  {...register("mobile_number", { required: true })}
                />
                {errors.mobile_number && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      Please enter the mobile number.
                    </small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Telephone Number</label>
                <input
                  type="text"
                  placeholder="9811111111"
                  className="form-control"
                  {...register("telephone_number", { required: true })}
                />
                {errors.tole && (
                  <i className="mb-3 d-block">
                    <small className="text-danger">
                      Please enter the telephone number.
                    </small>
                  </i>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            {stateStatus === "success" && (
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Provience <span className="text-danger">*</span>
                  </label>
                  <select
                    name="province"
                    className="form-control"
                    {...register("province", {
                      required: true,
                      onChange: (e) => {
                        onChangeState(e.target.value);
                      },
                    })}
                  >
                    <option value="" disabled selected>
                      Select State
                    </option>
                    {stateData.map((item, index) => (
                      <option key={index} value={item.slug}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.province && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please select any province
                      </small>
                    </i>
                  )}
                </div>
              </div>
            )}
            {districtStatus === "success" && (
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    District <span className="text-danger">*</span>
                  </label>
                  <select
                    name="district"
                    className="form-control"
                    {...register("district", {
                      required: true,
                      onChange: (e) => {
                        onChangeDistrict(e.target.value);
                      },
                    })}
                  >
                    <option value="" disabled selected>
                      Select District
                    </option>
                    {districtData.map((item, index) => (
                      <option key={index} value={item.slug}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.district && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please choose district
                      </small>
                    </i>
                  )}
                </div>
              </div>
            )}
            {muniStatus === "success" && (
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Rural Municipality/Municipality{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="municipality"
                    className="form-control"
                    {...register("municipality", { required: true })}
                  >
                    <option value="" disabled selected>
                      Select Municipality
                    </option>
                    {muniData.map((item, index) => (
                      <option key={index} value={item.slug}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.municipality && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please choose municipality.
                      </small>
                    </i>
                  )}
                </div>
              </div>
            )}
            <div className="col-sm-6">
              <div className="form-group">
                <label>Ward No</label>
                <select
                  name="ward_no"
                  className="form-control"
                  {...register("ward_no")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  Tole/Area/Appartment <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="tole"
                  className="form-control"
                  placeholder="Area Name/ Tole / Place Name"
                  {...register("tole", { required: true })}
                />
                {errors.tole && (
                  <i className="mb-3">
                    <small className="text-danger">
                      Please enter your Tole/Apartment/Area.
                    </small>
                  </i>
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
  );
};

export default EditProfileModal;
