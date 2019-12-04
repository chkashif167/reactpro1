import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";

const rootReducer = combineReducers({
  userRegister
});

export default rootReducer;
