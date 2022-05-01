import React, { useEffect, useState } from "react";

import { userActions } from "../services/user/action";

function Items({ currentItems }) {
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>{/* <h3>{item.lab.name}</h3> */}</div>
        ))}
    </div>
  );
}
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";

const PaginationComponent = ({ children, data, onFunc }) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);

  const onChangePaginate = (pageNumber) => {
    setActivePage(pageNumber);
    onFunc(pageNumber * 10 - 10);
    router.push({
      pathname: "/search",
      query: { keyword: router.query.keyword, page: pageNumber },
    });
  };

  useEffect(() => {
    setActivePage(parseInt(router.query.page));
  }, [router.query.page]);

  return (
    <div>
      {children}
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
  );
};

export default PaginationComponent;
