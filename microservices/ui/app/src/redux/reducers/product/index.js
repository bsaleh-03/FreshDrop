import {
    FETCH_PRODUCT_BEGIN,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from "redux/actions/types";

// Product Reducer
const initialProductState = {
    loading: false,
    product: null,
    error: null
};

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case FETCH_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: action.payload.product
            }
        }
        case FETCH_PRODUCT_FAILURE: {
            return {
                ...state,
                loading: false,
                product: null,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
};

export default productReducer;