import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

const UserSettingsLayout = ({ children, active, setActive }) => {
  return (
    <div className="bg">
      <UserHeader />
      <main className="dashboard-settings">
        <section className="user-settings">
          <div className="container">
            <div className="row">

              <div className="col-sm-10 offset-sm-1 bg_w">
                <div className="editProfileWrapper">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <UserFooter />
    </div >
  );
};

export default UserSettingsLayout;
