/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { labActions } from "../../../services/lab/action";
import {
  DELETE_LABMEMBER_RESET,
  EDIT_LABMEMBER_RESET,
  POST_LABMEMBER_RESET,
} from "../../../services/lab/types";
import ToastMessage from "../../Message";
import DeleteMemberModal from "./DeleteMemberModal";

const AddMembers = ({
  lab,
  editData,
  isNewMember,
  dispatch,
  setIsNewMember,
  setEditData,
}) => {
  // show message
  const [show, setShow] = useState(false);
  // show set edit button
  const [isEditBtn, setIsEditBtn] = useState(false);
  // show delete modal
  const [showModal, setShowModal] = useState(false);
  // set image
  const [image, setImage] = useState(null);

  const { data, status, loading } = lab.getQualifications;
  const {
    status: addLabStatus,
    loading: addLabLoading,
    error,
  } = lab.addLabMember;

  const { status: editLabStatus, loading: editLabLoading } = lab.editLabMember;
  const { status: deleteMemberSt, loading: deleteLoading } =
    lab.deleteLabMember;

  // when member open edit
  const onMembEdit = () => {
    setIsEditBtn(!isEditBtn);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // when lab user press delete button
  const onDeleteLabTest = () => {
    setShowModal(true);
  };

  // when user press add new action button
  useEffect(() => {
    if (isNewMember == true) {
      setIsEditBtn(true);
    } else {
      setIsEditBtn(false);
    }
  }, [isNewMember]);

  // when user press one service
  useEffect(() => {
    if (!!editData) {
      setIsEditBtn(false);
    }
  }, [editData]);

  const onMemberSubmit = (val) => {
    const formdata = {};
    if (image != null) {
      formdata = {
        user_data: {
          full_name: val.full_name,
          phone_number: val.phone_number,
          email: val.email,
        },
        role: val.role,
        biography: val.biography,
        qualification: val.qualification,
        profile_picture: image,
      };
    } else {
      formdata = {
        user_data: {
          full_name: val.full_name,
          phone_number: val.phone_number,
          email: val.email,
        },
        role: val.role,
        biography: val.biography,
        qualification: val.qualification,
      };
    }
    if (editData) {
      dispatch(labActions.editLabMember(editData.id, formdata));
    } else {
      dispatch(labActions.addLabMember(formdata));
    }
  };

  const removeMember = () => {
    setShowModal(false);
    dispatch(labActions.deleteLabMember(editData.id));
  };

  useEffect(() => {
    if (editData != false) {
      setValue("full_name", editData.user_data.full_name);
      setValue("phone_number", editData.user_data.phone_number);
      setValue("email", editData.user_data.email);
      setValue("role", editData.role);
      setValue("biography", editData.biography);
      setValue("qualification", editData.qualification?.slug);
    } else {
      reset();
    }
  }, [editData, reset, setValue]);

  useEffect(() => {
    if (
      addLabStatus === "success" ||
      editLabStatus === "success" ||
      deleteMemberSt === "success"
    ) {
      dispatch(labActions.getLabMember());
    }

    if (addLabStatus === "success") {
      setShow({ bg: "success", message: "Member Added Successfully!" });
      setIsNewMember(false);
      setEditData(false);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: POST_LABMEMBER_RESET });
      }, 2000);
    }
    if (editLabStatus === "success") {
      setShow({ bg: "success", message: "Member Edited Successfully!" });
      setTimeout(() => {
        setShow(false);
        dispatch({ type: EDIT_LABMEMBER_RESET });
      }, 2000);
    }
  }, [
    addLabStatus,
    deleteMemberSt,
    dispatch,
    editLabStatus,
    setEditData,
    setIsNewMember,
  ]);

  useEffect(() => {
    if (deleteMemberSt === "success") {
      setShow({ bg: "danger", message: "Lab Deleted Successfully!" });
      setIsNewMember(false);
      setEditData(false);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: DELETE_LABMEMBER_RESET });
      }, 2000);
    }
  }, [deleteMemberSt, dispatch, setEditData, setIsNewMember]);

  return (
    <div className="col-sm-5 fullheight rightbar">
      {show && (
        <ToastMessage
          show={show}
          setShow={setShow}
          bg={show.bg}
          message={show.message}
        />
      )}
      {showModal && (
        <DeleteMemberModal
          show={showModal}
          setShow={setShowModal}
          removeMember={removeMember}
        />
      )}
      <div className="top">
        <div className="icon">
          <i className="las la-user"></i>
        </div>
        <h6 className="title">
          {isNewMember && "Add New"}
          {editData && editData.user_data.full_name}
        </h6>
        <div className="icons d-flex justify-content-end">
          <button className="btn btn_p" onClick={onMembEdit}>
            <i className="las la-edit"></i>{" "}
          </button>
          <button className="btn btn_p" type="button" onClick={onDeleteLabTest}>
            <i className="las la-trash"></i>{" "}
          </button>
        </div>
      </div>
      <div className="end">
        <div className="upper w-100 pr-3">
          <form onSubmit={handleSubmit(onMemberSubmit)} className="packageForm">
            <div className="row">
              {!isEditBtn && (
                <div className="col-md-3 mt-3 mb-3 valuearea">
                  <div>
                    {editData && (
                      <img
                        src={editData.profile_picture ?? "/AvatarMaleFinal.png"}
                        alt=""
                        className="img-fluid"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
              <div
                className={
                  isEditBtn ? "col-md-6 valuearea" : "col-md-9 mt-3 valuearea"
                }
              >
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    disabled={!isEditBtn}
                    {...register("full_name", { required: true })}
                  />
                  {errors.full_name && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        Full name is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              {isEditBtn && (
                <div className="col-md-6 valuearea">
                  <div className="form-group">
                    <label>Upload Profile Picture</label>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .bmp"
                      className="form-control"
                      {...register("profile_picture", {
                        // required: true,
                        onChange: (e) => {
                          // encode the file using the FileReader API
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setImage(reader.result);
                          };
                          reader.readAsDataURL(file);
                        },
                      })}
                    />
                    {/* {errors.profile_picture && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        Profile is required.
                      </small>
                    </i>
                  )} */}
                  </div>
                </div>
              )}
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contact Number"
                    minLength={10}
                    maxLength={10}
                    disabled={!isEditBtn}
                    {...register("phone_number", { required: true })}
                  />
                  {errors.phone_number && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">Phone is required.</small>
                    </i>
                  )}
                  {addLabStatus === "failed" && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        {error.user_data?.phone_number[0]}
                      </small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    disabled={!isEditBtn}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">Phone is required.</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Position</label>
                  <select
                    name="role"
                    className="form-control"
                    disabled={!isEditBtn}
                    {...register("role", { required: true })}
                  >
                    <option value="Founder">Founder </option>
                    <option value="Collector">Collector </option>
                    <option value="Manager">Manager </option>
                    <option value="Branch Manager">Branch Manager </option>
                    <option value="Accountant">Accountant </option>
                    <option value="Receptionist">Receptionist </option>
                    <option value="Lab Technician">Lab Technician </option>
                    <option value="Lab Assistant">Lab Assistant </option>
                  </select>
                  {errors.role && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">Role is required.</small>
                    </i>
                  )}
                </div>
              </div>
              {loading && "Loading..."}
              {status === "success" && (
                <div className="col-md-6 valuearea">
                  <div className="form-group">
                    <label>Qualification</label>
                    <select
                      name="qualification"
                      className="form-control"
                      disabled={!isEditBtn}
                      {...register("qualification", { required: true })}
                    >
                      <option value="" disabled selected>
                        Select Qualifications
                      </option>
                      {data.results.map((item, index) => (
                        <option key={index} defaultValue={item.slug}>
                          {item.name}{" "}
                        </option>
                      ))}
                    </select>
                    {errors.qualification && (
                      <i className="mb-3 d-block">
                        <small className="text-danger">
                          Qualification is required.
                        </small>
                      </i>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-md-12 valuearea">
                <div className="form-group">
                  <label>Biography</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    disabled={!isEditBtn}
                    {...register("biography", { required: true })}
                  ></textarea>
                  {errors.biography && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        Biography is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>
            </div>

            {isEditBtn && (
              <div className="row">
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn_p"
                    disabled={editLabLoading || addLabLoading}
                  >
                    Update Member
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMembers;
