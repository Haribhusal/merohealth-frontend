/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authActions } from "../../../services/auth/action";
import { userActions } from "../../../services/user/action";
import Loading from "../../Loading";
import ToastMessage from "../../Message";

const EditProfile = ({ user, dispatch, auth }) => {
  const { data, loading, status } = user.getProfile;
  const {
    data: editData,
    loading: editLoading,
    status: editStatus,
    error,
  } = user.editProfile;

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

  // show toast message
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  // get states
  useEffect(() => {
    dispatch(authActions.stateList());
  }, [dispatch]);

  useEffect(() => {
    if (stateStatus === "success") {
      dispatch(authActions.districtList(data.client_address?.province.slug));
    }
  }, [data.client_address?.province.slug, dispatch, stateStatus]);

  useEffect(() => {
    if (districtStatus === "success") {
      dispatch(
        authActions.municipalityList(data.client_address?.district.slug)
      );
    }
  }, [data.client_address?.district.slug, dispatch, districtStatus]);

  // get district on select state
  const onGetDistrict = (slug) => {
    dispatch(authActions.districtList(slug));
  };

  // get municipality on select district
  const onGetMunicipality = (slug) => {
    dispatch(authActions.municipalityList(slug));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const formdata = {
      birthday: values.birthday,
      email: values.email,
      blood_group: values.blood_group,
      full_name: values.full_name,
      gender: values.gender,
      height: values.height,
      phone_number: values.phone_number,
      weight: values.weight,
      profile_picture: image,
      is_alcoholic: values.is_alcoholic == 0 ? false : true,
      is_drugaddict: values.is_drugaddict == 0 ? false : true,
      is_smoker: values.is_smoker == 0 ? false : true,
      client_address: {
        province: values.province,
        district: values.district,
        municipality: values.municipality,
        tole: values.tole,
      },
      social_links: {
        facebook: values.facebook,
        instagram: values.instagram,
        linkedin: values.linkedin,
        youtube: values.youtube,
        website: values.website,
      },
    };

    dispatch(userActions.editProfile(formdata));
  };

  useEffect(() => {
    // set values to the form data
    setValue("full_name", data.full_name);
    setValue("email", data.email);
    setValue("gender", data.gender);
    setValue("blood_group", data.blood_group);
    setValue("birthday", data.birthday);
    setValue("height", data.height);
    setValue("weight", data.weight);
    setValue("phone_number", data.phone_number);
    setValue("is_alcoholic", data.is_alcoholic ? 1 : 0);
    setValue("is_drugaddict", data.is_drugaddict ? 1 : 0);
    setValue("is_smoker", data.is_smoker ? 1 : 0);
    setValue("province", data.client_address?.province.slug);
    setValue("district", data.client_address?.district.slug);
    setValue("municipality", data.client_address?.municipality.slug);
    setValue("facebook", data.social_links?.facebook);
    setValue("instagram", data.social_links?.instagram);
    setValue("linkedin", data.social_links?.linkedin);
    setValue("youtube", data.social_links?.youtube);
    setValue("website", data.social_links?.website);
  }, [data, setValue]);

  useEffect(() => {
    if (editStatus === "success") {
      setShow({
        bg: "success",
        message: "User Updated Successfully!",
      });
      setTimeout(() => {
        setShow(false);
        dispatch(userActions.getProfile());
      }, 1000);
    }
  }, [dispatch, editStatus]);

  return (
    <div className="tab-pane fade show active" id="profile">
      {show && (
        <ToastMessage
          bg={show.bg}
          message={show.message}
          show={show}
          setShow={setShow}
        />
      )}
      {(loading || muniLoading || stateLoading || districtLoading) && (
        <Loading />
      )}
      <div className="textwrapper">
        <div className="title f16 text_p">Edit Profile</div>
      </div>
      <div className="formwrapper">
        {status === "success" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-12 d-flex flex-column align-items-start gap">
                <div id="profile-container" className="d-flex gap w-100">
                  <div className="d-flex flex-column editProfImg">
                    <img
                      id="profileImage"
                      src={
                        data.profile_picture
                          ? data.profile_picture
                          : "/AvatarMaleFinal.png"
                      }
                      alt=""
                      className="img-fluid img-avatar"
                    />
                    {/* <div className="textUpd">Update Profile Picture</div> */}
                  </div>
                  <div className="social flex1 pl-2">
                    <div className="row ">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>
                            <p className="">
                              Full Name <span className="text-danger">*</span>
                            </p>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fname"
                            placeholder="Full Name"
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
                          <label>
                            <p className="">
                              Email <span className="text-danger">*</span>
                            </p>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            disabled
                            {...register("email", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Upload Profile Picture</label>
                          <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .bmp"
                            className="form-control"
                            {...register("profile_picture", {
                              onChange: (e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setImage(reader.result);
                                };
                                reader.readAsDataURL(file);
                              },
                            })}
                          />


                        </div>
                      </div>

                      {/* <div className="col-sm-4">
                          <div className="form-group">
                            <label>
                              <p className="">Middle Name</p>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label>
                              <p className="">Last Name</p>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              placeholder="First Name"
                            />
                          </div>
                        </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="form-group mb-0 overflow-hidden">
                  <input
                    className="form-control"
                    id="imageUpload"
                    type="file"
                    name="profile_photo"
                    placeholder="Photo"
                    required=""
                    capture
                  />
                </div> */}
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="textwrapper">
                  <p className="f14 fw700 mb-2 text_p">Address</p>
                </div>
              </div>
            </div>
            <div className="row">
              {stateStatus === "success" && (
                <div className="col-sm-4">
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
                          onGetDistrict(e.target.value);
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
                <div className="col-sm-4">
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
                          onGetMunicipality(e.target.value);
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
                <div className="col-sm-4">
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
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Tole/Apartment <span className="text-danger">*</span>
                    </p>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tole/Apartment"
                    {...register("tole", {
                      required: true,
                    })}
                  />
                  {errors.tole && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your tole.
                      </small>
                    </i>
                  )}
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="textwrapper">
                  <p className="f14 fw700 mb-2 text_p">Personal</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Phone <span className="text-danger">*</span>
                    </p>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    {...register("phone_number", {
                      required: true,
                    })}
                  />
                  {errors.phone_number && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your phone.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Birthday <span className="text-danger">*</span>
                    </p>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    placeholder="Your Birthday"
                    {...register("birthday", { required: true })}
                  />
                  {errors.birthday && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your birthday.
                      </small>
                    </i>
                  )}
                  {editStatus === "failed" && (
                    <i className="mb-3">
                      <small className="text-danger">{error.birthday}</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Weight (in KG) <span className="text-danger">*</span>
                    </p>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    placeholder="Your Weight (in KG)"
                    {...register("weight", { required: true })}
                  />
                  {errors.weight && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your weight.
                      </small>
                    </i>
                  )}
                </div>
              </div>

              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Height  (in Ft.Inch) <span className="text-danger">* </span>
                    </p>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="height"
                    placeholder="Enter your Height (in Ft'In'')"
                    {...register("height", { required: true })}
                  />
                  {errors.height && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your height.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Blood Group <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select
                    className="form-control"
                    {...register("blood_group", { required: true })}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  {errors.blood_group && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your blood group.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Gender <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select
                    className="form-control"
                    {...register("gender", { required: true })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.gender && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter your gender.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              {/* <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Origin <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select name="" id="" className="form-control">
                    <option value="1">Nepalese</option>
                    <option value="2">Indian</option>
                    <option value="3">American</option>
                  </select>
                </div>
              </div> */}
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="textwrapper">
                  <p className="f14 fw700 mb-2 text_p">Habits</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Smoking <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select
                    className="form-control"
                    {...register("is_smoker", { required: true })}
                  >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  {errors.is_smoker && (
                    <i className="mb-3">
                      <small className="text-danger">Please select one.</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Drugs <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select
                    className="form-control"
                    {...register("is_drugaddict", { required: true })}
                  >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  {errors.is_drugaddict && (
                    <i className="mb-3">
                      <small className="text-danger">Please select one.</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">
                      Drinking <span className="text-danger">*</span>
                    </p>
                  </label>
                  <select
                    className="form-control"
                    {...register("is_alcoholic", { required: true })}
                  >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  {errors.is_alcoholic && (
                    <i className="mb-3">
                      <small className="text-danger">Please select one.</small>
                    </i>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="textwrapper">
                  <p className="f14 fw700 mb-2 text_p">Social Link</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">Facebook Link</p>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="fname"
                    placeholder="Facebook Profile Link"
                    {...register("facebook")}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">Instagram Link</p>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="fname"
                    placeholder="Instagram Profile Link"
                    {...register("instagram")}
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">Linkedin Link</p>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="fname"
                    placeholder="Linkedin Profile Link"
                    {...register("linkedin")}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">Youtube Link</p>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="fname"
                    placeholder="Youtube Channel Link"
                    {...register("youtube")}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>
                    <p className="">Personal Website</p>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="fname"
                    placeholder="Website"
                    {...register("website")}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn_p"
                  disabled={editLoading}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
