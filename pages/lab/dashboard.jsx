// lab dashboard

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import LabLayout from "../../components/lab/LabLayout";
import Loading from "../../components/Loading";
import withAuth from "../../config/withAuth";
import { labActions } from "../../services/lab/action";
import { appUtils } from "../../utils/appUtils";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);
  const { data, loading, status } = lab.getPackage;
  const {
    data: labProfileData,
    loading: labProfileLoading,
    status: labProfileStatus,
  } = lab.getLabProfile;

  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    dispatch(labActions.getPackage());
    dispatch(labActions.getLabProfile());
  }, [dispatch]);

  useEffect(() => {
    setLoadingStatus(true);
    setInterval(() => {
      setLoadingStatus(false);
    }, 1000);
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
  }, [router]);

  return (
    <LabLayout>
      {loadingStatus && <Loading />}
      <div className="col-sm-9 middlebar py-3">
        <div className="top d-flex justify-content-between align-items-center my-3">
          <div className="row w-100">
            <div className="col-sm-12">
              {labProfileStatus === "success" && (
                <h6 className="title  d-block">
                  {labProfileLoading ? (
                    <Skeleton />
                  ) : (
                    <div className=" d-flex justify-content-between">
                      <div className="small d-block">
                        <div className="sub">Welcome to</div>{" "}
                        <h3 className="title f30">{labProfileData.name} </h3>
                      </div>

                      <div className="status">
                        {labProfileData.is_approved === false && (
                          <Badge bg="warning" className="small">
                            Pending
                          </Badge>
                        )}
                        {labProfileData.is_approved === true && (
                          <Badge bg="success" className="text-white small">
                            Approved
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </h6>
              )}
            </div>
          </div>
        </div>
        <div className="end">
          <div className="row w-100">
            {labProfileLoading && (
              <div className="col-sm-12">
                <div
                  className="d-flex bg_p_dim rounded p justify-content-between"
                  role="alert"
                >
                  <Skeleton />
                </div>
              </div>
            )}
            {labProfileStatus === "success" && (
              <div className="col-sm-12">
                {(labProfileData.display_picture === null ||
                  labProfileData.cover_picture === null ||
                  labProfileData.lab_profile.overview === null) && (
                  <div
                    className="d-flex bg_p_dim rounded p justify-content-between"
                    role="alert"
                  >
                    <div className="notify flex5 d-flex justify-content-between align-items-center">
                      <div className="icon">
                        <div className="iconwrapper">
                          <i className="las la-hospital"></i>
                        </div>
                      </div>
                      <div className="text text-wrapper">
                        <h5 className="text_p fw600 f16">
                          Complete your profile
                        </h5>
                        <p className="text text_dim f14">
                          Please complete your profile to get full features!
                        </p>
                      </div>
                    </div>
                    <div className="flex2 d-flex justify-content-end">
                      <Link href="/lab/profile">
                        <a className="">
                          <button className="btn px-2 py-1 bg_p_dim f14 fw600 text_p">
                            Update Profile
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="row w-100">
            <div className="col-sm-12 d-flex gap">
              <div className="statitem p mt-3 rounded w-100 bg_p_dim d-flex align-items-center justify-content-between">
                <div className="text">
                  <div className="title small text-muted">
                    Test Requests Today
                  </div>
                  <h3 className="value text_p f30 fw800">34</h3>
                </div>
                <div className="icon">
                  <i className="las la-flask f50 text-muted"></i>
                </div>
              </div>
              <div className="statitem p mt-3 rounded w-100 bg_p_dim d-flex align-items-center justify-content-between">
                <div className="text">
                  <div className="title small text-muted">
                    Test Requests this week
                  </div>
                  <h3 className="value text_p f30 fw800">343</h3>
                </div>
                <div className="icon">
                  <i className="las la-flask f50 text-muted"></i>
                </div>
              </div>
              <div className="statitem p mt-3 rounded w-100 bg_p_dim d-flex align-items-center justify-content-between">
                <div className="text">
                  <div className="title small text-muted">
                    Test Requests this month
                  </div>
                  <h3 className="value text_p f30 fw800">3433</h3>
                </div>
                <div className="icon">
                  <i className="las la-flask f50 text-muted"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-wrapper">
              <h6 className="sub_title my-3">Profit Analysis</h6>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-sm-4">
              <div className="card statitem bg_w  rounded shw">
                <div className="stat  d-flex justify-content-between align-items-center">
                  <div className="icon">
                    <div className="iconwrapper">
                      <i className="las la-rupee-sign"></i>
                    </div>
                  </div>
                  <div className="text text-wrapper">
                    <div className=" small text-muted">Income Today</div>
                    <h5 className="text_p title">Rs. 23000/-</h5>
                  </div>
                  <div className="status text-wrapper">
                    <div className="">
                      <i className="las text_p la-angle-double-up"></i>
                    </div>
                    <div className="text_p">10%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card bg_w statitem rounded shw">
                <div className="stat d-flex justify-content-between align-items-center">
                  <div className="icon">
                    <div className="iconwrapper">
                      <i className="las la-rupee-sign"></i>
                    </div>
                  </div>
                  <div className="text text-wrapper">
                    <div className=" small text-muted">Income This Week</div>
                    <h5 className="text_p title">Rs. 23000/-</h5>
                  </div>
                  <div className="status text-wrapper">
                    <div className="">
                      <i className="las text_d la-angle-double-down"></i>
                    </div>
                    <div className="text_d">10%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card bg_w statitem rounded shw">
                <div className="stat d-flex justify-content-between align-items-center">
                  <div className="icon">
                    <div className="iconwrapper">
                      <i className="las la-rupee-sign"></i>
                    </div>
                  </div>
                  <div className="text text-wrapper">
                    <div className=" small text-muted">Income Month</div>
                    <h5 className="text_p title">Rs. 23000/-</h5>
                  </div>
                  <div className="status text-wrapper">
                    <div className="">
                      <i className="las text_p la-angle-double-up"></i>
                    </div>
                    <div className="text_p">10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LabLayout>
  );
};

export default withAuth(Dashboard);
