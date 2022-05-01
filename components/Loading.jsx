/* eslint-disable @next/next/no-img-element */
import React from "react";

const Loading = () => {
  return (
    <div className="loadingScreen">
      <div className="imagewraper">
        <div className="animatedLayer"></div>
        <img src="/media/load-svg.svg" alt="" />
      </div>
    </div>
  );
};

export default Loading;
