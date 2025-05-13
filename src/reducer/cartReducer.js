const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartCount: state.cartCount + 1,
      };

    case "REMOVE_FROM_CART":
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: Math.max(0, updatedCartItems.length), // Ensure count doesn't go below 0
      };
      case "CLEAR_CART":
        return initialState;  // Reset cart to initial state

    default:
      return state;
  }


};



export default cartReducer;

