/* eslint-disable @next/next/no-img-element */
import React from "react";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="bg">
      <UserHeader />
      <main className="mainbody userDashboardPage">
        <section className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <UserSidebar />
              </div>
              <div className="col-sm-9">{children}</div>
            </div>
          </div>
        </section>
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
