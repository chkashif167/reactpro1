import { combineReducers } from "redux";
import userRegister from "./reducers/registerReducer";
import Auth from "./reducers/authReducer";
import Prdocuts from "./reducers/productsReducer";
import Cart from "./reducers/cartReducer";
import { SET_USER_LOGOUT } from "./reducers/actions/authActions";

const appReducer = combineReducers({
  userRegister,
  Auth,
  Prdocuts,
  Cart
});

const rootReducer = (state, action) => {
  if (action.type === SET_USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
