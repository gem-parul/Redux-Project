//combine all the reducers in this file
import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
})
export default reducers;