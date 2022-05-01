import { BASE_API } from "../../utils/apiConstants";
import apiMethods from "../../utils/apiMethods";
import { appUtils } from "../../utils/appUtils";

export const labServices = {
  getPackage: () => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-package/`,
      appUtils.getAuthHeader()
    );
  },
  postPackage: (formdata) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-package/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  editPackage: (formdata, slug) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-package/${slug}/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  deletePackage: (slug) => {
    return apiMethods.delete(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-package/${slug}/`,
      appUtils.getAuthHeader()
    );
  },
  getLabTest: (offset = 0) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-test/?offset=${offset}&limit=10`,
      appUtils.getAuthHeader()
    );
  },
  postLabTest: (formdata) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-test/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  editLabTest: (formdata, id) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-test/${id}/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  deleteLabTest: (id) => {
    return apiMethods.delete(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-test/${id}/`,
      appUtils.getAuthHeader()
    );
  },
  getPredefinedTest: () => {
    return apiMethods.get(
      `${BASE_API}service/test/?limit=50`,
      appUtils.getAuthHeader()
    );
  },
  getLabProfile: () => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/`,
      appUtils.getAuthHeader()
    );
  },
  editLabProfile: (formdata) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  editProfileOverview: (formdata) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/profile/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  uploadProfile: (formdata) => {
    return apiMethods.patch(
      `${BASE_API}lab/${appUtils.getLabSlug()}/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  uploadImages: (formdata) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/images/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },
  getLabMember: (offset = 0) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-member/?offset=${offset}&limit=50&ordering=-created_at`,
      appUtils.getAuthHeader()
    );
  },
  singleLabMember: (id) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-member/${id}/`,
      appUtils.getAuthHeader()
    );
  },

  addLabMember: (formdata) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-member/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },

  editLabMember: (id, formdata) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-member/${id}/`,
      formdata,
      appUtils.getAuthHeader()
    );
  },

  deleteLabMember: (id) => {
    return apiMethods.delete(
      `${BASE_API}lab/${appUtils.getLabSlug()}/lab-member/${id}/`,
      appUtils.getAuthHeader()
    );
  },

  getQualifications: () => {
    return apiMethods.get(
      `${BASE_API}common/qualification/`,
      appUtils.getAuthHeader()
    );
  },

  getNewTest: (offset = 0) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/new-test-request/?offset=${offset}&limit=10&ordering=-created_at`,
      appUtils.getAuthHeader()
    );
  },

  getNewDetailTest: (id) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/new-test-request/${id}/`,
      appUtils.getAuthHeader()
    );
  },

  approveNewTest: (id) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/new-test-request/${id}/approve/`,
      {},
      appUtils.getAuthHeader()
    );
  },

  declineNewTest: (id) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/new-test-request/${id}/decline/`,
      {},
      appUtils.getAuthHeader()
    );
  },

  getRunningTest: (offset = 0, status) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/?offset=${offset}&limit=10&ordering=-created_at${
        status ? "&status=" + status : ""
      }`,
      appUtils.getAuthHeader()
    );
  },

  getRunningTestDetail: (id) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/${id}/request-details/`,
      appUtils.getAuthHeader()
    );
  },

  getCompletedList: (offset = 0, status) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/completed-test-request/?offset=${offset}&limit=10&ordering=-created_at${
        status ? "&status=" + status : ""
      }`,
      appUtils.getAuthHeader()
    );
  },

  getSamples: () => {
    return apiMethods.get(
      `${BASE_API}common/sample/`,
      appUtils.getAuthHeader()
    );
  },

  assignCollector: (id, data) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/${id}/`,
      data,
      appUtils.getAuthHeader()
    );
  },

  getConfirmData: (id) => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/${id}/confirmation/`,
      appUtils.getAuthHeader()
    );
  },

  confirmData: (id, data) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/${id}/confirmation/`,
      data,
      appUtils.getAuthHeader()
    );
  },

  uploadReport: (id, data) => {
    return apiMethods.put(
      `${BASE_API}lab/${appUtils.getLabSlug()}/running-test-request/${id}/upload-report/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  addCustomRequest: (data) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/custom-test-request/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  galleryImages: () => {
    return apiMethods.get(
      `${BASE_API}lab/${appUtils.getLabSlug()}/images/`,
      appUtils.getAuthHeader()
    );
  },
  uploadGallery: (data) => {
    return apiMethods.post(
      `${BASE_API}lab/${appUtils.getLabSlug()}/images/`,
      data,
      appUtils.getAuthHeader()
    );
  },
  deleteGallery: (id) => {
    return apiMethods.delete(
      `${BASE_API}lab/${appUtils.getLabSlug()}/images/${id}`,
      appUtils.getAuthHeader()
    );
  },
};
