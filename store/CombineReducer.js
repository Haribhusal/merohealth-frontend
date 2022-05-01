import { combineReducers } from "redux";
import auth from "../services/auth/reducer";
import user from "../services/user/reducer";
import lab from "../services/lab/reducer";

const reducer = combineReducers({
  auth,
  user,
  lab,
});

export default reducer;
