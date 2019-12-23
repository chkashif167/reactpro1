const initialState = {
  email: "",
  password: ""
};

function user(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default user;

// Actions
export const userAction = user => ({
  type: "LOGIN_USER",
  payload: user
});
