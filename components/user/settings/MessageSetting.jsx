import React from "react";

const MessageSetting = () => {
  return (
    <div className="tab-pane fade show active" id="messages">
      <div className="textwrapper">
        <div className="title f16 text_p">Messaging Settings</div>
      </div>
      <div className="formwrapper">
        <form>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label
                  className="form-check-label f14 text-muted"
                  htmlFor="inlineCheckbox1"
                >
                  Get Messages from Doctor
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label
                  className="form-check-label f14 text-muted"
                  htmlFor="inlineCheckbox2"
                >
                  Get Messages from Lab
                </label>
              </div>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn_p">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageSetting;
