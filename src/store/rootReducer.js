import { combineReducers } from "redux";
import CartSlice from "./adcart";

const rootReducer = combineReducers ( {

    cartReducer : CartSlice.reducer
    


} )
export default rootReducer