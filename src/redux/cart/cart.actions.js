import { cartActions } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActions.CART_TOGGLE_HIDDEN,
});
