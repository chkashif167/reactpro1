import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";
import User from "./reducers/userReducer";

const rootReducer = combineReducers({
  userRegister,
  User
});

export default rootReducer;
