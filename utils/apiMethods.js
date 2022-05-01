import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {

    if (error.response.status === 401) {
      // localStorage.clear();
    };
    if (error.response.status === 500) {
      if (error.response.data) {
        // toast.error(error.response.data.message);
        console.log(error.response.data.message);
      }
      else {
        //  toast.error("Server is not responding, please try again later.");
        console.log("server is not responding.");
      }
    }
    if (error.response.status === 401) {
      if (error.response.data) {
        // toast.error("Unauthorized");
        console.log("Unauthorized");
      } else {
        // toast.error("Your session has expired, please login again.");
        console.log("your session has expired, please login again");
      }
      if (localStorage.getItem("accessToken")) {
        localStorage.clear();
        window.location.href = "/";
      }
    } else {
      console.log(error.response.data);
      if (error.response.data.result && error.response.data.result.message) {
        // toast.error(error.response.data.result.message);
        console.log(error.response.data.result.message);
      }
      else {
        console.log("Bad request");
      }
    }
  }
  return Promise.reject(error);
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
