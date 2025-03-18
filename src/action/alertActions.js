export const showAlert = (productTitle) => ({
    type: "SHOW_ALERT",  //This action tells the reducer to display the alert.
    payload: productTitle, //Stores the product title in Redux.

});

export const hideAlert = () => ({
    type: "HIDE_ALERT",
});