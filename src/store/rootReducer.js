import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";
import Auth from "./reducers/authReducer";
import Prdocuts from "./reducers/productsReducer";

const rootReducer = combineReducers({
  userRegister,
  Auth,
  Prdocuts
});

export default rootReducer;
