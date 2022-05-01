import { labServices } from "./api";
import * as labConst from "./types";

export const labActions = {
  getPackage: () => (dispatch) => {
    dispatch({ type: labConst.GET_PACKAGES_REQUEST });
    labServices
      .getPackage()
      .then((response) => {
        dispatch({
          type: labConst.GET_PACKAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_PACKAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postPackage: (formdata) => (dispatch) => {
    dispatch({ type: labConst.POST_PACKAGES_REQUEST });
    labServices
      .postPackage(formdata)
      .then((response) => {
        dispatch({
          type: labConst.POST_PACKAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.POST_PACKAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  editPackage: (formdata, slug) => (dispatch) => {
    dispatch({ type: labConst.EDIT_PACKAGES_REQUEST });
    labServices
      .editPackage(formdata, slug)
      .then((response) => {
        dispatch({
          type: labConst.EDIT_PACKAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.EDIT_PACKAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  deletePackage: (formdata, slug) => (dispatch) => {
    dispatch({ type: labConst.DELETE_PACKAGES_REQUEST });
    labServices
      .deletePackage(formdata, slug)
      .then((response) => {
        dispatch({
          type: labConst.DELETE_PACKAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.DELETE_PACKAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabTest: (offset) => (dispatch) => {
    dispatch({ type: labConst.GET_LABTEST_REQUEST });
    labServices
      .getLabTest(offset)
      .then((response) => {
        dispatch({
          type: labConst.GET_LABTEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_LABTEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  postLabTest: (formdata) => (dispatch) => {
    dispatch({ type: labConst.POST_LABTEST_REQUEST });
    labServices
      .postLabTest(formdata)
      .then((response) => {
        dispatch({
          type: labConst.POST_LABTEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.POST_LABTEST_FAILURE,
          payload: error.response.data.detail,
        });
      });
  },
  editLabTest: (formdata, id) => (dispatch) => {
    dispatch({ type: labConst.EDIT_LABTEST_REQUEST });
    labServices
      .editLabTest(formdata, id)
      .then((response) => {
        dispatch({
          type: labConst.EDIT_LABTEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.EDIT_LABTEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  deleteLabTest: (id) => (dispatch) => {
    dispatch({ type: labConst.DELETE_LABTEST_REQUEST });
    labServices
      .deleteLabTest(id)
      .then((response) => {
        dispatch({
          type: labConst.DELETE_LABTEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.DELETE_LABTEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getPredefinedTest: () => (dispatch) => {
    dispatch({ type: labConst.GET_PRETEST_REQUEST });
    labServices
      .getPredefinedTest()
      .then((response) => {
        dispatch({
          type: labConst.GET_PRETEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_PRETEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabProfile: () => (dispatch) => {
    dispatch({ type: labConst.GET_LABPROFILE_REQUEST });
    labServices
      .getLabProfile()
      .then((response) => {
        dispatch({
          type: labConst.GET_LABPROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_LABPROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  editLabProfile: (formdata) => (dispatch) => {
    dispatch({ type: labConst.EDIT_LABPROFILE_REQUEST });
    labServices
      .editLabProfile(formdata)
      .then((response) => {
        dispatch({
          type: labConst.EDIT_LABPROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.EDIT_LABPROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  editProfileOverview: (formdata) => (dispatch) => {
    dispatch({ type: labConst.EDIT_PROFILEOVERVIEW_REQUEST });
    labServices
      .editProfileOverview(formdata)
      .then((response) => {
        dispatch({
          type: labConst.EDIT_PROFILEOVERVIEW_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.EDIT_PROFILEOVERVIEW_FAILURE,
          payload: error.response.data,
        });
      });
  },
  uploadProfile: (formdata) => (dispatch) => {
    dispatch({ type: labConst.UPLOAD_PROFILE_REQUEST });
    labServices
      .uploadProfile(formdata)
      .then((response) => {
        dispatch({
          type: labConst.UPLOAD_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.UPLOAD_PROFILE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  uploadImages: (formdata) => (dispatch) => {
    dispatch({ type: labConst.UPLOAD_IMAGES_REQUEST });
    labServices
      .uploadImages(formdata)
      .then((response) => {
        dispatch({
          type: labConst.UPLOAD_IMAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.UPLOAD_IMAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getLabMember: (offset) => (dispatch) => {
    dispatch({ type: labConst.GET_LABMEMBER_REQUEST });
    labServices
      .getLabMember(offset)
      .then((response) => {
        dispatch({
          type: labConst.GET_LABMEMBER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_LABMEMBER_FAILURE,
          payload: error.response.data,
        });
      });
  },
  singleLabMember: (id) => (dispatch) => {
    dispatch({ type: labConst.SINGLE_LABMEMBER_REQUEST });
    labServices
      .singleLabMember(id)
      .then((response) => {
        dispatch({
          type: labConst.SINGLE_LABMEMBER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.SINGLE_LABMEMBER_FAILURE,
          payload: error.response.data,
        });
      });
  },
  addLabMember: (data) => (dispatch) => {
    dispatch({ type: labConst.POST_LABMEMBER_REQUEST });
    labServices
      .addLabMember(data)
      .then((response) => {
        dispatch({
          type: labConst.POST_LABMEMBER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.POST_LABMEMBER_FAILURE,
          payload: error.response.data,
        });
      });
  },

  editLabMember: (id, data) => (dispatch) => {
    dispatch({ type: labConst.EDIT_LABMEMBER_REQUEST });
    labServices
      .editLabMember(id, data)
      .then((response) => {
        dispatch({
          type: labConst.EDIT_LABMEMBER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.EDIT_LABMEMBER_FAILURE,
          payload: error.response.data,
        });
      });
  },

  deleteLabMember: (id) => (dispatch) => {
    dispatch({ type: labConst.DELETE_LABMEMBER_REQUEST });
    labServices
      .deleteLabMember(id)
      .then((response) => {
        dispatch({
          type: labConst.DELETE_LABMEMBER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.DELETE_LABMEMBER_FAILURE,
          payload: error.response.data,
        });
      });
  },

  getQualifications: () => (dispatch) => {
    dispatch({ type: labConst.GET_QUALIFICATIONS_REQUEST });
    labServices
      .getQualifications()
      .then((response) => {
        dispatch({
          type: labConst.GET_QUALIFICATIONS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_QUALIFICATIONS_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getNewTest: (offset) => (dispatch) => {
    dispatch({ type: labConst.NEW_TEST_REQUEST });
    labServices
      .getNewTest(offset)
      .then((response) => {
        dispatch({
          type: labConst.NEW_TEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.NEW_TEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getNewDetailTest: (id) => (dispatch) => {
    dispatch({ type: labConst.NEW_TEST_DETAIL_REQUEST });
    labServices
      .getNewDetailTest(id)
      .then((response) => {
        dispatch({
          type: labConst.NEW_TEST_DETAIL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.NEW_TEST_DETAIL_FAILURE,
          payload: error.response.data,
        });
      });
  },
  approveNewTest: (id) => (dispatch) => {
    dispatch({ type: labConst.NEW_TEST_APPROVE_REQUEST });
    labServices
      .approveNewTest(id)
      .then((response) => {
        dispatch({
          type: labConst.NEW_TEST_APPROVE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.NEW_TEST_APPROVE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  declineNewTest: (id) => (dispatch) => {
    dispatch({ type: labConst.NEW_TEST_DECLINE_REQUEST });
    labServices
      .declineNewTest(id)
      .then((response) => {
        dispatch({
          type: labConst.NEW_TEST_DECLINE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.NEW_TEST_DECLINE_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getRunningTest: (offset, status) => (dispatch) => {
    dispatch({ type: labConst.RUNNING_TEST_REQUEST });
    labServices
      .getRunningTest(offset, status)
      .then((response) => {
        dispatch({
          type: labConst.RUNNING_TEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.RUNNING_TEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getRunningTestDetail: (id) => (dispatch) => {
    dispatch({ type: labConst.RUNNING_TEST_DETAIL_REQUEST });
    labServices
      .getRunningTestDetail(id)
      .then((response) => {
        dispatch({
          type: labConst.RUNNING_TEST_DETAIL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.RUNNING_TEST_DETAIL_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getCompletedList: (offset, status) => (dispatch) => {
    dispatch({ type: labConst.COMPLETED_TEST_REQUEST });
    labServices
      .getCompletedList(offset, status)
      .then((response) => {
        dispatch({
          type: labConst.COMPLETED_TEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.COMPLETED_TEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getSamples: () => (dispatch) => {
    dispatch({ type: labConst.SAMPLES_REQUEST });
    labServices
      .getSamples()
      .then((response) => {
        dispatch({
          type: labConst.SAMPLES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.SAMPLES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  assignCollector: (id, data) => (dispatch) => {
    dispatch({ type: labConst.ASSIGN_COLLECTOR_REQUEST });
    labServices
      .assignCollector(id, data)
      .then((response) => {
        dispatch({
          type: labConst.ASSIGN_COLLECTOR_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.ASSIGN_COLLECTOR_FAILURE,
          payload: error.response.data,
        });
      });
  },
  getConfirmData: (id) => (dispatch) => {
    dispatch({ type: labConst.GET_CONFIRM_REQUEST });
    labServices
      .getConfirmData(id)
      .then((response) => {
        dispatch({
          type: labConst.GET_CONFIRM_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GET_CONFIRM_FAILURE,
          payload: error.response.data,
        });
      });
  },
  confirmData: (id, data) => (dispatch) => {
    dispatch({ type: labConst.CONFIRM_REQUEST });
    labServices
      .confirmData(id, data)
      .then((response) => {
        dispatch({
          type: labConst.CONFIRM_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.CONFIRM_FAILURE,
          payload: error.response.data,
        });
      });
  },
  uploadReport: (id, data) => (dispatch) => {
    dispatch({ type: labConst.UPLOAD_REPORT_REQUEST });
    labServices
      .uploadReport(id, data)
      .then((response) => {
        dispatch({
          type: labConst.UPLOAD_REPORT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.UPLOAD_REPORT_FAILURE,
          payload: error.response.data,
        });
      });
  },
  addCustomRequest: (data) => (dispatch) => {
    dispatch({ type: labConst.ADD_TEST_REQUEST_REQUEST });
    labServices
      .addCustomRequest(data)
      .then((response) => {
        dispatch({
          type: labConst.ADD_TEST_REQUEST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.ADD_TEST_REQUEST_FAILURE,
          payload: error.response.data,
        });
      });
  },
  galleryImages: () => (dispatch) => {
    dispatch({ type: labConst.GALLERY_IMAGES_REQUEST });
    labServices
      .galleryImages()
      .then((response) => {
        dispatch({
          type: labConst.GALLERY_IMAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.GALLERY_IMAGES_FAILURE,
          payload: error.response.data,
        });
      });
  },
  uploadGallery: (data) => (dispatch) => {
    dispatch({ type: labConst.UPLOAD_GALLERY_REQUEST });
    labServices
      .uploadGallery(data)
      .then((response) => {
        dispatch({
          type: labConst.UPLOAD_GALLERY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.UPLOAD_GALLERY_FAILURE,
          payload: error.response.data,
        });
      });
  },
  deleteGallery: (id) => (dispatch) => {
    dispatch({ type: labConst.DELETE_GALLERY_REQUEST });
    labServices
      .deleteGallery(id)
      .then((response) => {
        dispatch({
          type: labConst.DELETE_GALLERY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: labConst.DELETE_GALLERY_FAILURE,
          payload: error.response.data,
        });
      });
  },
};
