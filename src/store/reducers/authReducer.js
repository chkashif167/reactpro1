import {
  SET_LOGIN_PENDING,
  SET_LOGIN_STATUS,
  SET_LOGIN_ERROR,
  SET_USER_LOGOUT
} from "./actions/authActions";

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false
};

function auth(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case SET_USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default auth;
