const TOKEN_KEY = "accessToken";

export const appUtils = {
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getAppToken: () => localStorage.getItem(TOKEN_KEY),
  setLabSlug: (slug) => localStorage.setItem("lab", slug),
  getLabSlug: () => localStorage.getItem("lab"),
  getAuthHeader: () => {
    return {
      headers: {
        Authorization: "Bearer " + appUtils.getAppToken(),
      },
    };
  },
  isLogin: () => {
    if (localStorage.getItem(TOKEN_KEY)) {
      return true;
    } else {
      return false;
    }
  },
  removeToken: () => localStorage.removeItem(TOKEN_KEY),
  clearLocalStorage: () => localStorage.clear(),
};
