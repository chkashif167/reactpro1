const initialState = {
  fullname: "",
  email: "",
  password: ""
};

function userRegister(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    default:
      return state;
  }
}

export default userRegister;

// Actions
export const addUserAction = user => ({
  type: "ADD_USER",
  payload: user
});
