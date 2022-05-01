import { appUtils } from "../../utils/appUtils";
import { authServices } from "./api";
import * as authConst from "./types";

export const authActions = {
  login: (formdata) => (dispatch) => {
    dispatch({ type: authConst.LOGIN_USER_REQUEST });
    authServices
      .login(formdata)
      .then((response) => {
        dispatch({
          type: authConst.LOGIN_USER_SUCCESS,
          payload: response.data,
        });
        appUtils.setToken(response.data.access);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        dispatch({
          type: authConst.LOGIN_USER_FAILURE,
          payload: error.response.data,
        });
      });
  },
  signUp: (formdata) => (dispatch) => {
    dispatch({ type: authConst.SIGNUP_USER_REQUEST });
    authServices
      .signUp(formdata)
      .then((response) => {
        dispatch({
          type: authConst.SIGNUP_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConst.SIGNUP_USER_FAILURE,
          payload: error.response.data,
        });
      });
  },
  //   logout: (formdata) => (dispatch) => {
  //     dispatch({ type: authConst.LOGOUT_USER_REQUEST });
  //     authServices
  //       .logout(formdata)
  //       .then((response) => {
  //         // dispatch({
  //         //     type: authConst.LOGOUT_USER_SUCCESS,
  //         //     payload: response.data.data,
  //         // });
  //         localStorage.clear();
  //         window.location.href = "/";
  //       })
  //       .catch((error) => {
  //         dispatch({
  //           type: authConst.LOGOUT_USER_FAILURE,
  //           payload: "Failed to logout",
  //         });
  //       });
  //   },
  companyCategory: () => (dispatch) => {
    dispatch({ type: authConst.COMPANY_CATEGORY_REQUEST });
    authServices
      .companyCategory()
      .then((response) => {
        dispatch({
          type: authConst.COMPANY_CATEGORY_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConst.COMPANY_CATEGORY_FAILURE,
          payload: "company category failed",
        });
      });
  },

  // state list
  stateList: () => (dispatch) => {
    dispatch({ type: authConst.STATE_LIST_REQUEST });
    authServices
      .stateList()
      .then((response) => {
        dispatch({
          type: authConst.STATE_LIST_SUCCESS,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConst.STATE_LIST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  // district list
  districtList: (id) => (dispatch) => {
    dispatch({ type: authConst.DISTRICT_LIST_REQUEST });
    authServices
      .districtList(id)
      .then((response) => {
        dispatch({
          type: authConst.DISTRICT_LIST_SUCCESS,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConst.DISTRICT_LIST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  // municipality list
  municipalityList: (id) => (dispatch) => {
    dispatch({ type: authConst.MUNICIPALITY_LIST_REQUEST });
    authServices
      .municipalityList(id)
      .then((response) => {
        dispatch({
          type: authConst.MUNICIPALITY_LIST_SUCCESS,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConst.MUNICIPALITY_LIST_FAILURE,
          payload: error.response.data,
        });
      });
  },

  labSignUp: (formdata) => (dispatch) => {
    dispatch({ type: authConst.SIGNUP_LAB_REQUEST });
    authServices
      .labSignUp(formdata)
      .then((response) => {
        dispatch({
          type: authConst.SIGNUP_LAB_SUCCESS,
          payload: response.data,
        });
        appUtils.setLabSlug(response.data.slug);
      })
      .catch((error) => {
        dispatch({
          type: authConst.SIGNUP_LAB_FAILURE,
          payload: error.response.data,
        });
      });
  },

  checkUidToken: (uid, token) => (dispatch) => {
    dispatch({ type: authConst.CHECK_UIDTOKEN_REQUEST });
    authServices
      .checkUidToken(uid, token)
      .then((response) => {
        dispatch({
          type: authConst.CHECK_UIDTOKEN_SUCCESS,
          payload: response.data,
        });
        appUtils.setLabSlug(response.data.slug);
      })
      .catch((error) => {
        dispatch({
          type: authConst.CHECK_UIDTOKEN_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postNewPassword: (uid, token, formdata) => (dispatch) => {
    dispatch({ type: authConst.NEW_PASS_REQUEST });
    authServices
      .postNewPassword(uid, token, formdata)
      .then((response) => {
        dispatch({
          type: authConst.NEW_PASS_SUCCESS,
          payload: response.data,
        });
        appUtils.setLabSlug(response.data.slug);
      })
      .catch((error) => {
        dispatch({
          type: authConst.NEW_PASS_FAILURE,
          payload: error.response.data,
        });
      });
  },
};
