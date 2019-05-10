import {combineReducers} from "redux";
import collectionsReducer from "redux/reducers/collection";
import productReducer from "redux/reducers/product";
import drawerReducer from "redux/reducers/drawer";

export default combineReducers({
    collections: collectionsReducer,
    product: productReducer,
    drawer: drawerReducer
})