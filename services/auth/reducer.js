import * as authConst from "./types";

const initialState = {
  login: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  signUp: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  logout: {
    loading: false,
    status: "",
    error: null,
  },
  companyCategory: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  stateList: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  districtList: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },

  municipalityList: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  labSignUp: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  checkUidToken: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
  postNewPassword: {
    loading: false,
    status: "",
    data: "",
    error: null,
  },
};

const auth = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
    case authConst.LOGIN_USER_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.LOGIN_USER_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case authConst.LOGIN_USER_RESET:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    /*** SIGNUP USER ***/
    case authConst.SIGNUP_USER_REQUEST:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.SIGNUP_USER_FAILURE:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    /*** LOGOUT USER ***/
    case authConst.LOGOUT_USER_REQUEST:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: false,
          status: "success",
        },
      };
    case authConst.LOGOUT_USER_FAILURE:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    case authConst.COMPANY_CATEGORY_REQUEST:
      return {
        ...state,
        companyCategory: {
          ...state.companyCategory,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.COMPANY_CATEGORY_SUCCESS:
      return {
        ...state,
        companyCategory: {
          ...state.companyCategory,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.COMPANY_CATEGORY_FAILURE:
      return {
        ...state,
        companyCategory: {
          ...state.companyCategory,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    case authConst.STATE_LIST_REQUEST:
      return {
        ...state,
        stateList: {
          ...state.stateList,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.STATE_LIST_SUCCESS:
      return {
        ...state,
        stateList: {
          ...state.stateList,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.STATE_LIST_FAILURE:
      return {
        ...state,
        stateList: {
          ...state.stateList,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    case authConst.DISTRICT_LIST_REQUEST:
      return {
        ...state,
        districtList: {
          ...state.districtList,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.DISTRICT_LIST_SUCCESS:
      return {
        ...state,
        districtList: {
          ...state.districtList,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.DISTRICT_LIST_FAILURE:
      return {
        ...state,
        districtList: {
          ...state.districtList,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    case authConst.MUNICIPALITY_LIST_REQUEST:
      return {
        ...state,
        municipalityList: {
          ...state.municipalityList,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.MUNICIPALITY_LIST_SUCCESS:
      return {
        ...state,
        municipalityList: {
          ...state.municipalityList,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.MUNICIPALITY_LIST_FAILURE:
      return {
        ...state,
        municipalityList: {
          ...state.municipalityList,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    /*** LAB SIGNUP USER ***/
    case authConst.SIGNUP_LAB_REQUEST:
      return {
        ...state,
        labSignUp: {
          ...state.labSignUp,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.SIGNUP_LAB_SUCCESS:
      return {
        ...state,
        labSignUp: {
          ...state.labSignUp,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.SIGNUP_LAB_FAILURE:
      return {
        ...state,
        labSignUp: {
          ...state.labSignUp,
          loading: false,
          error: payload,
          status: "failed",
        },
      };
    case authConst.SIGNUP_LAB_RESET:
      return {
        ...state,
        labSignUp: {
          ...state.labSignUp,
          loading: false,
          error: "",
          status: "",
        },
      };

    /*** GET UID TOKEN NEW ***/
    case authConst.CHECK_UIDTOKEN_REQUEST:
      return {
        ...state,
        checkUidToken: {
          ...state.checkUidToken,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.CHECK_UIDTOKEN_SUCCESS:
      return {
        ...state,
        checkUidToken: {
          ...state.checkUidToken,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.CHECK_UIDTOKEN_FAILURE:
      return {
        ...state,
        checkUidToken: {
          ...state.checkUidToken,
          loading: false,
          error: payload,
          status: "failed",
        },
      };

    /*** LAB CHANGE PASSWORD ***/
    case authConst.NEW_PASS_REQUEST:
      return {
        ...state,
        postNewPassword: {
          ...state.postNewPassword,
          loading: true,
          error: null,
          status: "",
        },
      };
    case authConst.NEW_PASS_SUCCESS:
      return {
        ...state,
        postNewPassword: {
          ...state.postNewPassword,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case authConst.NEW_PASS_FAILURE:
      return {
        ...state,
        postNewPassword: {
          ...state.postNewPassword,
          loading: false,
          error: payload,
          status: "failed",
        },
      };
    case authConst.NEW_PASS_RESET:
      return {
        ...state,
        postNewPassword: {
          ...state.postNewPassword,
          loading: false,
          error: "",
          status: "",
        },
      };
    default:
      return state;
  }
};

export default auth;
