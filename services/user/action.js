import { userServices } from "./api";
import * as userConst from "./types";

export const userActions = {
  getProfile: () => (dispatch) => {
    dispatch({ type: userConst.GET_PROFILE_REQUEST });
    userServices
      .getProfile()
      .then((response) => {
        dispatch({
          type: userConst.GET_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_PROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  editProfile: (data) => (dispatch) => {
    dispatch({ type: userConst.EDIT_PROFILE_REQUEST });
    userServices
      .editProfile(data)
      .then((response) => {
        dispatch({
          type: userConst.EDIT_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.EDIT_PROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getTestRequest: (offset) => (dispatch) => {
    dispatch({ type: userConst.GET_TEST_REQUEST });
    userServices
      .getTestRequest(offset)
      .then((response) => {
        dispatch({
          type: userConst.GET_TEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_TEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  singleTestRequest: (id) => (dispatch) => {
    dispatch({ type: userConst.SINGLE_TEST_REQUEST });
    userServices
      .singleTestRequest(id)
      .then((response) => {
        dispatch({
          type: userConst.SINGLE_TEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.SINGLE_TEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabList: () => (dispatch) => {
    dispatch({ type: userConst.GET_LABLIST_REQUEST });
    userServices
      .getLabList()
      .then((response) => {
        dispatch({
          type: userConst.GET_LABLIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_LABLIST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabService: (name, offset) => (dispatch) => {
    dispatch({ type: userConst.GET_LABSERVICE_REQUEST });
    userServices
      .getLabService(name, offset)
      .then((response) => {
        dispatch({
          type: userConst.GET_LABSERVICE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_LABSERVICE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  singleLabService: (slug) => (dispatch) => {
    dispatch({ type: userConst.SINGLE_LABSERVICE_REQUEST });
    userServices
      .singleLabService(slug)
      .then((response) => {
        dispatch({
          type: userConst.SINGLE_LABSERVICE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.SINGLE_LABSERVICE_FAILURE,
          payload: "Cannot get lab list",
        });
      });
  },
  labTestByCategory: (slug) => (dispatch) => {
    dispatch({ type: userConst.LABTESTBY_CATEGORY_REQUEST });
    userServices
      .labTestByCategory(slug)
      .then((response) => {
        dispatch({
          type: userConst.LABTESTBY_CATEGORY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.LABTESTBY_CATEGORY_FAILURE,
          payload: "Cannot get lab list",
        });
      });
  },
  getLabTest: (name, offset, limit) => (dispatch) => {
    dispatch({ type: userConst.GET_LABTEST_REQUEST });
    userServices
      .getLabTest(name, offset, limit)
      .then((response) => {
        dispatch({
          type: userConst.GET_LABTEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_LABTEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabPackage: (name, offset) => (dispatch) => {
    dispatch({ type: userConst.GET_LABPACKAGE_REQUEST });
    userServices
      .getLabPackage(name, offset)
      .then((response) => {
        dispatch({
          type: userConst.GET_LABPACKAGE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_LABPACKAGE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postPaymentService: (data) => (dispatch) => {
    dispatch({ type: userConst.POST_PAYMENTSERVICE_REQUEST });
    userServices
      .postPaymentService(data)
      .then((response) => {
        dispatch({
          type: userConst.POST_PAYMENTSERVICE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.POST_PAYMENTSERVICE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postToCart: (data) => (dispatch) => {
    dispatch({ type: userConst.POST_CART_REQUEST });
    userServices
      .postToCart(data)
      .then((response) => {
        dispatch({
          type: userConst.POST_CART_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.POST_CART_FAILURE,
          payload: error.response.data,
        });
      });
  },
  removeCart: (id) => (dispatch) => {
    dispatch({ type: userConst.REMOVE_CART_REQUEST });
    userServices
      .removeCart(id)
      .then((response) => {
        dispatch({
          type: userConst.REMOVE_CART_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.REMOVE_CART_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getCart: () => (dispatch) => {
    dispatch({ type: userConst.GET_CART_REQUEST });
    userServices
      .getCart()
      .then((response) => {
        dispatch({
          type: userConst.GET_CART_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.GET_CART_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postPayment: (data) => (dispatch) => {
    dispatch({ type: userConst.PAYMENT_REQUEST });
    userServices
      .postPayment(data)
      .then((response) => {
        dispatch({
          type: userConst.PAYMENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.PAYMENT_FAILURE,
          payload: error.response.data,
        });
      });
  },
  changePassword: (data) => (dispatch) => {
    dispatch({ type: userConst.CHANGE_PASS_REQUEST });
    userServices
      .changePassword(data)
      .then((response) => {
        dispatch({
          type: userConst.CHANGE_PASS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.CHANGE_PASS_FAILURE,
          payload: error.response.data,
        });
      });
  },
  forgetPassword: (data) => (dispatch) => {
    dispatch({ type: userConst.FORGET_PASS_REQUEST });
    userServices
      .forgetPassword(data)
      .then((response) => {
        dispatch({
          type: userConst.FORGET_PASS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: userConst.FORGET_PASS_FAILURE,
          payload: error.response.data,
        });
      });
  },
};
