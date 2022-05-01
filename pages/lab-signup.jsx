/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../services/auth/action";
import withAuth from "../config/withAuth";
import { useRouter } from "next/router";
import ToastMessage from "../components/Message";
import { SIGNUP_LAB_RESET } from "../services/auth/types";
import Loading from "../components/Loading";
import Link from "next/link";

const LabSignup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showMsg, setShowMsg] = useState(false);

  const dispatch = useDispatch(null);
  const auth = useSelector((state) => state.auth);

  const {
    data: labData,
    loading: labLoading,
    status: labStatus,
    error,
  } = auth.labSignUp;
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

  useEffect(() => {
    // get states
    dispatch(authActions.stateList());
  }, [dispatch]);

  const onGetDistrict = (slug) => {
    // get district
    dispatch(authActions.districtList(slug));
  };

  const onGetMunicipality = (slug) => {
    // get municipality
    dispatch(authActions.municipalityList(slug));
  };

  const onLabRegister = (values) => {
    const formData = {
      name: values.name,
      licence_number: values.licence_number,
      expiry_date: values.expiry_date,
      telephone_number: values.telephone_number,
      mobile_number: values.mobile_number,
      pan_number: values.pan_number,
      lab_address: {
        province: values.province,
        district: values.district,
        municipality: values.municipality,
        ward_no: values.ward_no,
        tole: values.tole,
      },
      organization_type: values.organization_type,
    };

    dispatch(authActions.labSignUp(formData));
  };

  useEffect(() => {
    if (labStatus === "success") {
      setShowMsg(true);
      setTimeout(() => {
        setShowMsg(false);
        dispatch({ type: SIGNUP_LAB_RESET });
        router.push("/user/dashboard");
      }, 3000);
    }
  }, [dispatch, labStatus, router]);

  return (
    <section className="login">
      {(districtLoading || muniLoading || stateLoading) && <Loading />}
      {showMsg && (
        <ToastMessage
          bg="success"
          message="Your Lab is Sent to Approval"
          show={showMsg}
        />
      )}
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
                          src="../../media/logo.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <br />
              <div className="text-wrapper">
                <h3 className="heading my-3">Register Your Lab</h3>
                <p className="mb-3">
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur cum cumque inventore.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aspernatur cum cumque
                    inventore.
                  </small>
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onLabRegister)}
                className="loginform needs-validation"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        Lab Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Lab Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please enter lab name.
                          </small>
                        </i>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Licence Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="licence_number"
                        type="text"
                        className="form-control"
                        placeholder="Enter Licence Number"
                        {...register("licence_number", {
                          required: true,
                          maxLength: 5,
                          pattern: /^\d\d\d\d[a-zA-Z]+$/,
                        })}
                      />
                      {errors.licence_number && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Your License number should be in format 4 numbers
                            and 1 character, eg. 2423A 2423B, 2423C
                          </small>
                        </i>
                      )}
                      {/* {!!error?.licence_number && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Your License number should be in format 4 numbers
                            and 1 character, eg. 2423A 2423B, 2423C
                          </small>
                        </i>
                      )} */}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Expiry Date <span className="text-danger">*</span>
                      </label>
                      <input
                        name="expiry_date"
                        type="date"
                        className="form-control"
                        placeholder=""
                        {...register("expiry_date", { required: true })}
                      />
                      {errors.expiry_date && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please enter expiry date.
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
                          Provience No <span className="text-danger">*</span>
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
                            <option key={index} value={item.slug} id={item.id}>
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
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        Tole/Area/Appartment{" "}
                        <span className="text-danger">*</span>
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

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Telephone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="telephone_number"
                        type="number"
                        className="form-control"
                        placeholder="Enter Telephone Number"
                        {...register("telephone_number", { required: true })}
                      />
                      {errors.telephone_number && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please enter your telephone number.
                          </small>
                        </i>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="mobile_number"
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                        {...register("mobile_number", { required: true })}
                      />
                      {errors.mobile_number && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please enter your mobile.
                          </small>
                        </i>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Pan No / VAT Number{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        name="pan_number"
                        type="text"
                        className="form-control"
                        placeholder="Enter PAN/VAT Number"
                        {...register("pan_number", { required: true })}
                      />
                      {errors.pan_number && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please enter your PAN/VAT number.
                          </small>
                        </i>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Organization Type <span className="text-danger">*</span>
                      </label>
                      <select
                        name="organization_type"
                        className="form-control"
                        {...register("organization_type", { required: true })}
                      >
                        <option value="Partnered">Partnered</option>
                        <option value="Single">Single</option>
                      </select>
                      {errors.organization_type && (
                        <i className="mb-3">
                          <small className="text-danger">
                            Please choose your organization type.
                          </small>
                        </i>
                      )}
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Your Role</label>
                      <select name="" id="" className="form-control">
                        <option value="1">Founder</option>
                        <option value="1">IT Person</option>
                        <option value="1">Accountant</option>
                        <option value="1">Managing Director</option>
                        <option value="1">Lab Technician</option>
                      </select>
                    </div>
                  </div>
                </div> */}

                <div className="row">
                  <div className="col-sm-12">
                    <div className="group gap d-flex justify-content-between">
                      <div className="form-group d-flex gap align-items-center">
                        <input
                          type="checkbox"
                          name="rem"
                          id="rem"
                          {...register("terms", { required: true })}
                        />
                        <label htmlFor="rem" className="mb-0">
                          I have read the
                          <a href="#" style={{ textDecoration: "underline" }}>
                            Terms and Conditions
                          </a>
                          , I agree and want to proceed.
                        </label>
                      </div>
                    </div>
                    {errors.terms && (
                      <i className="mb-3 d-block">
                        <small className="text-danger">
                          Please agree to the terms and conditions.
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
                        className="btn btn_p text-center w-100 d-block"
                      >
                        Submit your lab For Approval
                      </button>
                    </div>
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
  );
};

export default withAuth(LabSignup);
