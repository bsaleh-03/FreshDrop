import {combineReducers} from "redux";
import collectionsReducer from "redux/reducers/collection";
import productReducer from "redux/reducers/product";

export default combineReducers({
    collections: collectionsReducer,
    product: productReducer
})