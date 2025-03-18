const initialState = {
    cartItems: [],
    show: false,
};

const cartSummaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_CART_SUMMARY":
            return { ...state, show: true };

        case "HIDE_CART_SUMMARY":
            return { ...state, show: false };

        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            return {
                ...state,
                cartItems: existingItem
                    ? state.cartItems.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                    : [...state.cartItems, { ...action.payload, quantity: 1 }],
                
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        default:
            return state;
    }
};

export default cartSummaryReducer;


