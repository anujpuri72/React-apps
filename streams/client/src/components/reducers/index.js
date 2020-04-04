import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formRed } from "redux-form";
import streamReducers from "./streamReducers";
export default combineReducers({
  auth: authReducer,
  form: formRed,
  streams: streamReducers,
});
