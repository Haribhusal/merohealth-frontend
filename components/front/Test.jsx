import Link from "next/link";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Test = ({ title, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <Link href={`/search?keyword=${title}`}>
      <a>
        <div className="test boxwrapper">
          <h3 className="title">
            <i className="las la-flask"></i>
            <div className="text"> {title}</div>
          </h3>

        </div>
      </a>
    </Link>
  );
};

export default Test;
