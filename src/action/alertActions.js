export const showAlert = (productTitle) => ({
    type: "SHOW_ALERT",
    payload: productTitle,
});

export const hideAlert = () => ({
    type: "HIDE_ALERT",
});