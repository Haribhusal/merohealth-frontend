import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { labActions } from "../../../services/lab/action";
import {
  DELETE_LABTEST_RESET,
  EDIT_LABTEST_RESET,
  POST_LABTEST_RESET,
} from "../../../services/lab/types";
import ToastMessage from "../../Message";
import DeleteServicesModal from "./DeleteServiceModal";

const ServiceForm = ({
  dispatch,
  testData,
  testLoading,
  testStatus,
  postLabStatus,
  postLabLoading,
  newService,
  editServiceData,
  editLabStatus,
  editLabLoading,
  deleteLabStatus,
  setActiveService,
  setNewService,
  errorMsg,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // show message alert
  const [show, setShow] = useState(false);
  // if the edit button is pressed
  const [isEditBtn, setIsEditBtn] = useState(false);
  // show delete modal
  const [showModal, setShowModal] = useState(false);
  // show tests
  const [tests, setTests] = useState({});
  // set on change seleted value;
  const [selectedTest, setSelectedTests] = useState({});
  // set options for the tests
  const [options, setOptions] = useState({});

  const onServiceEdit = () => {
    setIsEditBtn(!isEditBtn);
  };

  // when the form is submitted
  const onSubmitForm = (values) => {
    const formData = {
      // name: "aead",
      test: tests.slug,
      price: values.price,
    };
    if (!!editServiceData) {
      dispatch(labActions.editLabTest(formData, editServiceData.slug));
    } else {
      dispatch(labActions.postLabTest(formData));
    }
  };

  // set default value to the form to edit
  useEffect(() => {
    if (!!editServiceData) {
      setValue("test", editServiceData.test.slug);
      setValue("price", editServiceData.price);

      setSelectedTests({
        value: editServiceData.test.slug,
        label: editServiceData.test.name,
      });
      setTests({
        slug: editServiceData.test.slug,
        panel: { name: editServiceData.test?.panel.name },
        category: { name: editServiceData.test?.category.name },
      });
    } else {
      setTests({});
    }
  }, [editServiceData, setValue]);

  // when lab user press delete button
  const onDeleteLabTest = () => {
    setShowModal(true);
  };

  // when choose test name, display category and panel
  const onSelectTest = (val) => {
    const filteredData = testData.results.filter(
      (item) => val.value === item.slug
    );
    setTests(filteredData[0]);
    setSelectedTests(val);
  };

  // when user press one service
  useEffect(() => {
    if (!!editServiceData) {
      setIsEditBtn(false);
    }
  }, [editServiceData]);

  // when user press add new action button
  useEffect(() => {
    if (newService == true) {
      setIsEditBtn(true);
    } else {
      setIsEditBtn(false);
    }
  }, [newService]);

  // when user deletes the services
  const removeServices = () => {
    setShowModal(false);
    dispatch(labActions.deleteLabTest(editServiceData.slug));
  };

  useEffect(() => {
    if (
      postLabStatus === "success" ||
      editLabStatus === "success" ||
      deleteLabStatus === "success"
    ) {
      dispatch(labActions.getLabTest());
      setIsEditBtn(false);
    }

    if (postLabStatus === "success") {
      setShow({ bg: "success", message: "Lab Added Successfully!" });
      setActiveService(0);
      setNewService(false);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: POST_LABTEST_RESET });
      }, 2000);
    }
    if (editLabStatus === "success") {
      setShow({ bg: "success", message: "Lab Edited Successfully!" });
      setTimeout(() => {
        setShow(false);
        dispatch({ type: EDIT_LABTEST_RESET });
      }, 2000);
    }
  }, [
    deleteLabStatus,
    dispatch,
    editLabStatus,
    postLabStatus,
    setActiveService,
    setNewService,
  ]);

  useEffect(() => {
    if (deleteLabStatus === "success") {
      setShow({ bg: "danger", message: "Lab Deleted Successfully!" });
      setActiveService(0);
      setNewService(false);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: DELETE_LABTEST_RESET });
      }, 2000);
    }
  }, [deleteLabStatus, dispatch, setActiveService, setNewService, show]);

  useEffect(() => {
    if (testStatus === "success") {
      const opt = testData.results.map((item, index) => ({
        value: item.slug,
        label: item.name,
      }));
      setOptions(opt);
    }
  }, [testData.results, testStatus]);

  return (
    <div className="col-sm-5 fullheight rightbar">
      <div className="top">
        {show && (
          <ToastMessage
            show={show}
            setShow={setShow}
            bg={show.bg}
            message={show.message}
          />
        )}
        {showModal && (
          <DeleteServicesModal
            show={showModal}
            setShow={setShowModal}
            removeServices={removeServices}
          />
        )}
        <div className="icon">
          <i className="las la-flask"></i>
        </div>
        <h6 className="title mb-0 text-uppercase">
          {editServiceData ? editServiceData.test.name : "Add New"}
        </h6>
        {newService && <div className="icons d-flex justify-content-end"></div>}
        {!newService && (
          <div className="icons d-flex justify-content-end">
            <button className="btn btn_p" onClick={onServiceEdit}>
              <i className="las la-edit"></i>{" "}
            </button>
            <button className="btn btn_p" onClick={onDeleteLabTest}>
              <i className="las la-trash"></i>{" "}
            </button>
          </div>
        )}
      </div>
      <div className="end">
        <div className="upper">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="row">
              <div className="col-md-6 valuearea">
                {testStatus === "success" && (
                  <div className="form-group">
                    <label>Test Name </label>
                    {testLoading && "Loading...."}
                    {!testLoading && (
                      <div>
                        {isEditBtn ? (
                          <div>
                            <Select
                              options={options}
                              isSearchable={true}
                              value={selectedTest}
                              onChange={onSelectTest}
                            />
                          </div>
                        ) : (
                          <input
                            name="price"
                            type="text"
                            className="form-control"
                            placeholder="Service Cost"
                            value={editServiceData && editServiceData.test.name}
                            disabled
                          />
                        )}
                      </div>
                    )}
                    {errors.test && (
                      <i className="mb-3">
                        <small className="text-danger">
                          Please select test.
                        </small>
                      </i>
                    )}
                  </div>
                )}
              </div>
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Test Cost (NPR)</label>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    placeholder="Service Cost"
                    disabled={!isEditBtn}
                    {...register("price", { required: true, max: 100000 })}
                    // defaultValue={editServiceData && editServiceData.price}
                  />
                  {errors.price && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Please enter price. (max limit: 100000)
                      </small>
                    </i>
                  )}
                  {errorMsg && (
                    <i className="mb-3">
                      <small className="text-danger">{errorMsg}</small>
                    </i>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Test Category </label>
                  <input
                    type="text"
                    className="form-control"
                    value={!!tests.slug ? tests.category.name : "N/A"}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>Test Panel</label>
                  <input
                    type="text"
                    className="form-control"
                    value={!!tests.slug ? tests.panel.name : "N/A"}
                    disabled
                  />
                </div>
              </div>
            </div>
            {isEditBtn && (
              <div className="row">
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn_p"
                    disabled={postLabLoading || editLabLoading}
                  >
                    {postLabLoading || editLabLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        {/* <div className="lower">2</div> */}
      </div>
    </div>
  );
};

export default ServiceForm;
