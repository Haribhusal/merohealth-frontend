import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { labActions } from "../../../../services/lab/action";
import { UPLOAD_REPORT_RESET } from "../../../../services/lab/types";
import ToastMessage from "../../../Message";

const UploadReport = ({ dispatch, id, lab }) => {
  //upload put data
  const { status, loading } = lab.uploadReport;

  const ind = 0;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // to show the toast message
  const [show, setShow] = useState(false);
  const [files, setFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // when user submits the report form
  const onReportSubmit = (val) => {
    setIsSubmitted(true);
    const formdata = {
      test_request_reports: files,
      message: val.message,
    };
    if (files.length > 0) {
      dispatch(labActions.uploadReport(id, formdata));
    }
    // if (!!val.report.length) {
    //   const arr = [];
    //   Array.from(files).map((item) => {
    //     arr.push({ report: item });
    //   });
    //   const formdata = {
    //     test_request_reports: arr,
    //     message: val.message,
    //   };
    // }
  };

  const removeItem = (fil) => {
    const newFiles = files.filter((item) => fil != item);
    setFiles(newFiles);
  };

  useEffect(() => {
    if (status === "success") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        setIsSubmitted(false);
        dispatch({ type: UPLOAD_REPORT_RESET });
        dispatch(labActions.getRunningTest());
      }, 1000);
    }
  }, [status, dispatch]);

  return (
    <form onSubmit={handleSubmit(onReportSubmit)} className="uploadreport">
      <ToastMessage show={show} bg="success" message="Report Uploaded" />
      <div className="form-group">
        <label>Upload Report</label>
        <div>
          <input
            id="uploadFileLabel"
            type="file"
            // id={`file-upload-${ind++}`}
            accept=".jpg, .jpeg, .png, .bmp, .pdf, .doc, .docx, .xls, .xlsx, .odt, .ods, .ppt, .pptx, .txt"
            className="form-control"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setFiles([
                  ...files,
                  { name: e.target.files[0].name, report: reader.result },
                ]);
              };
              reader.readAsDataURL(file);
            }}
            hidden
            // {...register("report", {
            //   required: true,
            //   onChange: (event) => {
            //     //   const files = URL.createObjectURL(event.target.files);
            //     setFiles(event.target.files);
            //   },
            // })}
          />
          <label id="newUpload" htmlFor="uploadFileLabel">
            Upload Report
          </label>
        </div>

        {!files.length && isSubmitted && (
          <i className="mb-3 d-block">
            <small className="text-danger">Report is required!</small>
          </i>
        )}
        {!!files.length && (
          <ol className="container my-3">
            {files.map((item, index) => (
              <li className="mb-2 pb-2 border-bottom" key={index}>
                <div className="d-flex justify-content-between">
                  <div>{item.name}</div>
                  <span
                    className="d-inline-block text-danger cursor-pointer"
                    onClick={() => removeItem(item)}
                  >
                    X
                  </span>
                </div>
              </li>
            ))}
          </ol>
        )}
        {errors.report && (
          <i className="mb-3 d-block">
            <small className="text-danger">Report is required!</small>
          </i>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="">Message to Patient</label>
        <textarea
          rows="3"
          className="form-control"
          placeholder="Write Message to Patient"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <i className="mb-3 d-block">
            <small className="text-danger">Message is required!</small>
          </i>
        )}
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn bg_p_dim text_p fw700"
          disabled={loading}
        >
          {/* <i className="lar la-check-circle f18"></i> */}
          {loading ? "Uploading..." : "Complete Test"}
        </button>
      </div>
    </form>
  );
};

export default UploadReport;
