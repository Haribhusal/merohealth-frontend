import React from "react";

const NotificationSetting = () => {
  return (
    <div className="tab-pane fade show active" id="notifications">
      <div className="textwrapper">
        <div className="title f16 text_p">Notifications Settings</div>
      </div>
      <div className="formwrapper">
        <form>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="form-check-label f14 text-muted"
                  htmlFor="inlineRadio1"
                >
                  Show Notifications
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="form-check-label f14 text-muted"
                  htmlFor="inlineRadio2"
                >
                  Hide Notifications
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

export default NotificationSetting;
