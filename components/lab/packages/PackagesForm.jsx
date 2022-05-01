/* eslint-disable @next/next/no-img-element */
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { labActions } from "../../../services/lab/action";
import {
  DELETE_PACKAGES_RESET,
  EDIT_PACKAGES_RESET,
  POST_PACKAGES_RESET,
} from "../../../services/lab/types";
import ToastMessage from "../../Message";
import DeletePackageModal from "./DeletePackageModal";
// import Select from "react-select";

const PackagesForm = ({
  dispatch,
  lab,
  labTestStatus,
  labTestData,
  labTestLoading,
  newService,
  editData,
  setNewService,
  setActiveService,
}) => {
  const {
    data: packageData,
    loading,
    status: packageStatus,
    error,
  } = lab.postPackage;

  const {
    data: editPackageData,
    loading: editPackageLoading,
    status: editPackageStatus,
    error: editPackageError,
  } = lab.editPackage;

  const {
    data: deletePackageData,
    loading: deletePackageLoading,
    status: deletePackageStatus,
  } = lab.deletePackage;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // when edit button
  const [isEditBtn, setIsEditBtn] = useState(false);

  // show
  const [show, setShow] = useState(false);
  // show message
  const [showMessage, setShowMessage] = useState(false);

  // options for the select value
  const [options, setOptions] = useState([]);
  // to set the discount type
  const [isDiscountPer, setIsDiscountPer] = useState(false);
  // set subtotal price
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  // set custom price if entered
  const [customPrice, setCustomPrice] = useState(0);
  // set discount price if entered
  const [discountPrice, setDiscountPrice] = useState(0);
  // set total price of the packagess
  const [totalPrice, setTotalPrice] = useState(0);
  // get the selected option for price
  const [selected, setSelected] = useState(false);
  // set image up
  const [imageUp, setImageUp] = useState(null);

  // when package open edit
  const onPackageEdit = () => {
    setIsEditBtn(!isEditBtn);
  };

  // when you select the tests
  const onGetTests = (selectedList, selectedItem) => {
    setSelected(selectedList);
    if (customPrice <= 0 && !editData) {
      setSubTotalPrice((subTotalPrice += selectedItem.price));
      setTotalPrice((totalPrice += selectedItem.price));
    }
  };

  // when you remove the tests
  const onRemoveTests = (selectedList, removedItem) => {
    setSelected(selectedList);
    if (customPrice <= 0 && !editData) {
      setSubTotalPrice((subTotalPrice -= removedItem.price));
      setTotalPrice((totalPrice -= removedItem.price));
    }
  };

  // when you set the custom price
  const onChangePrice = (value) => {
    setCustomPrice(value);

    if (value <= 0 && !editData) {
      const total = 0;
      selected.forEach((item) => {
        total += item.price;
      });
      setSubTotalPrice(total);
      setTotalPrice(total);
    } else {
      setSubTotalPrice(value);
      setTotalPrice(value);
    }
  };

  // when you click on the percentage or rupees amount
  const onChangePer = () => {
    if (isDiscountPer) {
      const totalVal = subTotalPrice - discountPrice;
      setTotalPrice(totalVal);
      setIsDiscountPer(false);
    } else {
      var percentChange = 1 - discountPrice / 100;
      const totalVal = subTotalPrice * percentChange;
      setTotalPrice(totalVal);
      setIsDiscountPer(true);
    }
  };

  // when you change the value on discount input
  const onChangeDiscount = (value) => {
    setDiscountPrice(value);
    if (!isDiscountPer) {
      const totalVal = subTotalPrice - value;
      setTotalPrice(totalVal);
    } else {
      var percentChange = 1 - value / 100;
      const totalVal = subTotalPrice * percentChange;
      setTotalPrice(totalVal);
    }
  };

  // when user press add new action button
  useEffect(() => {
    if (newService == true) {
      setIsEditBtn(true);
    } else {
      setIsEditBtn(false);
    }
  }, [newService]);

  // when user press one package
  useEffect(() => {
    if (!!editData) {
      setIsEditBtn(false);
    }
  }, [editData]);

  // when you submit the form
  const onSubmitForm = (values) => {
    const formdata = {};
    if (imageUp) {
      formdata = {
        ...values,
        image: imageUp,
        lab_tests: selected.map((item) => item.slug),
        price: subTotalPrice,
        discount_type: isDiscountPer ? "Percentage" : "Amount",
        discount: parseInt(discountPrice),
      };
    } else {
      formdata = {
        name: values.name,
        description: values.description,
        lab_tests: selected.map((item) => item.slug),
        price: subTotalPrice,
        discount_type: isDiscountPer ? "Percentage" : "Amount",
        discount: parseInt(discountPrice),
      };
    }

    if (editData) {
      dispatch(labActions.editPackage(formdata, editData.slug));
    } else {
      dispatch(labActions.postPackage(formdata));
    }
  };

  // set options for the select option lab
  useEffect(() => {
    if (labTestStatus === "success") {
      const data = labTestData.results.map((item) => ({
        id: item.slug,
        name: item.test.name,
        price: item.price,
        slug: item.test.slug,
      }));
      setOptions(data);
    }
  }, [labTestData, labTestStatus]);

  useEffect(() => {
    if (newService) {
      // get lab test
      dispatch(labActions.getLabTest());
    }
  }, [dispatch, newService]);

  useEffect(() => {
    // on package success submit
    if (
      packageStatus === "success" ||
      editPackageStatus === "success" ||
      deletePackageStatus === "success"
    ) {
      // get packages
      dispatch(labActions.getPackage());
    }

    if (packageStatus === "success") {
      setShowMessage({
        bg: "success",
        message: "Package Created Successfully!",
      });
      setActiveService(0);
      setNewService(false);
      setTimeout(() => {
        setShowMessage(false);
        dispatch({ type: POST_PACKAGES_RESET });
      }, 2000);
    }
    if (editPackageStatus === "success") {
      setShowMessage({
        bg: "success",
        message: "Package Updated Successfully!",
      });
      setNewService(false);
      setTimeout(() => {
        setShowMessage(false);
        dispatch({ type: EDIT_PACKAGES_RESET });
      }, 2000);
    }
  }, [
    deletePackageStatus,
    dispatch,
    editPackageStatus,
    packageStatus,
    setActiveService,
    setNewService,
  ]);

  useEffect(() => {
    if (deletePackageStatus === "success") {
      setShowMessage({
        bg: "danger",
        message: "Package Deleted Successfully!",
      });
      setActiveService(0);
      setNewService(false);
      setTimeout(() => {
        setShowMessage(false);
        dispatch({ type: DELETE_PACKAGES_RESET });
      }, 2000);
    }
  }, [deletePackageStatus, dispatch, setActiveService, setNewService]);

  // set default value to the form to edit
  useEffect(() => {
    setValue("image", editData ? "" : "");
    setValue("name", editData ? editData.name : "");
    setValue("description", editData ? editData.description : "");
    setSubTotalPrice(editData ? editData.price : 0);
    setDiscountPrice(editData ? editData.discount : 0);
    setTotalPrice(editData ? editData.actual_price : 0);
    setCustomPrice(0);
    editData
      ? setIsDiscountPer(editData.discount_type === "Amount" ? false : true)
      : setIsDiscountPer(false);

    if (editData) {
      const select = editData.lab_tests.map((item) => ({
        id: item.test.slug,
        name: item.test.name,
        price: item.price,
        slug: item.test.slug,
      }));
      setSelected(select);
    } else {
      setSelected([]);
    }
  }, [editData, setValue]);

  // open modal to delete
  const onModalOpen = () => {
    setShow(true);
  };

  // when deleting packaging
  const removePackage = () => {
    setShow(false);
    dispatch(labActions.deletePackage(editData.slug));
  };

  return (
    <div className="col-sm-5 fullheight rightbar">
      <div className="top">
        {showMessage && (
          <ToastMessage
            bg={showMessage.bg}
            message={showMessage.message}
            show={showMessage}
            setShow={setShowMessage}
          />
        )}
        {show && (
          <DeletePackageModal
            show={show}
            setShow={setShow}
            removePackage={removePackage}
          />
        )}
        <div className="icon">
          <i className="las la-medkit"></i>
        </div>
        <h6 className="title">
          {!editData ? "Add New Package" : editData.name}
        </h6>
        {newService && <div className="icons d-flex justify-content-end"></div>}
        {!newService && (
          <div className="icons d-flex justify-content-end">
            <button className="btn btn_p" onClick={onPackageEdit}>
              <i className="las la-edit"></i>
            </button>
            <button className="btn btn_p" onClick={onModalOpen}>
              <i className="las la-trash"></i>
            </button>
          </div>
        )}
      </div>
      <div className="end">
        <div className="upper w-100">
          <form onSubmit={handleSubmit(onSubmitForm)} className="packageForm">
            <div className="row">
              <div className="col-md-12 valuearea">
                <div className="form-group">
                  <label>
                    Package Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Service Title"
                    disabled={!isEditBtn}
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Package name is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>

              {isEditBtn && (
                <div className="col-md-12 valuearea">
                  {labTestLoading && "Loading services.."}
                  {labTestStatus === "success" && (
                    <div className="form-group">
                      <label>
                        Services (Tests) <span className="text-danger">*</span>
                      </label>

                      <Multiselect
                        className="multiSelect"
                        options={options}
                        selectedValues={selected}
                        onSelect={onGetTests}
                        onRemove={onRemoveTests}
                        displayValue="name"
                      />

                      {!!error?.lab_tests && (
                        <i className="mb-3">
                          <small className="text-danger">
                            {error.lab_tests[0]}
                          </small>
                        </i>
                      )}
                    </div>
                  )}
                </div>
              )}

              {!isEditBtn && (
                <div className="col-md-12 valuearea">
                  {editData && (
                    <div className="form-group">
                      <label>Services (Tests)</label>
                      <div className="d-flex bg-white px-2 py-2 rounded">
                        {editData.lab_tests.map((item, index) => (
                          <div
                            key={index}
                            className="text-white bg-primary mr-2 px-2"
                            style={{ borderRadius: "10px", fontSize: "13px" }}
                          >
                            {item.test.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {isEditBtn && (
                <div className="col-md-12 mb-4 valuearea">
                  <label>Upload Photo</label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .bmp"
                    className="form-control"
                    {...register("image", {
                      // required: true,
                      onChange: (e) => {
                        // encode the file using the FileReader API
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setImageUp(reader.result);
                        };
                        reader.readAsDataURL(file);
                      },
                    })}
                  />
                </div>
              )}

              <div
                className={
                  isEditBtn ? "col-md-12 valuearea" : "col-md-12 valuearea"
                }
              >
                <div className="form-group">
                  <label>
                    Package Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    className="form-control"
                    disabled={!isEditBtn}
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && (
                    <i className="mb-3">
                      <small className="text-danger">
                        Description is required.
                      </small>
                    </i>
                  )}
                </div>
              </div>

              {!isEditBtn && (
                <div className="col-md-12 valuearea">
                  {editData && (
                    <div className="text-center w-100 mt-2 rounded">
                      {editData.image && (
                        <img
                          src={editData.image}
                          alt=""
                          className="img-fluid rounded"
                          style={{ "max-width": "50%" }}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={isEditBtn ? "row" : "row mb-3"}>
              <div className="col-md-6 valuearea ">
                <div className="form-group">
                  <label>Custom Price (Rs.)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={customPrice}
                    disabled={!isEditBtn}
                    onChange={(e) => onChangePrice(e.target.value)}
                  />

                  <div>
                    <b>Sub Total: </b> Rs. {subTotalPrice}
                  </div>
                  <div>
                    <b>Discount: </b> Rs. {discountPrice}
                  </div>
                  <div>
                    <b>Total Price: </b> Rs. {totalPrice}
                  </div>
                </div>
              </div>
              <div className="col-md-6 valuearea">
                <div className="form-group">
                  <label>
                    Discount {isDiscountPer ? "Percentage" : "Rupees"}
                  </label>
                  {/* <input type="number" className="form-control" /> */}
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      value={discountPrice}
                      disabled={!isEditBtn}
                      onChange={(e) => onChangeDiscount(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn"
                        type="button"
                        disabled={!isEditBtn}
                        onClick={() => onChangePer()}
                      >
                        {isDiscountPer ? "%" : "Rs."}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isEditBtn && (
              <div className="row mb-5">
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn_p"
                    disabled={loading || editPackageLoading}
                  >
                    {loading || editPackageLoading ? "Loading..." : "Submit"}
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

export default PackagesForm;
