import {
  SET_LOGIN_PENDING,
  SET_LOGIN_STATUS,
  SET_LOGIN_ERROR
} from "./actions/authActions";

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false
};

function auth(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    default:
      return state;
  }
}

export default auth;
