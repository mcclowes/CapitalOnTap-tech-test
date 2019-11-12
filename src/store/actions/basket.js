import * as types from "./types";

const addToBasketUnsafe = productId => ({
  type: types.ADD_TO_BASKET,
  productId
});

export const addToBasket = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToBasketUnsafe(productId));
  }
};
