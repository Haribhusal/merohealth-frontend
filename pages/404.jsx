/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Error = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center bg-white"
      style={{ height: "100vh" }}
    >
      <div className="border p-5 rounded">
        <img src="../nodatafound.png" alt="" className="img-fluid w-25" />
        <h2 className="mb-4">404 page not found</h2>
        <Link href="/">
          <a>
            <button className="btn btn-sm text-uppercase font-weight-bold btn_p px-4 py-2">Go Back Home</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
