export const showCartSummary = () => ({
    type: "SHOW_CART_SUMMARY",
});

export const hideCartSummary = () => ({
    type: "HIDE_CART_SUMMARY",
});


export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id,
});

