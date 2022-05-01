/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Blog from "../components/front/Blog";
import UserFooter from "../components/user/UserFooter";
import UserHeader from "../components/user/UserHeader";

const BlogPage = () => {
  return (
    <div className="bg pb-5">
      <UserHeader />
      <Blog count="100" showMoreLink={false} title="Medium Blog Posts" />
      <div className="spacer"></div>
      <UserFooter />
    </div>
  );
};

export default BlogPage;
