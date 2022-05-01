import Link from "next/link";
import React from "react";

const LabCartProfileTab = ({ id, router, name, open, setOpen, tabIndex }) => {
  return (
    <li className="nav-item">
      <Link
        href={{
          pathname: `/profilecart/${id}`,
          query: {
            keyword: router.query.keyword,
            tab: tabIndex,
          },
        }}
      >
        <a
          className={open === tabIndex ? "nav-link active" : "nav-link"}
          onClick={() => setOpen(tabIndex)}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default LabCartProfileTab;
