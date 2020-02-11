import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "./actions/types";
const initialState = { items: [], filterItems: [], size: "" };

function Prdocuts(state = initialState, action) {
  console.log("product reducer action", action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filterItems: action.payload.items,
        size: action.payload.size
      };

    default:
      return state;
  }
}

export default Prdocuts;
