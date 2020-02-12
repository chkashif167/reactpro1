import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";
import Auth from "./reducers/authReducer";
import Prdocuts from "./reducers/productsReducer";
import Cart from "./reducers/cartReducer";

const rootReducer = combineReducers({
  userRegister,
  Auth,
  Prdocuts,
  Cart
});

export default rootReducer;
