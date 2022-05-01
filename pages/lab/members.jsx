/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import withAuth from "../../config/withAuth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import LabLayout from "../../components/lab/LabLayout";
import { labActions } from "../../services/lab/action";
import { appUtils } from "../../utils/appUtils";
import AddMembers from "../../components/lab/members/AddMembers";
import Pagination from "react-js-pagination";

const Members = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);

  // get lab member list
  const { data, status, loading } = lab.getLabMember;

  // get single data
  const {
    data: singleData,
    status: singleStatus,
    loading: singleLoading,
  } = lab.singleLabMember;

  useEffect(() => {
    // get lab member
    // dispatch(labActions.getLabMember());
    // get qualifications
    dispatch(labActions.getQualifications());
    // if there is no lab redirect to the user dashboard
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
  }, [dispatch, router]);

  // to know if the lab member clicked add new
  const [isNewMember, setIsNewMember] = useState(false);
  // to get the edit single lab data
  const [editMemberData, setEditMemberData] = useState(false);
  // set active pagination page
  const [activePage, setActivePage] = useState(1);

  // when add new button is pressed
  const onAddNew = () => {
    setIsNewMember(true);
    setEditMemberData(false);
  };

  // when single edit is pressed
  const onMemberPress = (id) => {
    setIsNewMember(false);
    dispatch(labActions.singleLabMember(id));
  };

  // once status is success get single default data
  useEffect(() => {
    if (status === "success") {
      dispatch(labActions.singleLabMember(data.results[0].id));
    }
  }, [data.results, dispatch, status]);

  // get edit member data
  useEffect(() => {
    if (status === "success") {
      if (singleStatus === "success") {
        setEditMemberData(singleData);
      }
    }
  }, [singleData, singleStatus, status]);

  // when user change pagination
  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    router.push({
      pathname: "/lab/members",
      query: { page: pageNumber },
    });
  };

  useEffect(() => {
    dispatch(
      labActions.getLabMember(
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.page]);

  return (
    <LabLayout>
      {(singleLoading || loading) && <Loading />}
      <div className="col-sm-4 fullheight middlebar">
        <div className="top my-3">
          <h6 className="title">Manage Members</h6>
          <button onClick={onAddNew} className="btn btn_p">
            Add New
          </button>
        </div>
        <div className="end labmembers">
          <div className="upper">
            {status === "success" && (
              <ul className="services">
                {data.results.map((item, index) => (
                  <li
                    key={index}
                    className={
                      editMemberData.id == item.id ? "mb-3 active" : "mb-3"
                    }
                    onClick={() => onMemberPress(item.id)}
                  >
                    <div className="service-wrapper d-flex">
                      <div className="icon">
                        <img
                          src={
                            item.profile_picture != null
                              ? item.profile_picture
                              : "/AvatarMaleFinal.png"
                          }
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="">
                          <h6 className="text mb-2 text_p">
                            {item.user_data.full_name}
                          </h6>
                          <p className="text text_dim text_small mb-0 ">
                            {item.role} - {item.qualification?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {data.count >= 10 && (
                  <li className="my-3 d-flex justify-content-between align-items-center">
                    <div>
                      <small>
                        Showing{" "}
                        {!!router.query.page ? router.query.page * 10 - 10 : 0}{" "}
                        -{" "}
                        {data.next === null
                          ? data.count
                          : !!router.query.page
                          ? router.query.page * 10
                          : 10}{" "}
                        of total {data.count}
                      </small>
                    </div>
                    <Pagination
                      activePage={activePage}
                      itemsCountPerPage={10}
                      totalItemsCount={data.count}
                      pageRangeDisplayed={5}
                      onChange={onChangePaginate}
                      innerClass="pagination"
                      itemClass="page-item"
                      activeLinkClass="page-link active"
                      linkClass="page-link"
                      prevPageText="Previous"
                      nextPageText="Next"
                    />
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <AddMembers
        lab={lab}
        editData={editMemberData}
        isNewMember={isNewMember}
        setIsNewMember={setIsNewMember}
        setEditData={setEditMemberData}
        dispatch={dispatch}
      />
    </LabLayout>
  );
};

export default withAuth(Members);
