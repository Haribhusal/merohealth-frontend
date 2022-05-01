import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";

const LabLayout = ({ children }) => {
  const router = useRouter();
  return (
    <main
      className={
        router.pathname === "/lab/profile"
          ? "lab-page lab-profile"
          : "lab-page "
      }
    >
      <section className="hero">
        <div className="container-fluid">
          <div className="row wrappingColumn">
            <Sidebar />
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LabLayout;
