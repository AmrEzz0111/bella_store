import { cartActions } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActions.CART_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM,
  payload: item,
});
