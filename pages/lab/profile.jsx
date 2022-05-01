/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import LabLayout from "../../components/lab/LabLayout";
import withAuth from "../../config/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { labActions } from "../../services/lab/action";
import Loading from "../../components/Loading";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import TabsComp from "../../components/lab/profile/Tabs";
import EditOverviewModal from "../../components/lab/profile/EditOverviewModal";
import EditProfileModal from "../../components/lab/profile/EditProfileModal";
import { appUtils } from "../../utils/appUtils";
import UpdateCoverPhoto from "../../components/lab/profile/UpdateCoverPhoto";
import UploadGallery from "../../components/lab/profile/UploadGallery";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);
  const {
    data: labProfileData,
    loading: labProfileLoading,
    status: labProfileStatus,
  } = lab.getLabProfile;
  const { data: labMemberData, status: labMemberStatus } = lab.getLabMember;

  const [showGallery, setShowGallery] = useState(false);
  const [showUpdateCover, setShowUpdateCover] = useState(false);
  const [showOverviewEdit, setshowOverviewEdit] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [isProfileOrCover, setIsProfileOrCover] = useState(0);

  useEffect(() => {
    // get lab profile
    dispatch(labActions.getLabProfile());
    // get lab member
    dispatch(labActions.getLabMember());
    // get gallery images
    dispatch(labActions.galleryImages());
    // if no lab slug then redirect
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
  }, [dispatch, router]);

  useEffect(() => {
    if (labProfileStatus === "success") {
      // console.log(labProfileData.lab_address[0].tole);
    }
  }, [labProfileData, labProfileStatus]);
  // useEffect(() => {
  //   console.log(showOverviewEdit);
  // }, [showOverviewEdit]);

  const onUploadImage = () => {
    dispatch(labActions.uploadGallery());
  };

  return (
    <LabLayout>
      {labProfileLoading && <Loading />}
      <div className="col-sm-9 middlebar">
        <div className="profilewrapper">
          <div className="buttonwrap my-3 d-flex justify-content-between px-3">
            <div className="textwrapper d-flex gap align-items-center">
              <i className="las la-hospital px-2 py-2 bg_p_dim rounded text_p"></i>
              <div className="info">
                <h3 className="title f16 fw700 text_p">
                  {labProfileLoading ? (
                    <Skeleton />
                  ) : (
                    `You are managing ${labProfileData.name}`
                  )}
                </h3>
                <p className="text-muted small">
                  Update your profile and let your patients know about your
                  laboratory.
                </p>
              </div>
            </div>
            <Link href={`/profile/${labProfileData.slug}`}>
              <a target="_blank">
                <button className="btn btn_p d-flex align-items-center">
                  {" "}
                  <i className="las la-globe"></i>
                  <span className="px-2">Public Profile</span>
                </button>
              </a>
            </Link>
          </div>
          <div className="imagepart">
            <div className="cover">
              <i
                className="las la-pen edit"
                onClick={() => {
                  setIsProfileOrCover(2);
                  setShowUpdateCover(true);
                }}
              ></i>
              <img
                src={labProfileData.cover_picture ?? "/cover.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="branding d-flex gap justify-content-start">
            <div className="flex2">
              <div className="profile">
                <i
                  className="las la-pen edit"
                  onClick={() => {
                    setIsProfileOrCover(1);
                    setShowUpdateCover(true);
                  }}
                ></i>

                <img
                  src={labProfileData.display_picture ?? "/AvatarMaleFinal.png"}
                  alt=""
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="branding-details  flex10 d-flex  gap justify-content-between align-items-center">
              <div className="brand-info flex7">
                <div className="brand-name mb-0">
                  <i
                    className="las la-pen edit"
                    onClick={() => setShowEditProfile(true)}
                  ></i>
                  <h1 className="f18 mb-2">
                    {labProfileLoading ? (
                      <div className="w-50">
                        <Skeleton />
                      </div>
                    ) : (
                      labProfileData.name
                    )}
                  </h1>
                </div>
                <div className="d-flex brand-meta gap f14">
                  <div className="meta_item address">
                    <i className="las la-clipboard-check"></i>{" "}
                    {labProfileData.is_approved ? "Verified" : "Not Verified"}
                  </div>
                  <div className="meta_item category">
                    <i className="las la-tag"></i>{" "}
                    {labProfileData.organization_type}
                  </div>
                  {labProfileData.lab_address && (
                    <div className="meta_item address">
                      <i className="las la-map"></i>{" "}
                      {labProfileData.lab_address[0]?.tole},{" "}
                      {labProfileData.lab_address[0]?.district?.name}
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="cta flex-2">
                <Link href={{ pathname: "/search", query: { keyword: "" } }}>
                  <a>
                    <button className="btn btn_p btn_cta">
                      <i className="las la-flask"></i>Test Request
                    </button>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="contentwrapper">
            {labProfileStatus === "success" && (
              <TabsComp
                lab={lab}
                dispatch={dispatch}
                data={labProfileData}
                labMemberData={labMemberData}
                labMemberStatus={labMemberStatus}
                setshowOverviewEdit={setshowOverviewEdit}
                setShowGallery={setShowGallery}
              />
            )}
            <div className="lab-footer small text-center mb-5">
              If you have any queries, you can call us at our Toll Free Number{" "}
              <a href="tel:1660016152022">1660016152022</a> or write us at{" "}
              <a href="mailto:info@merohealthapp.com">info@merohealthapp.com</a>
            </div>
          </div>
        </div>
      </div>
      {showUpdateCover && (
        <UpdateCoverPhoto
          show={showUpdateCover}
          setShow={setShowUpdateCover}
          dispatch={dispatch}
          isProfileOrCover={isProfileOrCover}
        />
      )}
      {showGallery && (
        <UploadGallery
          show={showGallery}
          setShow={setShowGallery}
          dispatch={dispatch}
          galleryImage={labProfileData.lab_images}
        />
      )}
      {showOverviewEdit && (
        <EditOverviewModal
          show={showOverviewEdit}
          setShow={setshowOverviewEdit}
          overviewData={labProfileData.lab_profile}
          dispatch={dispatch}
          lab={lab}
        />
      )}
      {showEditProfile && (
        <EditProfileModal
          show={showEditProfile}
          setShow={setShowEditProfile}
          profileData={labProfileData}
          dispatch={dispatch}
          lab={lab}
        />
      )}
    </LabLayout>
  );
};

export default withAuth(Profile);
