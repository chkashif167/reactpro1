import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "./types";
export const fetchProducts = () => dispatch => {
  fetch("https://jsonserverherokukn.herokuapp.com/products")
    .then(res => res.json())
    .then(data => {
      //   console.log("data from products actions file", data);
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (products, size) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(a =>
              a.availableSizes.indexOf(size.toUpperCase() >= 0)
            )
    }
  });
};
