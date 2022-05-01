import Link from "next/link";
import React from "react";
import Image from "next/image";

const SearchLabItem = ({ item, goToRoute }) => {
  return (
    <div className="searchFeatured" onClick={() => goToRoute(item.slug, 0)}>
      <div className="labDetails">
        <div className="d-flex gap">
          {/* <div className="logo">
            <Image
              src={item.display_picture}
              alt="logo"
              height={40}
              width={40}
              layout="fixed"
              className="fit-cover"
            />
          </div> */}
          <div className="left">
            <strong>{item.name}</strong>
            <div className="inffo">
              <p className="small mb-0 text-muted">
                {item.lab_address[0].district.name}, {item.lab_address[0].tole}
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

export default SearchLabItem;
