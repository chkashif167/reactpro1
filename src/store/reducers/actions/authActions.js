// Actions
export const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const authAction = user => ({
  type: SET_LOGIN_STATUS,
  payload: user
});

export const loginUser = userParam => dispatch => {
  dispatch(authAction(userParam));
};
