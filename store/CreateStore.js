import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./CombineReducer";

const middleWare = [thunk];
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    : null) || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare)),
);

export default store;
