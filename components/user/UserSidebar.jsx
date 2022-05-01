import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const UserSidebar = () => {
  const router = useRouter();

  return (
    <div className="leftbarwrapper">
      <div className="box">
        <div className="box_content rounded">
          <ul className="list">
            <li
              className={router.pathname === "/user/dashboard" ? "active" : ""}
            >
              <Link href="/user/dashboard">
                <a className="d-flex justify-content-between text-wrapper">
                  <div className="text">
                    <i className="las la-tachometer-alt mr-2 text-p"></i>
                    Dashboard
                  </div>
                  <div className="count">
                    <small></small>
                  </div>
                </a>
              </Link>
            </li>
            {/* <li className="">
              <a
                href="my-activities.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  <i className="las la-user-clock mr-2"></i>
                  Activities
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="family-associates.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  <i className="las la-users mr-2"></i>Associates
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="medical-history.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  <i className="las la-file-medical-alt mr-2"></i>
                  History
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li> */}
            {/* <div className="divider"></div>
            <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">Discussions</p>
            </div>
            <li>
              <a
                href="health-queries.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="las la-comments mr-2"></i>Health Queries
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li> */}
            <div className="divider"></div>

            <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">
                Laboratory Services
              </p>
            </div>
            <li className={router.pathname === "/user/request" ? "active" : ""}>
              <Link href="/user/request">
                <a className="d-flex justify-content-between text-wrapper">
                  <div className="text">
                    <i className="lar la-address-card mr-2"></i>Test Requests
                  </div>
                  <div className="count">
                    <small>
                      <i className="lar la-bell"></i>2
                    </small>
                  </div>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/user/request" ? "active" : ""}>
              <Link href="/user/request">
                <a className="d-flex justify-content-between text-wrapper">
                  <div className="text">
                    <i className="las la-file-medical-alt mr-2"></i>
                    Test Reports
                  </div>
                  <div className="count">
                    <small></small>
                  </div>
                </a>
              </Link>
            </li>

            <div className="divider"></div>
            <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">Profile</p>
            </div>
            <li className={router.pathname === "/user/profile" ? "active" : ""}>
              <Link href="/user/profile">
                <a className="d-flex justify-content-between text-wrapper">
                  <div className="text">
                    <i className="lar la-address-card mr-2"></i>My Profile
                  </div>
                </a>
              </Link>
            </li>
            {/* <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">Doctor Services</p>
            </div>
            <li>
              <a
                href="doctor-appointment.php"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="las la-user-nurse mr-2"></i>
                  Appointments
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li>
              <a
                href="doctor-prescriptions.php"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="lar la-file-alt mr-2"></i>
                  Prescriptions
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <div className="divider"></div> */}
            {/* <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">Hygenic Products</p>
            </div>
            <li>
              <a
                href="shop.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="las la-shopping-cart mr-2"></i>Go to Shop
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li>
              <a
                href="product-orders.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="las la-luggage-cart mr-2"></i>My Orders
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li>
              <a
                href="my-product-offers.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  <i className="las la-percent mr-2"></i>Offers
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li> */}
            {/* <div className="divider"></div> <div className="text-wrapper">
            
              <p className="f12 text-muted fbold text_dim">Hospital Services</p>
            </div>
            <li>
              <a
                href="hospital-appointments.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="las la-hospital mr-2"></i>
                  Appointments
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li>
              <a
                href="hospital-reports.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="lar la-file-alt mr-2"></i>Report Card
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <div className="divider"></div> */}
            {/* <div className="text-wrapper">
              <p className="f12 text-muted fbold text_dim">Clinic Services</p>
            </div>
            <li>
              <a
                href="clinic-reports.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  <i className="las la-clinic-medical mr-2"></i>
                  Appointments
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li>
            <li>
              <a
                href="clinic-reports.html"
                className="d-flex justify-content-between text-wrapper"
              >
                <div className="text">
                  {" "}
                  <i className="lar la-file-alt mr-2"></i>Reports Card
                </div>
                <div className="count">
                  <small></small>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
