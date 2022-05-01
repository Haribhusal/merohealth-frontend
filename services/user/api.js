import { BASE_API } from "../../utils/apiConstants";
import apiMethods from "../../utils/apiMethods";
import { appUtils } from "../../utils/appUtils";

export const userServices = {
  getProfile: () => {
    return apiMethods.get(
      `${BASE_API}client/profile/`,
      appUtils.getAuthHeader()
    );
  },
  editProfile: (data) => {
    return apiMethods.put(
      `${BASE_API}client/profile/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  getTestRequest: (offset = 0) => {
    return apiMethods.get(
      `${BASE_API}client/test-requests/?offset=${offset}&limit=10&ordering=-created_at`,
      appUtils.getAuthHeader()
    );
  },
  singleTestRequest: (id) => {
    return apiMethods.get(
      `${BASE_API}client/test-requests/${id}/`,
      appUtils.getAuthHeader()
    );
  },
  getLabList: () => {
    return apiMethods.get(`${BASE_API}lab/`, appUtils.getAuthHeader());
  },
  getLabService: (name, offset = 0) => {
    return apiMethods.get(
      `${BASE_API}service/lab/?search=${name}&offset=${offset}&limit=10/`
    );
  },
  singleLabService: (slug) => {
    return apiMethods.get(`${BASE_API}service/lab/${slug}/`);
  },
  labTestByCategory: (slug) => {
    return apiMethods.get(`${BASE_API}lab/${slug}/lab-test-by-category/`);
  },
  getLabTest: (name, offset = 0, limit = 10) => {
    return apiMethods.get(
      `${BASE_API}service/lab-tests/?search=${name}&offset=${offset}&limit=${limit}`
    );
  },
  getLabPackage: (name, offset) => {
    return apiMethods.get(
      `${BASE_API}service/lab-packages/?search=${name}&offset=${offset}&limit=10`
    );
  },
  postPaymentService: (data) => {
    return apiMethods.post(
      `${BASE_API}payment/service/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  postToCart: (data) => {
    return apiMethods.post(
      `${BASE_API}payment/cart/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  getCart: () => {
    return apiMethods.get(`${BASE_API}payment/cart/`, appUtils.getAuthHeader());
  },

  removeCart: (id) => {
    return apiMethods.delete(
      `${BASE_API}payment/cart/${id}/`,
      appUtils.getAuthHeader()
    );
  },

  postPayment: (data) => {
    return apiMethods.post(
      `${BASE_API}payment/offline-method/`,
      data,
      appUtils.getAuthHeader()
    );
  },

  changePassword: (data) => {
    return apiMethods.put(
      `${BASE_API}user/change-password/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  forgetPassword: (data) => {
    return apiMethods.post(`${BASE_API}user/send/password-reset-email/`, data);
  },
};
