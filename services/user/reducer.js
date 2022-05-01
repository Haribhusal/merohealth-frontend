import * as userConst from "./types";

const initialState = {
  getProfile: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editProfile: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getTestRequest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  singleTestRequest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabList: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabService: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  singleLabService: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  labTestByCategory: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabPackage: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  postPaymentService: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  postToCart: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  removeCart: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getCart: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  postPayment: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  changePassword: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  forgetPassword: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
};

const user = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
    case userConst.GET_PROFILE_REQUEST:
      return {
        ...state,
        getProfile: {
          ...state.getProfile,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfile: {
          ...state.getProfile,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_PROFILE_FAILURE:
      return {
        ...state,
        getProfile: {
          ...state.getProfile,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    // edit profile
    case userConst.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.EDIT_PROFILE_RESET:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    case userConst.GET_TEST_REQUEST:
      return {
        ...state,
        getTestRequest: {
          ...state.getTestRequest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_TEST_SUCCESS:
      return {
        ...state,
        getTestRequest: {
          ...state.getTestRequest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_TEST_FAILURE:
      return {
        ...state,
        getTestRequest: {
          ...state.getTestRequest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    case userConst.SINGLE_TEST_REQUEST:
      return {
        ...state,
        singleTestRequest: {
          ...state.singleTestRequest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.SINGLE_TEST_SUCCESS:
      return {
        ...state,
        singleTestRequest: {
          ...state.singleTestRequest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.SINGLE_TEST_FAILURE:
      return {
        ...state,
        singleTestRequest: {
          ...state.singleTestRequest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB LIST
    case userConst.GET_LABLIST_REQUEST:
      return {
        ...state,
        getLabList: {
          ...state.getLabList,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_LABLIST_SUCCESS:
      return {
        ...state,
        getLabList: {
          ...state.getLabList,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_LABLIST_FAILURE:
      return {
        ...state,
        getLabList: {
          ...state.getLabList,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB SERVICE LIST
    case userConst.GET_LABSERVICE_REQUEST:
      return {
        ...state,
        getLabService: {
          ...state.getLabService,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_LABSERVICE_SUCCESS:
      return {
        ...state,
        getLabService: {
          ...state.getLabService,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_LABSERVICE_FAILURE:
      return {
        ...state,
        getLabService: {
          ...state.getLabService,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    // GET SINGLE LAB SERVICE LIST
    case userConst.SINGLE_LABSERVICE_REQUEST:
      return {
        ...state,
        singleLabService: {
          ...state.singleLabService,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.SINGLE_LABSERVICE_SUCCESS:
      return {
        ...state,
        singleLabService: {
          ...state.singleLabService,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.SINGLE_LABSERVICE_FAILURE:
      return {
        ...state,
        singleLabService: {
          ...state.singleLabService,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB TEST BY CATEGORY
    case userConst.LABTESTBY_CATEGORY_REQUEST:
      return {
        ...state,
        labTestByCategory: {
          ...state.labTestByCategory,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.LABTESTBY_CATEGORY_SUCCESS:
      return {
        ...state,
        labTestByCategory: {
          ...state.labTestByCategory,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.LABTESTBY_CATEGORY_FAILURE:
      return {
        ...state,
        labTestByCategory: {
          ...state.labTestByCategory,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB TEST
    case userConst.GET_LABTEST_REQUEST:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_LABTEST_SUCCESS:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_LABTEST_FAILURE:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    // GET LAB PACKAGE
    case userConst.GET_LABPACKAGE_REQUEST:
      return {
        ...state,
        getLabPackage: {
          ...state.getLabPackage,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_LABPACKAGE_SUCCESS:
      return {
        ...state,
        getLabPackage: {
          ...state.getLabPackage,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_LABPACKAGE_FAILURE:
      return {
        ...state,
        getLabPackage: {
          ...state.getLabPackage,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    // POST SELECTED LAB PACKAGE OR TEST
    case userConst.POST_PAYMENTSERVICE_REQUEST:
      return {
        ...state,
        postPaymentService: {
          ...state.postPaymentService,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.POST_PAYMENTSERVICE_SUCCESS:
      return {
        ...state,
        postPaymentService: {
          ...state.postPaymentService,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.POST_PAYMENTSERVICE_FAILURE:
      return {
        ...state,
        postPaymentService: {
          ...state.postPaymentService,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.POST_PAYMENTSERVICE_RESET:
      return {
        ...state,
        postPaymentService: {
          ...state.postPaymentService,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // POST TO CART
    case userConst.POST_CART_REQUEST:
      return {
        ...state,
        postToCart: {
          ...state.postToCart,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.POST_CART_SUCCESS:
      return {
        ...state,
        postToCart: {
          ...state.postToCart,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.POST_CART_FAILURE:
      return {
        ...state,
        postToCart: {
          ...state.postToCart,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.POST_CART_RESET:
      return {
        ...state,
        postToCart: {
          ...state.postToCart,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // REMOVE CART
    case userConst.REMOVE_CART_REQUEST:
      return {
        ...state,
        removeCart: {
          ...state.removeCart,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.REMOVE_CART_SUCCESS:
      return {
        ...state,
        removeCart: {
          ...state.removeCart,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.REMOVE_CART_FAILURE:
      return {
        ...state,
        removeCart: {
          ...state.removeCart,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.REMOVE_CART_RESET:
      return {
        ...state,
        removeCart: {
          ...state.removeCart,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET CART
    case userConst.GET_CART_REQUEST:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.GET_CART_SUCCESS:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.GET_CART_FAILURE:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // PAYMENT
    case userConst.PAYMENT_REQUEST:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.PAYMENT_SUCCESS:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.PAYMENT_FAILURE:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.PAYMENT_RESET:
      return {
        ...state,
        postPayment: {
          ...state.postPayment,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // CHANGE PASSWORD
    case userConst.CHANGE_PASS_REQUEST:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.CHANGE_PASS_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.CHANGE_PASS_FAILURE:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.CHANGE_PASS_RESET:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // FORGOT PASSWORD
    case userConst.FORGET_PASS_REQUEST:
      return {
        ...state,
        forgetPassword: {
          ...state.forgetPassword,
          loading: true,
          error: null,
          status: "",
        },
      };
    case userConst.FORGET_PASS_SUCCESS:
      return {
        ...state,
        forgetPassword: {
          ...state.forgetPassword,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case userConst.FORGET_PASS_FAILURE:
      return {
        ...state,
        forgetPassword: {
          ...state.forgetPassword,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case userConst.FORGET_PASS_RESET:
      return {
        ...state,
        forgetPassword: {
          ...state.forgetPassword,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    default:
      return state;
  }
};

export default user;
