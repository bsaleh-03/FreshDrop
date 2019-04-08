import { combineReducers } from 'redux';

const productsReducer = function () {
    return [
        {
            id: 1,
            productName: "Redux Product"
        }
    ];
};

export default combineReducers({
    products: productsReducer
});