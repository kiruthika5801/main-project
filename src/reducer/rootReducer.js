
import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import cartSummaryReducer from "./cartSummaryReducer"; 
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cart: cartReducer, 
    alert: alertReducer,
    cartSummary: cartSummaryReducer, 
    user: userReducer,
   
});

export default rootReducer;