import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useForm } from "react-hook-form";
import { labActions } from "../../../services/lab/action";
import ToastMessage from "../../Message";
import { ADD_TEST_REQUEST_RESET } from "../../../services/lab/types";
import Loading from "../../Loading";

const AddTestRequest = ({ lab, dispatch, auth }) => {
  useEffect(() => {
    // get lab service
    dispatch(labActions.getLabTest());
    // get lab packages
    dispatch(labActions.getPackage());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data, loading, status } = lab.getLabTest;
  const {
    data: packageData,
    loading: packageLoading,
    status: packageStatus,
  } = lab.getPackage;
  const { loading: customLoading, status: customStatus } = lab.addCustomRequest;

  const [show, setShow] = useState(false);
  // options for the select value
  const [options, setOptions] = useState([]);
  // get the selected option for price
  const [selectedTests, setSelectedTests] = useState([]);
  // options for the select value
  const [packageOptions, setPackageOptions] = useState([]);
  // get the selected option for price
  const [selectedPackage, setSelectedPackage] = useState([]);
  const [testPkgError, setTestPkgError] = useState(false);

  // when user selects
  const onGetTests = (selectedList, selectedItem) => {
    setSelectedTests(selectedList);
  };
  const onRemoveTests = (selectedList, selectedItem) => {
    setSelectedTests(selectedList);
  };

  const onGetPkg = (selectedList, selectedItem) => {
    setSelectedPackage(selectedList);
  };
  const onRemovePkg = (selectedList, selectedItem) => {
    setSelectedPackage(selectedList);
  };

  const onSubmit = (value) => {
    if (selectedTests.length == 0 && selectedPackage.length == 0) {
      setTestPkgError("Please select at least one package or tests");
    } else {
      setTestPkgError(false);
      const formdata = {
        patient_data: {
          patient_name: value.name,
          patient_email: value.email,
          patient_phone_number: value.patient_phone_number,
          patient_message: value.address,
        },
        lab_tests: selectedTests.map((item) => item.id),
        lab_packages: selectedPackage.map((item) => item.id),
      };
      dispatch(labActions.addCustomRequest(formdata));
    }
  };

  // set options for the select option lab
  useEffect(() => {
    if (status === "success") {
      const optData = data.results.map((item) => ({
        id: item.id,
        name: item.test.name,
        price: item.price,
      }));
      setOptions(optData);
    }
  }, [data, status]);

  // set options for the select option lab
  useEffect(() => {
    if (packageStatus === "success") {
      const optPkgData = packageData.results.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.actual_price,
      }));
      setPackageOptions(optPkgData);
    }
  }, [packageData, packageStatus]);

  useEffect(() => {
    if (customStatus === "success") {
      setShow(true);
      reset();
      setSelectedTests([]);
      setSelectedPackage([]);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: ADD_TEST_REQUEST_RESET });
      }, 2000);
    }
  }, [customStatus, dispatch, reset]);

  return (
    <div className="col-sm-5 fullheight rightbar">
      {packageLoading && loading && <Loading />}
      {show && <ToastMessage show={show} bg="success" message="Confirmed" />}
      <div className="top">
        <div className="user text d-flex align-items-center">
          <div className="icon mr-2">
            <i className="las la-user-injured"></i>
          </div>
          <h6 className="title mb-0">Adding Request</h6>
        </div>
      </div>
      <div className="end">
        <div className="upper testsrequestedbyuser pr-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6 valuearea">
                <div className="form-group">
                  <label>Patient Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Patient Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">Email is required.</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-6 valuearea">
                <div className="form-group">
                  <label>Patient Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Patient Phone"
                    {...register("patient_phone_number", { required: true })}
                  />
                  {errors.patient_phone_number && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        Phone Number is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-6 valuearea">
                <div className="form-group">
                  <label>Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Patient Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">Name is required.</small>
                    </i>
                  )}
                </div>
              </div>
              <div className="col-sm-6 valuearea">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Patient Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">
                        Address is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 valuearea">
                <div className="form-group f14">
                  <label>Select Tests</label>
                  <Multiselect
                    className="multiSelect"
                    options={options}
                    selectedValues={selectedTests}
                    onSelect={onGetTests}
                    onRemove={onRemoveTests}
                    displayValue="name"
                  />
                  {/* <select
                    className="selectTests w-100 py-2"
                    name="tests"
                    multiple="multiple"
                  >
                    <option value="AL" className="f14">
                      Blood Test <span className="price">Rs. 2300</span>
                    </option>
                  </select> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 valuearea">
                <div className="form-group f14">
                  <label>Select Package</label>
                  <Multiselect
                    className="multiSelect"
                    options={packageOptions}
                    selectedValues={selectedPackage}
                    onSelect={onGetPkg}
                    onRemove={onRemovePkg}
                    displayValue="name"
                  />
                  {testPkgError && (
                    <i className="mb-3 d-block">
                      <small className="text-danger">{testPkgError}</small>
                    </i>
                  )}
                  {/* <select
                    className="selectPackages w-100 py-2"
                    name="packages"
                    multiple="multiple"
                  >
                    <option value="AL" className="f14">
                      Full Body Checkup
                      <span className="price">Rs. 2300</span>
                    </option>
                    <option value="AL" className="f14">
                      Lipid Function Test
                      <span className="price">Rs. 2300</span>
                    </option>
                  </select> */}
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-sm-12 valuearea">
                <div className="form-group">
                  <div className="labels mb-2 d-flex align-items-center justify-content-between">
                    <label>Payment Method</label>
                   <div className="f14">
                      Total Cost
                      <span className="cost text_p fw700">Rs. 3000</span>
                    </div>
                  </div>
                  <div className="inputSearch">
                    <select name="" className="form-control">
                      <option value="cod">Cash on Delivery</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="labaction mt-4">
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn_p"
                    disabled={customLoading}
                  >
                    {!customLoading && <i className="las la-check"></i>}
                    {customLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTestRequest;
