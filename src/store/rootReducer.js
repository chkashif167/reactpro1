import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";
import Auth from "./reducers/authReducer";

const rootReducer = combineReducers({
  userRegister,
  Auth
});

export default rootReducer;
