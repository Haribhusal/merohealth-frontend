import { useRouter } from "next/router";
import React, { useEffect } from "react";
import withAuth from "../../config/withAuth";
import { appUtils } from "../../utils/appUtils";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    if (!appUtils.getLabSlug()) {
      router.replace("/user/dashboard");
    }
    router.push("/lab/dashboard");
  }, [router]);

  return <div></div>;
};

export default withAuth(Index);
