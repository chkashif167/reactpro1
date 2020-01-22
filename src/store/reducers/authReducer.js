// import {
//   SET_LOGIN_PENDING,
//   SET_LOGIN_STATUS,
//   SET_LOGIN_ERROR
// } from "./actions/authActions";

const initialState = {
  email: "",
  password: ""
};

function auth(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN_STATUSsfsafs":
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
}

export default auth;
