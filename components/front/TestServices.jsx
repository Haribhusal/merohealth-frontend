import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../services/user/action";

const TestServices = () => {
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);

  const { data, loading, status } = user.getLabService;

  // get all the service list data
  useEffect(() => {
    dispatch(userActions.getLabService("", 6));
  }, [dispatch]);

  return (
    <section className="featured">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlewrapper">
              <h3 className=" text_p">Test Services from Labs Near You</h3>
              <p className="text-muted mb-3">Find perfect lab for your test</p>
            </div>
          </div>
        </div>
        {loading && (
          <h5 className="text-center py-5">Loading Lab Services...</h5>
        )}
        {status === "success" && (
          <div className="row">
            {data.results.slice(0, 6).map((item, index) => (
              <div key={index} className="col-sm-4">
                <div className="featured_wrapper">
                  {item.lab_tests?.slice(0, 4).map((ele, ind) => (
                    <div
                      key={ind}
                      className="test_service d-flex justify-content-between"
                    >
                      <div className="name">
                        <i className="las la-flask"></i> {ele.name}
                      </div>
                      <div className="price">Rs. {ele.price}</div>
                      {/* <button className="btn btn_add_to_cart">
                        Test Now <i className="las la-angle-right"></i>
                      </button> */}
                    </div>
                  ))}
                  <div className="labDetails ">
                    <div className="left">
                      <Link href={`/profile/${item.slug}`}>
                        <a>
                          <strong>{item.name}</strong>
                        </a>
                      </Link>
                      <div className="inffo">
                        <p className="small mb-0 text-muted">
                          {item.lab_address[0].full_address}
                        </p>
                        <div className="wrap d-flex align-items-center gap">
                          <ul className="stars">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                          </ul>
                          <div className="count small">(23)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="offers starswrap d-flex align-items-center justify-content-between">
                    <div className="offer">10% Off</div>
                  </div> */}
                </div>
              </div>
            ))}
            {/* <div className="col-sm-4">
            <div className="featured_wrapper">
              <div className="test_service d-flex justify-content-between">
                <div className="name">
                  {/* <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip
                        id="button-tooltip-2"
                        className="text-capitalize"
                      >
                        including wbc test, rbc test and platelet test
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <div {...triggerHandler}>
                        <i
                          className="las la-medkit"
                          ref={ref}
                          roundedCircle
                        ></i>
                        White Blood Cell Count
                      </div>
                    )}
                  </OverlayTrigger> 
                </div>
                <div className="price">Rs. 3044</div>
                <button className="btn btn_add_to_cart">
                  Select <i className="las la-angle-right"></i>
                </button>
              </div>
              <div className="test_service d-flex justify-content-between">
                <div className="name">
                  <i className="las la-flask"></i> White Blood Cell Count
                </div>
                <div className="price">Rs. 3044</div>
                <button className="btn btn_add_to_cart">
                  Test Now <i className="las la-angle-right"></i>
                </button>
              </div>
              <div className="test_service d-flex justify-content-between">
                <div className="name">
                  <i className="las la-flask"></i> White Blood Cell Count
                </div>
                <div className="price">Rs. 3044</div>
                <button className="btn btn_add_to_cart">
                  Test Now <i className="las la-angle-right"></i>
                </button>
              </div>
              <div className="test_service d-flex justify-content-between">
                <div className="name">
                  <i className="las la-flask"></i> White Blood Cell Count
                </div>
                <div className="price">Rs. 3044</div>
                <button className="btn btn_add_to_cart">
                  Test Now <i className="las la-angle-right"></i>
                </button>
              </div>
              <div className="test_service d-flex justify-content-between">
                <div className="name">
                  <i className="las la-flask"></i> White Blood Cell Count
                </div>
                <div className="price">Rs. 3044</div>
                <button className="btn btn_add_to_cart">
                  Test Now <i className="las la-angle-right"></i>
                </button>
              </div>
              <div className="labDetails ">
                <div className="left">
                  <a href="#">
                    <strong>Pokhara Reference Laboratory</strong>
                  </a>
                  <div className="inffo">
                    <p className="small mb-0 text-muted">
                      New Baneshwor, Kathmandu
                    </p>
                    <div className="wrap d-flex align-items-center gap">
                      <ul className="stars">
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                        <i className="las la-star"></i>
                      </ul>
                      <div className="count small">(23)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offers starswrap d-flex align-items-center justify-content-between">
                <div className="offer">20% Off</div>
              </div>
            </div>
          </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestServices;
