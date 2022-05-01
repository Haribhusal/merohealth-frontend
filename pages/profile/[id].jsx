/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabPublicProfile from "../../components/LabPublicProfile";
import Loading from "../../components/Loading";
import UserHeader from "../../components/user/UserHeader";
import { userActions } from "../../services/user/action";

const LabProfile = () => {
  const router = useRouter();

  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.singleLabService;

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // get single lab service data
      dispatch(userActions.singleLabService(id));
    }
  }, [dispatch, id]);

  return (
    <div className="lab-profile lab-profile-public-view">
      <UserHeader />
      {loading && <Loading />}
      {status === "success" && (
        <section className="hero mt-3 mb-5 pb-5">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 middlebar">
                <div className="profilewrapper">
                  <div className="imagepart">
                    <div className="cover">
                      <img
                        src={data.cover_picture ?? "/cover.png"}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="branding d-flex gap justify-content-start">
                    <div className="flex2">
                      <div className="profile">
                        <img
                          src={data.display_picture ?? "/AvatarMaleFinal.png"}
                          alt=""
                          className="img-fluid"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="branding-details  flex10 d-flex  gap justify-content-between align-items-center">
                      <div className="brand-info flex7">
                        <div className="brand-name mb-0">
                          <h1 className="f18 mb-2">{data.name}</h1>
                        </div>
                        <div className="d-flex brand-meta gap f14">
                          <div className="meta_item address">
                            <i className="las la-clipboard-check"></i> Verified
                          </div>
                          <div className="meta_item category">
                            <i className="las la-tag"></i> Medical Lab
                          </div>
                          <div className="meta_item address">
                            <i className="las la-map"></i>{" "}
                            {data.lab_address[0].tole},{" "}
                            {data.lab_address[0].district.name}
                          </div>
                        </div>
                      </div>
                      <div className="cta flex-2">
                        <Link
                          href={{ pathname: "/search", query: { keyword: "" } }}
                        >
                          <a>
                            <button className="btn btn_p btn_cta">
                              {" "}
                              <i className="las la-flask"></i>Test Request
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="contentwrapper">
                    <LabPublicProfile data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LabProfile;
