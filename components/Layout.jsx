import { useEffect, useState } from "react";
import Meta from "./Meta";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
};

export default Layout;
