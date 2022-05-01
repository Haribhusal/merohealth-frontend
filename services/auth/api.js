import { BASE_API } from "../../utils/apiConstants";
import apiMethods from "../../utils/apiMethods";
import { appUtils } from "../../utils/appUtils";

export const authServices = {
  login: (formdata) => {
    return apiMethods.post(`${BASE_API}auth/client-login/`, formdata);
  },
  signUp: (formdata) => {
    return apiMethods.post(`${BASE_API}user/client-register/`, formdata);
  },
  //   logout: () => {
  //     return apiMethods.post(`${BASE_API}logout`, null, appUtils.getAuthHeader());
  //   },

  companyCategory: () => {
    return apiMethods.get(`${BASE_API}company-category/list`);
  },

  stateList: () => {
    return apiMethods.get(`${BASE_API}common/province/`);
  },

  districtList: (id) => {
    return apiMethods.get(
      `${BASE_API}common/district/?province__slug=${id}&limit=25`
    );
  },
  municipalityList: (id) => {
    return apiMethods.get(
      `${BASE_API}common/municipality/?district__slug=${id}&limit=30`
    );
  },
  labSignUp: (formdata) => {
    return apiMethods.post(
      `${BASE_API}lab/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  checkUidToken: (uid, token) => {
    return apiMethods.get(`${BASE_API}user/password-reset/${uid}/${token}/`);
  },
  postNewPassword: (uid, token, formdata) => {
    return apiMethods.post(
      `${BASE_API}user/password-reset/${uid}/${token}/`,
      formdata
    );
  },
};
