import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import LabLayout from "../../components/lab/LabLayout";
import PackagesForm from "../../components/lab/packages/PackagesForm";
import Loading from "../../components/Loading";
import withAuth from "../../config/withAuth";
import { labActions } from "../../services/lab/action";
import { appUtils } from "../../utils/appUtils";

const LabPackages = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const lab = useSelector((state) => state.lab);
  const { data, loading, status } = lab.getPackage;
  const {
    data: labTestData,
    loading: labTestLoading,
    status: labTestStatus,
  } = lab.getLabTest;

  const [activeService, setActiveService] = useState(0);
  const [newService, setNewService] = useState(false);
  const [editServiceData, setEditServiceData] = useState(false);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }

    // get lab test
    dispatch(labActions.getLabTest());
  }, [dispatch, router]);

  const onServiceClick = (index, item) => {
    setActiveService(index);
    setNewService(false);
    setEditServiceData(item);
  };

  const onAddNewClick = () => {
    setActiveService(false);
    setNewService(true);
    setEditServiceData(false);
  };

  useEffect(() => {
    if (status === "success") {
      const serviceData = data.results[activeService];
      setEditServiceData(serviceData);
      if (data.count == 0) {
        setNewService(true);
      }
    }
  }, [activeService, data, status]);

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(labActions.getPackage(pageNumber * 10 - 10));
    router.push({
      pathname: "/lab/services",
      query: { page: pageNumber },
    });
  };

  useEffect(() => {
    // get packages
    dispatch(
      labActions.getPackage(
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
          <h6 className="title">Manage Packages</h6>
          <button onClick={() => onAddNewClick()} className="btn btn_p">
            Add New
          </button>
        </div>
        <div className="end">
          <div className="upper">
            {loading && <div className="text-center">Loading....</div>}
            {status === "success" && (
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
                            <h6 className="text mb-2 text_p">{item.name}</h6>
                            <strong className="">
                              Rs. {item.actual_price}
                            </strong>
                          </div>
                          <p className="text text_dim text_small mb-0 ">
                            {item.lab_tests.map((data, index) => (
                              <span key={index}>{data.test.name},</span>
                            ))}
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
                  </div>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <PackagesForm
        dispatch={dispatch}
        lab={lab}
        labTestStatus={labTestStatus}
        labTestData={labTestData}
        labTestLoading={labTestLoading}
        newService={newService}
        editData={editServiceData}
        setNewService={setNewService}
        setActiveService={setActiveService}
      />
    </LabLayout>
  );
};

export default withAuth(LabPackages);
