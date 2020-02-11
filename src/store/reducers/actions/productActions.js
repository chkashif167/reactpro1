import { FETCH_PRODUCTS } from "./types";
const fetchProducts = () => dispatch => {
  fetch("https://jsonserverherokukn.herokuapp.com/products")
    .then(res => res.json())
    .then(data => {
      //   console.log("data from products actions file", data);
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};
export default fetchProducts;
