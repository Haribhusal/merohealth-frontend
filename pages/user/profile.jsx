/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserLayout from "../../components/user/UserLayout";
import { userActions } from "../../services/user/action";
import withAuth from "../../config/withAuth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Loading from "../../components/Loading";

const UserProfile = () => {
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const { data, loading, status } = user.getProfile;

  useEffect(() => {
    dispatch(userActions.getProfile());
  }, [dispatch]);

  return (
    <UserLayout>
      <div className="midwrapper">
        {loading && <Loading />}
        <div className="profileBox bg_w p-3 rounded ">
          <div className="profiledata d-flex gap">
            <div className="leftprofile flex3 bg_p_dim p rounded d-flex align-items-center justify-content-center">
              <div className="leftprofileContent w-100">
                <h3 className="title mb-3 text-center f18 fw700 text_p">
                  My Profile
                </h3>
                <div className="imagewrapper d-flex justify-content-center">
                  <div className="image">
                    <img
                      src={
                        data.profile_picture
                          ? data.profile_picture
                          : "/AvatarMaleFinal.png"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="title mt-3 text-center">
                  <h3 className="name f20 fw700 text_p">
                    {!loading ? data.full_name : <Skeleton />}
                  </h3>
                  <p className="address text-muted f14">
                    {!loading ? (
                      data.client_address?.district.name
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                </div>
                <div className="socialInfo mt-3">
                  {!!data.social_links && (
                    <ul className="socials d-flex gap justify-content-center">
                      {data.social_links.facebook && (
                        <li className="social">
                          <a
                            href={data.social_links?.facebook}
                            className="bg_w p-2 rounded"
                          >
                            <i className="lab la-facebook-f text_p  f18"></i>
                          </a>
                        </li>
                      )}
                      {data.social_links.linkedin && (
                        <li className="social">
                          <a
                            href={data.social_links?.linkedin}
                            className="bg_w p-2 rounded"
                          >
                            <i className="lab la-linkedin text_p f18"></i>
                          </a>
                        </li>
                      )}
                      {data.social_links.instagram && (
                        <li className="social">
                          <a
                            href={data.social_links?.instagram}
                            className="bg_w p-2 rounded"
                          >
                            <i className="lab la-instagram text_p  f18"></i>
                          </a>
                        </li>
                      )}
                      {data.social_links.youtube && (
                        <li className="social">
                          <a
                            href={data.social_links?.youtube}
                            className="bg_w p-2 rounded"
                          >
                            <i className="lab la-youtube text_p f18"></i>
                          </a>
                        </li>
                      )}
                      {data.social_links.website && (
                        <li className="social">
                          <a
                            href={data.social_links?.website}
                            className="bg_w p-2 rounded"
                          >
                            <i className="las la-external-link-alt text_p f18"></i>
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
                <div className="buttonwrapper mt-4 d-flex align-items-center justify-content-center">
                  <Link
                    href={{
                      pathname: "/user/settings",
                      query: { active: 1 },
                    }}
                  >
                    <a>
                      <button className="btn btn_p f14 text-center d-flex gap text-muted">
                        <i className="las text_w la-pen"></i>
                        Edit Profile
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="meta rightprofile pl-2 flex6">
              <div className="row title">
                <div className="col-sm-12">
                  <div className="f16 mb-3  fw700 text_p">
                    Personal Information
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-birthday-cake text_p f16"></i>
                    <div className="label">Birthday</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.birthday ? data.birthday : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-weight text_p f16"></i>
                    <div className="label">Weight (in KG)</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.weight ? data.weight : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-text-height text_p f16"></i>
                    <div className="label">Height (in Ft.Inch)</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.height ? data.height : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-tint text_p f16"></i>
                    <div className="label">Blood</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.blood_group ? data.blood_group : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-user text_p f16"></i>
                    <div className="label">Gender</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.gender ? data.gender : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-flag text_p f16"></i>
                    <div className="label">Origin</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    Nepali
                  </div>
                </div>

                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-map text_p f16"></i>
                    <div className="label">Provience</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.client_address
                      ? data.client_address?.province.name
                      : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-map text_p f16"></i>
                    <div className="label">District</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.client_address
                      ? data.client_address?.district.name
                      : "N/A"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-map text_p f16"></i>
                    <div className="label">Municipality</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {!!data.client_address
                      ? data.client_address?.municipality.name
                      : "N/A"}
                  </div>
                </div>
              </div>
              <div className="row title">
                <div className="col-sm-12">
                  <div className="f16 my-3 fw700 text_p">
                    Contact Information
                  </div>
                </div>
              </div>
              <div className=" row">
                <div className="col-sm-6 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-envelope text_p f16"></i>
                    <div className="label">Email Address</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {data.email}
                  </div>
                </div>
                <div className="col-sm-6 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-phone text_p f16"></i>
                    <div className="label">Contact Number</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {data.phone_number}
                  </div>
                </div>
              </div>
              <div className="row title">
                <div className="col-sm-12">
                  <div className="f16 my-3 fw700 text_p">Habituals</div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-joint text_p f16"></i>
                    <div className="label">Smoking</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {data.is_smoker ? "Yes" : "No"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-wine-bottle text_p f16"></i>
                    <div className="label">Alcohol</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {data.is_alcoholic ? "Yes" : "No"}
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="subtitle text-muted f12 fw700 text-uppercase d-flex align-items-center">
                    <i className="las la-tablets text_p f16"></i>
                    <div className="label">Drugs</div>
                  </div>
                  <div className="data f14 px-2 bg_p_dim rounded py-1">
                    {data.is_drugaddict ? "Yes" : "No"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default withAuth(UserProfile);
