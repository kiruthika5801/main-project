const initialState = {
    show: false,
    productTitle: "", //no product is stored initially
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return { show: true, productTitle: action.payload };
        case "HIDE_ALERT":
            return { show: false, productTitle: "" };
        default:
            return state;
    }
};

export default alertReducer;