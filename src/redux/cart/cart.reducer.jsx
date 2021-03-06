import { cartActions } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
