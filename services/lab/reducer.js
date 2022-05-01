import * as labConst from "./types";

const initialState = {
  getPackage: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  postPackage: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editPackage: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  deletePackage: {
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
  postLabTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editLabTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  deleteLabTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getPredefinedTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabProfile: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editLabProfile: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editProfileOverview: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  uploadProfile: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  uploadImages: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getLabMember: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  singleLabMember: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  addLabMember: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  editLabMember: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },

  deleteLabMember: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getQualifications: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getNewTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },

  getNewDetailTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  approveNewTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  declineNewTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getRunningTest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getRunningTestDetail: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getSamples: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  assignCollector: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getConfirmData: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  confirmData: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  uploadReport: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  addCustomRequest: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  galleryImages: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  uploadGallery: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  deleteGallery: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
  getCompletedList: {
    loading: false,
    status: "",
    error: null,
    data: "",
  },
};

const lab = (state = initialState, action) => {
  let { payload } = action;
  switch (action.type) {
    // GET PACKAGE
    case labConst.GET_PACKAGES_REQUEST:
      return {
        ...state,
        getPackage: {
          ...state.getPackage,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_PACKAGES_SUCCESS:
      return {
        ...state,
        getPackage: {
          ...state.getPackage,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_PACKAGES_FAILURE:
      return {
        ...state,
        getPackage: {
          ...state.getPackage,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // POST PACKAGES
    case labConst.POST_PACKAGES_REQUEST:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.POST_PACKAGES_SUCCESS:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.POST_PACKAGES_FAILURE:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          loading: false,
          status: "failed",
          error: payload,
          data: "",
        },
      };
    case labConst.POST_PACKAGES_RESET:
      return {
        ...state,
        postPackage: {
          ...state.postPackage,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // EDIT PACKAGES
    case labConst.EDIT_PACKAGES_REQUEST:
      return {
        ...state,
        editPackage: {
          ...state.editPackage,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.EDIT_PACKAGES_SUCCESS:
      return {
        ...state,
        editPackage: {
          ...state.editPackage,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.EDIT_PACKAGES_FAILURE:
      return {
        ...state,
        editPackage: {
          ...state.editPackage,
          loading: false,
          status: "failed",
          error: payload,
          data: "",
        },
      };
    case labConst.EDIT_PACKAGES_RESET:
      return {
        ...state,
        editPackage: {
          ...state.editPackage,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // DELETE PACKAGES
    case labConst.DELETE_PACKAGES_REQUEST:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.DELETE_PACKAGES_SUCCESS:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.DELETE_PACKAGES_FAILURE:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          loading: false,
          status: "failed",
          error: payload,
          data: "",
        },
      };
    case labConst.DELETE_PACKAGES_RESET:
      return {
        ...state,
        deletePackage: {
          ...state.deletePackage,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET SERVICES
    case labConst.GET_LABTEST_REQUEST:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_LABTEST_SUCCESS:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_LABTEST_FAILURE:
      return {
        ...state,
        getLabTest: {
          ...state.getLabTest,
          loading: false,
          status: "failed",
          error: payload,
          data: "",
        },
      };

    // POST SERVICES
    case labConst.POST_LABTEST_REQUEST:
      return {
        ...state,
        postLabTest: {
          ...state.postLabTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.POST_LABTEST_SUCCESS:
      return {
        ...state,
        postLabTest: {
          ...state.postLabTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.POST_LABTEST_FAILURE:
      return {
        ...state,
        postLabTest: {
          ...state.postLabTest,
          loading: false,
          status: "failed",
          error: payload,
          data: "",
        },
      };
    case labConst.POST_LABTEST_RESET:
      return {
        ...state,
        postLabTest: {
          ...state.postLabTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // EDIT SERVICES
    case labConst.EDIT_LABTEST_REQUEST:
      return {
        ...state,
        editLabTest: {
          ...state.editLabTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.EDIT_LABTEST_SUCCESS:
      return {
        ...state,
        editLabTest: {
          ...state.editLabTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.EDIT_LABTEST_FAILURE:
      return {
        ...state,
        editLabTest: {
          ...state.editLabTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.EDIT_LABTEST_RESET:
      return {
        ...state,
        editLabTest: {
          ...state.editLabTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // DELETE SERVICES
    case labConst.DELETE_LABTEST_REQUEST:
      return {
        ...state,
        deleteLabTest: {
          ...state.deleteLabTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.DELETE_LABTEST_SUCCESS:
      return {
        ...state,
        deleteLabTest: {
          ...state.deleteLabTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.DELETE_LABTEST_FAILURE:
      return {
        ...state,
        deleteLabTest: {
          ...state.deleteLabTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.DELETE_LABTEST_RESET:
      return {
        ...state,
        deleteLabTest: {
          ...state.deleteLabTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET PREDEFINED TESTS
    case labConst.GET_PRETEST_REQUEST:
      return {
        ...state,
        getPredefinedTest: {
          ...state.getPredefinedTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_PRETEST_SUCCESS:
      return {
        ...state,
        getPredefinedTest: {
          ...state.getPredefinedTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_PRETEST_FAILURE:
      return {
        ...state,
        getPredefinedTest: {
          ...state.getPredefinedTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB PROFILE
    case labConst.GET_LABPROFILE_REQUEST:
      return {
        ...state,
        getLabProfile: {
          ...state.getLabProfile,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_LABPROFILE_SUCCESS:
      return {
        ...state,
        getLabProfile: {
          ...state.getLabProfile,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_LABPROFILE_FAILURE:
      return {
        ...state,
        getLabProfile: {
          ...state.getLabProfile,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB PROFILE
    case labConst.EDIT_LABPROFILE_REQUEST:
      return {
        ...state,
        editLabProfile: {
          ...state.editLabProfile,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.EDIT_LABPROFILE_SUCCESS:
      return {
        ...state,
        editLabProfile: {
          ...state.editLabProfile,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.EDIT_LABPROFILE_FAILURE:
      return {
        ...state,
        editLabProfile: {
          ...state.editLabProfile,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.EDIT_LABPROFILE_RESET:
      return {
        ...state,
        editLabProfile: {
          ...state.editLabProfile,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // EDIT PROFILE OVERVIEW
    case labConst.EDIT_PROFILEOVERVIEW_REQUEST:
      return {
        ...state,
        editProfileOverview: {
          ...state.editProfileOverview,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.EDIT_PROFILEOVERVIEW_SUCCESS:
      return {
        ...state,
        editProfileOverview: {
          ...state.editProfileOverview,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.EDIT_PROFILEOVERVIEW_FAILURE:
      return {
        ...state,
        editProfileOverview: {
          ...state.editProfileOverview,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.EDIT_PROFILEOVERVIEW_RESET:
      return {
        ...state,
        editProfileOverview: {
          ...state.editProfileOverview,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // UPLOAD PROFILE
    case labConst.UPLOAD_PROFILE_REQUEST:
      return {
        ...state,
        uploadProfile: {
          ...state.uploadProfile,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.UPLOAD_PROFILE_SUCCESS:
      return {
        ...state,
        uploadProfile: {
          ...state.uploadProfile,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.UPLOAD_PROFILE_FAILURE:
      return {
        ...state,
        uploadProfile: {
          ...state.uploadProfile,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.UPLOAD_PROFILE_RESET:
      return {
        ...state,
        uploadProfile: {
          ...state.uploadProfile,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // UPLOAD IMAGES
    case labConst.UPLOAD_IMAGES_REQUEST:
      return {
        ...state,
        uploadImages: {
          ...state.uploadImages,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.UPLOAD_IMAGES_SUCCESS:
      return {
        ...state,
        uploadImages: {
          ...state.uploadImages,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.UPLOAD_IMAGES_FAILURE:
      return {
        ...state,
        uploadImages: {
          ...state.uploadImages,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.UPLOAD_IMAGES_RESET:
      return {
        ...state,
        uploadImages: {
          ...state.uploadImages,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET LAB MEMBER
    case labConst.GET_LABMEMBER_REQUEST:
      return {
        ...state,
        getLabMember: {
          ...state.getLabMember,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_LABMEMBER_SUCCESS:
      return {
        ...state,
        getLabMember: {
          ...state.getLabMember,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_LABMEMBER_FAILURE:
      return {
        ...state,
        getLabMember: {
          ...state.getLabMember,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // SINGLE LAB MEMBER
    case labConst.SINGLE_LABMEMBER_REQUEST:
      return {
        ...state,
        singleLabMember: {
          ...state.singleLabMember,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.SINGLE_LABMEMBER_SUCCESS:
      return {
        ...state,
        singleLabMember: {
          ...state.singleLabMember,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.SINGLE_LABMEMBER_FAILURE:
      return {
        ...state,
        singleLabMember: {
          ...state.singleLabMember,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // ADD LAB MEMBER
    case labConst.POST_LABMEMBER_REQUEST:
      return {
        ...state,
        addLabMember: {
          ...state.addLabMember,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.POST_LABMEMBER_SUCCESS:
      return {
        ...state,
        addLabMember: {
          ...state.addLabMember,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.POST_LABMEMBER_FAILURE:
      return {
        ...state,
        addLabMember: {
          ...state.addLabMember,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.POST_LABMEMBER_RESET:
      return {
        ...state,
        addLabMember: {
          ...state.addLabMember,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // EDIT LAB MEMBER
    case labConst.EDIT_LABMEMBER_REQUEST:
      return {
        ...state,
        editLabMember: {
          ...state.editLabMember,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.EDIT_LABMEMBER_SUCCESS:
      return {
        ...state,
        editLabMember: {
          ...state.editLabMember,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.EDIT_LABMEMBER_FAILURE:
      return {
        ...state,
        editLabMember: {
          ...state.editLabMember,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.EDIT_LABMEMBER_RESET:
      return {
        ...state,
        editLabMember: {
          ...state.editLabMember,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // DELETE LAB MEMBER
    case labConst.DELETE_LABMEMBER_REQUEST:
      return {
        ...state,
        deleteLabMember: {
          ...state.deleteLabMember,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.DELETE_LABMEMBER_SUCCESS:
      return {
        ...state,
        deleteLabMember: {
          ...state.deleteLabMember,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.DELETE_LABMEMBER_FAILURE:
      return {
        ...state,
        deleteLabMember: {
          ...state.deleteLabMember,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.DELETE_LABMEMBER_RESET:
      return {
        ...state,
        deleteLabMember: {
          ...state.deleteLabMember,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET QUALIFICATIONS
    case labConst.GET_QUALIFICATIONS_REQUEST:
      return {
        ...state,
        getQualifications: {
          ...state.getQualifications,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_QUALIFICATIONS_SUCCESS:
      return {
        ...state,
        getQualifications: {
          ...state.getQualifications,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_QUALIFICATIONS_FAILURE:
      return {
        ...state,
        getQualifications: {
          ...state.getQualifications,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB NEW TEST REQUEST
    case labConst.NEW_TEST_REQUEST:
      return {
        ...state,
        getNewTest: {
          ...state.getNewTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.NEW_TEST_SUCCESS:
      return {
        ...state,
        getNewTest: {
          ...state.getNewTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.NEW_TEST_FAILURE:
      return {
        ...state,
        getNewTest: {
          ...state.getNewTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB NEW TEST REQUEST DETAIL
    case labConst.NEW_TEST_DETAIL_REQUEST:
      return {
        ...state,
        getNewDetailTest: {
          ...state.getNewDetailTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.NEW_TEST_DETAIL_SUCCESS:
      return {
        ...state,
        getNewDetailTest: {
          ...state.getNewDetailTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.NEW_TEST_DETAIL_FAILURE:
      return {
        ...state,
        getNewDetailTest: {
          ...state.getNewDetailTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.NEW_TEST_DETAIL_RESET:
      return {
        ...state,
        getNewDetailTest: {
          ...state.getNewDetailTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // APPROVE NEW TEST REQUEST
    case labConst.NEW_TEST_APPROVE_REQUEST:
      return {
        ...state,
        approveNewTest: {
          ...state.approveNewTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.NEW_TEST_APPROVE_SUCCESS:
      return {
        ...state,
        approveNewTest: {
          ...state.approveNewTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.NEW_TEST_APPROVE_FAILURE:
      return {
        ...state,
        approveNewTest: {
          ...state.approveNewTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.NEW_TEST_APPROVE_RESET:
      return {
        ...state,
        approveNewTest: {
          ...state.approveNewTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };
    // DECLINE NEW TEST REQUEST
    case labConst.NEW_TEST_DECLINE_REQUEST:
      return {
        ...state,
        declineNewTest: {
          ...state.declineNewTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.NEW_TEST_DECLINE_SUCCESS:
      return {
        ...state,
        declineNewTest: {
          ...state.declineNewTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.NEW_TEST_DECLINE_FAILURE:
      return {
        ...state,
        declineNewTest: {
          ...state.declineNewTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.NEW_TEST_DECLINE_RESET:
      return {
        ...state,
        declineNewTest: {
          ...state.declineNewTest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET LAB RUNNING TEST REQUEST
    case labConst.RUNNING_TEST_REQUEST:
      return {
        ...state,
        getRunningTest: {
          ...state.getRunningTest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.RUNNING_TEST_SUCCESS:
      return {
        ...state,
        getRunningTest: {
          ...state.getRunningTest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.RUNNING_TEST_FAILURE:
      return {
        ...state,
        getRunningTest: {
          ...state.getRunningTest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB RUNNING TEST REQUEST DETAIL
    case labConst.RUNNING_TEST_DETAIL_REQUEST:
      return {
        ...state,
        getRunningTestDetail: {
          ...state.getRunningTestDetail,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.RUNNING_TEST_DETAIL_SUCCESS:
      return {
        ...state,
        getRunningTestDetail: {
          ...state.getRunningTestDetail,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.RUNNING_TEST_DETAIL_FAILURE:
      return {
        ...state,
        getRunningTestDetail: {
          ...state.getRunningTestDetail,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // GET LAB SAMPLES
    case labConst.SAMPLES_REQUEST:
      return {
        ...state,
        getSamples: {
          ...state.getSamples,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.SAMPLES_SUCCESS:
      return {
        ...state,
        getSamples: {
          ...state.getSamples,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.SAMPLES_FAILURE:
      return {
        ...state,
        getSamples: {
          ...state.getSamples,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // ASSIGN COLLECTOR RUNNING TEST REQUEST
    case labConst.ASSIGN_COLLECTOR_REQUEST:
      return {
        ...state,
        assignCollector: {
          ...state.assignCollector,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.ASSIGN_COLLECTOR_SUCCESS:
      return {
        ...state,
        assignCollector: {
          ...state.assignCollector,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.ASSIGN_COLLECTOR_FAILURE:
      return {
        ...state,
        assignCollector: {
          ...state.assignCollector,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.ASSIGN_COLLECTOR_RESET:
      return {
        ...state,
        assignCollector: {
          ...state.assignCollector,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET LAB CONFIRMATION DATA
    case labConst.GET_CONFIRM_REQUEST:
      return {
        ...state,
        getConfirmData: {
          ...state.getConfirmData,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GET_CONFIRM_SUCCESS:
      return {
        ...state,
        getConfirmData: {
          ...state.getConfirmData,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GET_CONFIRM_FAILURE:
      return {
        ...state,
        getConfirmData: {
          ...state.getConfirmData,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    // LAB CONFIRMATION CHANGE
    case labConst.CONFIRM_REQUEST:
      return {
        ...state,
        confirmData: {
          ...state.confirmData,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.CONFIRM_SUCCESS:
      return {
        ...state,
        confirmData: {
          ...state.confirmData,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.CONFIRM_FAILURE:
      return {
        ...state,
        confirmData: {
          ...state.confirmData,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.CONFIRM_RESET:
      return {
        ...state,
        confirmData: {
          ...state.confirmData,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // LAB UPLOAD REPORT
    case labConst.UPLOAD_REPORT_REQUEST:
      return {
        ...state,
        uploadReport: {
          ...state.uploadReport,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.UPLOAD_REPORT_SUCCESS:
      return {
        ...state,
        uploadReport: {
          ...state.uploadReport,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.UPLOAD_REPORT_FAILURE:
      return {
        ...state,
        uploadReport: {
          ...state.uploadReport,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.UPLOAD_REPORT_RESET:
      return {
        ...state,
        uploadReport: {
          ...state.uploadReport,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // ADD CUSTOM REQUEST
    case labConst.ADD_TEST_REQUEST_REQUEST:
      return {
        ...state,
        addCustomRequest: {
          ...state.addCustomRequest,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.ADD_TEST_REQUEST_SUCCESS:
      return {
        ...state,
        addCustomRequest: {
          ...state.addCustomRequest,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.ADD_TEST_REQUEST_FAILURE:
      return {
        ...state,
        addCustomRequest: {
          ...state.addCustomRequest,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.ADD_TEST_REQUEST_RESET:
      return {
        ...state,
        addCustomRequest: {
          ...state.addCustomRequest,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // GET GALLERY
    case labConst.GALLERY_IMAGES_REQUEST:
      return {
        ...state,
        galleryImages: {
          ...state.galleryImages,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.GALLERY_IMAGES_SUCCESS:
      return {
        ...state,
        galleryImages: {
          ...state.galleryImages,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.GALLERY_IMAGES_FAILURE:
      return {
        ...state,
        galleryImages: {
          ...state.galleryImages,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    // UPLOAD GALLERY
    case labConst.UPLOAD_GALLERY_REQUEST:
      return {
        ...state,
        uploadGallery: {
          ...state.uploadGallery,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.UPLOAD_GALLERY_SUCCESS:
      return {
        ...state,
        uploadGallery: {
          ...state.uploadGallery,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.UPLOAD_GALLERY_FAILURE:
      return {
        ...state,
        uploadGallery: {
          ...state.uploadGallery,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.UPLOAD_GALLERY_RESET:
      return {
        ...state,
        uploadGallery: {
          ...state.uploadGallery,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };

    // DELETE GALLERY
    case labConst.DELETE_GALLERY_REQUEST:
      return {
        ...state,
        deleteGallery: {
          ...state.deleteGallery,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.DELETE_GALLERY_SUCCESS:
      return {
        ...state,
        deleteGallery: {
          ...state.deleteGallery,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.DELETE_GALLERY_FAILURE:
      return {
        ...state,
        deleteGallery: {
          ...state.deleteGallery,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };
    case labConst.DELETE_GALLERY_RESET:
      return {
        ...state,
        deleteGallery: {
          ...state.deleteGallery,
          loading: false,
          error: "",
          status: "",
          data: "",
        },
      };
    // DELETE GALLERY
    case labConst.COMPLETED_TEST_REQUEST:
      return {
        ...state,
        getCompletedList: {
          ...state.getCompletedList,
          loading: true,
          error: null,
          status: "",
        },
      };
    case labConst.COMPLETED_TEST_SUCCESS:
      return {
        ...state,
        getCompletedList: {
          ...state.getCompletedList,
          loading: false,
          status: "success",
          data: payload,
        },
      };
    case labConst.COMPLETED_TEST_FAILURE:
      return {
        ...state,
        getCompletedList: {
          ...state.getCompletedList,
          loading: false,
          error: payload,
          status: "failed",
          data: "",
        },
      };

    default:
      return state;
  }
};

export default lab;
