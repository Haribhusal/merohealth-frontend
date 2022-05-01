/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { labActions } from "../../../services/lab/action";
import { UPLOAD_GALLERY_RESET } from "../../../services/lab/types";

const UploadGallery = ({ show, setShow, dispatch, galleryImage }) => {
  const lab = useSelector((state) => state.lab);

  const {
    data: uploadGallData,
    status: uploadStatus,
    loading,
  } = lab.uploadGallery;

  const [isAdded, setIsAdded] = useState(false);
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);
  const [sameErr, setSameErr] = useState(null);
  const [submitErr, setSubmitErr] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // when user upload images
  const onChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onChangeBase = async (image) => {
    // let a = Buffer.from(image).toString("base64");
    // return a;
    // imageToBase64(image, { mode: "cors", credentials: "include" })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  // when user adds to the gallery list
  const onAddButtonClick = () => {
    setIsAdded(true);
    if (image != null) {
      const datform = {
        image: image,
      };
      // if (allImage.length > 0) {
      //   console.log("all");
      //   allImage.forEach((item) => {
      //     if (item.image !== image) {
      //       console.log(image);
      //       setAllImage([...allImage, datform]);
      //       setImage(null);
      //       setSameErr(null);
      //       reset();
      //     } else {
      //       setSameErr("Upload Different Image");
      //     }
      //     return;
      //   });
      // } else {
      // }
      setAllImage([...allImage, datform]);
      setImage(null);
      setSameErr(null);
      reset();
    }
  };

  // when user removes the image
  const onRemoveButtonClick = (img) => {
    const allimg = allImage.filter((item) => item.image !== img);
    setAllImage(allimg);
  };

  const onSubmitForm = () => {};

  // when user submits the form data
  const onSubmitFormData = () => {
    setIsAdded(false);
    if (allImage.length > 0) {
      setSubmitErr(null);
      const formdata = {
        images: allImage,
      };
      dispatch(labActions.uploadGallery(formdata));
    } else {
      setSubmitErr("Please Upload Image");
    }
  };

  useEffect(() => {
    if (uploadStatus === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch({ type: UPLOAD_GALLERY_RESET });
        dispatch(labActions.getLabProfile());
      }, 1000);
    }
  }, [dispatch, setShow, uploadStatus]);

  // useEffect(() => {
  //   if (galleryImage.length) {
  //     const imas = [];
  //     galleryImage.forEach((img) => {
  //       const da = onChangeBase(img.image);
  //       imas.push(da);
  //     });
  //     console.log(imas);
  //     setAllImage(imas);
  //   }
  // }, [galleryImage]);

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
          <h5 className="modal-title text_p f16" id="exampleModalLabel1">
            Update Lab Gallery
          </h5>
        </div>
        <div className="modal-body bg_p_dim p">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Lab Gallery Image</label>
                <div className="addNew d-flex gap">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Add Key Feature"
                    accept=".jpg, .jpeg, .png, .bmp"
                    {...register("gallery", {
                      required: true,
                      onChange: (e) => onChangeImage(e),
                    })}
                  />
                  <button
                    type="button"
                    className="btn btn_p_b"
                    onClick={onAddButtonClick}
                  >
                    Add
                  </button>
                </div>
              </div>

              {!!submitErr && (
                <div className="text-danger">
                  <i>{submitErr}</i>
                </div>
              )}
              <div className="galleryItemsWrapper">
                {!!allImage.length && (
                  <ul className="galleryItems">
                    {allImage.map((item, index) => (
                      <li
                        key={index}
                        className="galleryItem d-flex align-items-center justify-content-between"
                      >
                        <img src={item.image} alt="" className="img-fluid" />
                        <button
                          type="button"
                          className="btn btn_delete"
                          onClick={() => onRemoveButtonClick(item.image)}
                        >
                          <i className="las la-times"></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {isAdded && !allImage.length && (
                  <div className="text-danger">
                    <i>Please upload image</i>
                  </div>
                )}
                {sameErr && allImage.length && (
                  <div className="text-danger">
                    <i>{sameErr}</i>
                  </div>
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
          <button
            type="submit"
            className="btn btn_p"
            disabled={loading || allImage.length <= 0}
            onClick={onSubmitFormData}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadGallery;
