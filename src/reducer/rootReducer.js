
import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import cartSummaryReducer from "./cartSummaryReducer"; // Updated name

const rootReducer = combineReducers({
    cart: cartReducer, 
    alert: alertReducer,
    cartSummary: cartSummaryReducer, // Updated name
});

export default rootReducer;