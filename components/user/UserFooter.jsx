/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const UserFooter = () => {
  return (
    <footer className="userFooter">
      <section className="upper">
        <div className="container">
          <div className="row overlapLayer">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="socialmedia">
                <small className="">Our social media</small>
                <ul className="socialicons d-flex">
                  <li className="icon">
                    <a target="_blank" href="https://www.facebook.com/merohealth.np">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a target="_blank" href="https://www.instagram.com/merohealth.np/">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a target='_blank' href="https://www.medium.com/">
                      <i className="lab la-medium"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a target='_blank' href="https://www.youtube.com/channel/UCRZU3HH2L12R6Nwv15k1r1g">
                      <i className="lab la-youtube"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a target="_blank" href="https://twitter.com/merohealth01">
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-start justify-content-md-end align-items-center">
              <Link href="/">
                <a>
                  <div className="tollFree d-flex align-items-center">
                    <div className="icon">
                      <i className="las la-headset la-5x"></i>
                    </div>
                    <div className="info">
                      <small>Call us at our Toll Free Number</small>
                      <h3 className="title mt-2 mb-0">1660 615 2022</h3>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="midFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="branding">
                <img src="/media/logo.svg" className="img-fluid" alt="" />

                <p className=" small my-3">
                  Merohealth is a platform for both healthcare providers and
                  patients to connect and manage health test requests.
                </p>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="links">
                <h5 className=" mb-3 text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/mission">
                      <a>Our Mission</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vision">
                      <a>Our Vision</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/values">
                      <a>Our Values</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Our Team</a>
                    </Link>

                    <Link href="/partners">
                      <a>Our Partners</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="links">
                <h5 className=" mb-3 text-uppercase">Login/Register</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/signup">
                      <a>Create User/Patient Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Patient Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Lab Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="links">
                <h5 className=" mb-3 text-uppercase">Navigate</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/blog-page">
                      <a>Our Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/terms">
                      <a>Terms &amp; Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/authorities">
                      <a>Authorities</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="links">
                <h5 className=" mb-3 text-uppercase">Subscribe Now</h5>
                <p className="small">
                  Join our Newsletters for Regular Health Articles
                </p>
                <form action="" className="mt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="btn btn_p">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="textwrapper">
                <p className="mb-0">&copy; Merohealth, All Rights Reserved</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="textwrapper">
                <p className="mb-0">Powered by Prarambha Group Pvt. Ltd.</p>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-start justify-content-sm-end">
              <div className="textwrapper">
                <p className="mb-0">
                  <Link href="#top">
                    <a>
                      Top
                      <i className="las la-arrow-up"></i>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="socialicons">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="followlinks">
                <strong>Follow us</strong>
                <ul className="d-flex">
                  <li>
                    <a href="#">
                      <i className="la la-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="la la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="la la-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="la la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="la la-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-end text-right">
              <div className="followlinks">
                <strong>Tollfree Number for Emergency</strong>
                <h3 className="number">1660 615 2022 </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footerMain">
        <div className="container">
          <div className="row pb-5">
            <div className="col-sm-4">
              <div className="footerBrand">
                <strong className="title">How MeroHealth Works?</strong>
                <p className="text-muted">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quae, pariatur nisi neque nemo quos aspernatur. Porro minus
                  expedita cumque, sapiente quas rerum. Saepe, voluptatibus
                  ipsum blanditiis quibusdam modi tenetur voluptatum?
                </p>
                <a href="#" className="btn btn-link">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="subscribewrapper">
                <strong className="title">
                  Subscribe and get free health tips
                </strong>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime voluptates porro quam!
                </p>
                <form action="" className="subscribeForm d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                  />
                  <button type="submit" className="btn btn_p">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="linksWrapper">
                <strong className="title">For Laboratories</strong>
                <ul className="links">
                  <li>
                    <Link href="/lab-signup">
                      <a className="link">Create an account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="login">
                      <a className="link">Login</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer_menu">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light py-2">
                <a className="navbar-brand" href="#">
                  <img
                    src="../media/logo-white.svg"
                    alt="MeroHealth Logo"
                    className="img-fluid logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        How it works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        How it works
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto navbar-right">
                    <li className="nav-item mr-2">
                      <Link href="login">
                        <a className=" btn btn_p_b rounded">
                          Patient/User Login
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/signup">
                        <a className="btn btn_p rounded">
                          Create Patient Account
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="textwrap left">
                &copy; 2021, Prarambha Group Pvt. Ltd, All Rights Reserved
              </div>
            </div>
            <div className="col-sm-6">
              <div className="textwrap right">
                Design with &hearts; by Prarambha Group Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </footer>
  );
};

export default UserFooter;
