import * as types from "./types";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const getAllProducts = () => dispatch => {
  fetch("http://booksontap.azurewebsites.net/api/Books")
    .then(data => data.json())
    .then(data => {
      console.log(data.results);
      dispatch(receiveProducts(data.results));
    });
};
