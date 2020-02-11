import { FETCH_PRODUCTS } from "./actions/types";
const initialState = { items: [] };

function Prdocuts(state = initialState, action) {
  console.log("product reducer action", action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}

export default Prdocuts;
