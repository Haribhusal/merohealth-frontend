import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { labActions } from "../../../services/lab/action";
import { UPLOAD_PROFILE_RESET } from "../../../services/lab/types";

const UpdateCoverPhoto = ({ show, setShow, dispatch, isProfileOrCover }) => {
  const lab = useSelector((state) => state.lab);

  const { data: uploadData, status: uploadStatus, loading } = lab.uploadProfile;

  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmitForm = () => {
    const formData = {};
    if (isProfileOrCover === 2) {
      formData = {
        cover_picture: image,
      };
    } else {
      formData = {
        display_picture: image,
      };
    }
    dispatch(labActions.uploadProfile(formData));
  };

  useEffect(() => {
    if (uploadStatus === "success") {
      setShow(false);
      dispatch({ type: UPLOAD_PROFILE_RESET });
      dispatch(labActions.getLabProfile());
    }
  }, [dispatch, setShow, uploadStatus]);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      className="modal_overview"
      keyboard={false}
      size="md"
      centered
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="modal-header">
          <h5 className="modal-title text_p f16" id="exampleModalLabel1">
            Update Lab {isProfileOrCover == 2 ? "Cover" : "Profile"} Image
          </h5>
        </div>
        <div className="modal-body bg_p_dim p">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  Choose your {isProfileOrCover == 2 ? "cover" : "profile"}{" "}
                  image
                </label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp"
                  className="form-control"
                  {...register("cover_picture", {
                    required: true,
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
                {errors.cover_picture && (
                  <i className="mt-3 d-block">
                    <small className="text-danger">Image is required.</small>
                  </i>
                )}
              </div>
            </div>
            <div className="col-sm-12 ">
              {!!image && <img src={image} alt="" className="img-fluid " />}
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
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateCoverPhoto;
