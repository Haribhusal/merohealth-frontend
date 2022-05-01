/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { appUtils } from "../../utils/appUtils";
import Loading from "../Loading";

const Sidebar = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      appUtils.removeToken();
      appUtils.clearLocalStorage();
      router.push("/");
    }, 3000);
  };

  return (
    <div className="col-sm-3 fullheight leftbar">
      {loading && <Loading />}
      <div className="top pt-3">
        <Link href="/">
          <a>
            <div className="logowrapper">
              <img src="../media/logo.svg" alt="" className="img-fluid" />
            </div>
          </a>
        </Link>
      </div>
      <div className="end">
        {/* <div className="spacer"></div> */}
        <div className="middle mt-3">
          <ul className="menuwrapper">
            <li
              className={router.pathname === "/lab/dashboard" ? "active" : ""}
            >
              <Link href="/lab/dashboard">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-tachometer-alt"></i>
                  </div>
                  <div className="text">Dashboard</div>
                </a>
              </Link>
            </li>

            <li className={router.pathname === "/lab/profile" ? "active" : ""}>
              <Link href="/lab/profile">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-hospital"></i>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <div className="leftlabel">Profile</div>
                  </div>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/lab/services" ? "active" : ""}>
              <Link href="/lab/services">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-flask"></i>
                  </div>
                  <div className="text">Services</div>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/lab/packages" ? "active" : ""}>
              <Link href="/lab/packages">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-medkit"></i>
                  </div>
                  <div className="text">Health Packages</div>
                </a>
              </Link>
            </li>

            <li
              className={router.pathname === "/lab/testrequest" ? "active" : ""}
            >
              <Link
                href={{ pathname: "/lab/testrequest", query: { tab: "new" } }}
              >
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-vials"></i>
                  </div>
                  <div className="text">Test Requests</div>
                  {/* <div className="notify">4</div> */}
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/lab/members" ? "active" : ""}>
              <Link href="/lab/members">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-users"></i>
                  </div>
                  <div className="text">Lab Members</div>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/user/dashboard">
                <a className="menuwrap">
                  <div className="icon">
                    <i className="las la-random"></i>
                  </div>
                  <div className="text">Switch to User Account</div>
                </a>
              </Link>
            </li>

            <li>
              <a href="#" className="menuwrap" onClick={logout}>
                <div className="icon">
                  <i className="las la-sign-out-alt"></i>
                </div>
                <div className="text">Logout</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="spacer"></div>
        <div className="bottom mt-5">
          <h6 className="text-muted px-2 py-3">Powered By:</h6>
          <Link href="/">
            <a>
              <div className="logowrapper px-2">
                <img
                  src="/media/logo.svg"
                  alt=""
                  className="img-fluid"
                  style={{ width: "120px" }}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
