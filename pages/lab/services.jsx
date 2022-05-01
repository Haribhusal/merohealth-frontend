import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import LabLayout from "../../components/lab/LabLayout";
import ServiceForm from "../../components/lab/services/ServiceForm";
import Loading from "../../components/Loading";
import withAuth from "../../config/withAuth";
import { labActions } from "../../services/lab/action";
import { appUtils } from "../../utils/appUtils";

const LabServices = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);
  const { data, loading, status } = lab.getLabTest;
  const {
    loading: postLabLoading,
    status: postLabStatus,
    error: postLabError,
  } = lab.postLabTest;
  const { loading: editLabLoading, status: editLabStatus } = lab.editLabTest;
  const { status: deleteLabStatus } = lab.deleteLabTest;
  const {
    data: testData,
    loading: testLoading,
    status: testStatus,
  } = lab.getPredefinedTest;

  const [activeService, setActiveService] = useState(0);
  const [newService, setNewService] = useState(false);
  const [editServiceData, setEditServiceData] = useState(false);
  const [activePage, setActivePage] = useState(1);

  // get lab test data and predefined test data
  useEffect(() => {
    dispatch(labActions.getPredefinedTest());
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
  }, [dispatch, router]);

  const onServiceClick = (index, item) => {
    setActiveService(index);
    setNewService(false);
    setEditServiceData(item);
  };

  // on click add new button
  const onAddNewClick = () => {
    setActiveService(false);
    setNewService(true);
    setEditServiceData(false);
  };

  useEffect(() => {
    if (status === "success") {
      if (data.count === 0) {
        setActiveService(false);
        setNewService(true);
        setEditServiceData(false);
      } else {
        const serviceData = data.results[activeService];
        setEditServiceData(serviceData);
      }
    }
  }, [activeService, data, postLabError, status]);

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    // dispatch(labActions.getLabTest(pageNumber * 10 - 10));
    router.push({
      pathname: "/lab/services",
      query: { page: pageNumber },
    });
  };

  useEffect(() => {
    dispatch(
      labActions.getLabTest(
        !!router.query.page ? parseInt(router.query.page * 10 - 10) : 0
      )
    );
    setActivePage(!!router.query.page ? parseInt(router.query.page) : 1);
  }, [dispatch, router.query.page]);

  return (
    <LabLayout>
      {loading && <Loading />}
      <div className="col-sm-4 fullheight middlebar">
        <div className="top my-3">
          <h6 className="title">Manage Services</h6>
          <button onClick={() => onAddNewClick()} className="btn btn_p">
            Add New
          </button>
        </div>
        <div className="end">
          <div className="upper">
            {loading && <div className="text-center">Loading....</div>}
            {status === "success" && (
              <>
                <ul className="services">
                  {data.count === 0 && (
                    <li>
                      <div className="d-flex align-items-center justify-content-center border p-4 rounded">
                        <div className="text-wrapper">
                          <h6 className="text_p mb-0 ">No Data Found</h6>
                        </div>
                      </div>
                    </li>
                  )}
                  {data.results.map((item, index) => (
                    <li
                      key={index}
                      className={activeService === index ? "active" : ""}
                    >
                      <a
                        href="#"
                        className="service-wrapper d-flex"
                        onClick={() => onServiceClick(index, item)}
                      >
                        <div className="icon">
                          <i className="las la-flask"></i>
                        </div>
                        <div className="text-wrapper">
                          <div className="">
                            <div className="titlearea d-flex align-items-center justify-content-between">
                              <h6 className="text text_p">
                                {item.test.name}
                              </h6>
                              <strong className="">Rs. {item.price}</strong>
                            </div>
                            <p className="text text_dim text_small mb-0 ">
                              {item.test?.category?.name} (
                              {item.test?.panel?.name})
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                  {data.count >= 10 && (
                    <div className="my-3 d-flex justify-content-between align-items-center">
                      <div>
                        <small>
                          Showing{" "}
                          {!!router.query.page
                            ? router.query.page * 10 - 10
                            : 0}{" "}
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
                    </div>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      <ServiceForm
        dispatch={dispatch}
        testData={testData}
        testLoading={testLoading}
        testStatus={testStatus}
        postLabStatus={postLabStatus}
        postLabLoading={postLabLoading}
        newService={newService}
        editServiceData={editServiceData}
        editLabStatus={editLabStatus}
        editLabLoading={editLabLoading}
        deleteLabStatus={deleteLabStatus}
        setActiveService={setActiveService}
        setNewService={setNewService}
        errorMsg={postLabError}
      />
    </LabLayout>
  );
};

export default withAuth(LabServices);
