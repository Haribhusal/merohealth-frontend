import Link from "next/link";
import React from "react";

const SearchTestItem = ({ item, goToRoute }) => {
  return (
    <div className="searchFeatured" onClick={() => goToRoute(item.lab.slug, 1)}>
      <div className="test_service d-flex justify-content-between">
        <div className="name">
          <i className="las la-flask f16"></i> {item.name}
        </div>
        <div className="price">Rs. {item.price}</div>
      </div>
      <div className="labDetails">
        <div className="d-flex">
          <div className="left">
            <strong>{item.lab.name}</strong>
            <div className="inffo">
              <p className="small mb-0 text-muted">
                {item.lab.lab_address[0].full_address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="offers starswrap d-flex align-items-center justify-content-between">
        <div className="offer">
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
  );
};

export default SearchTestItem;
