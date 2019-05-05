import Client from "lib/Shopify";
import {
    FETCH_PRODUCT_BEGIN,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from "redux/actions/types";

export const fetchProductBegin = () => ({
    type: FETCH_PRODUCT_BEGIN
});

export const fetchProductSuccess = (product) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: { product }
});

export const fetchProductFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: { error }
});

export const fetchProduct = (productId) => {
    return dispatch => {
        // Dispatch began fetching products
        dispatch(fetchProductBegin());

        Client.product.fetch(productId)
            .then(product => {
                // Dispatch product
                dispatch(fetchProductSuccess(product));

                return product;
            })
            .catch(e => {
                // Dispatch failure
                dispatch(fetchProductFailure(e));

                return e;
            })
    };
};