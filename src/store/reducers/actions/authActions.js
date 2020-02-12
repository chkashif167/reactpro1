// Actions
export const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";

const authLoginAction = userParam => ({
  type: SET_LOGIN_STATUS,
  payload: userParam
});

export const loginUser = userParam => dispatch => {
  dispatch(authLoginAction(userParam));
};

/////////////////////////////////////////////////////////
const authLogoutAction = isLoggedIn => ({
  type: SET_USER_LOGOUT,
  isLoggedIn
});

export const logoutUser = () => dispatch => {
  console.log("im am loginUser function");
  dispatch(authLogoutAction(false));
};
