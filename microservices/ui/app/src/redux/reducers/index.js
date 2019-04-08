import { combineReducers } from 'redux';
import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    FETCH_COLLECTIONS_BEGIN,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} from "../actions";

// Collections Reducer
const initialCollectionsState = {
    loading: false,
    items: [],
    error: null
};

const collectionsReducer = function (state = initialCollectionsState, action) {
    switch (action.type) {
        case FETCH_COLLECTIONS_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case FETCH_COLLECTIONS_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.collections
            }
        }
        case FETCH_COLLECTIONS_FAILURE: {
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
};

// Products Reducer
const initialProductsState = {
    loading: false,
    items: [],
    error: null
};

const productsReducer = function (state = initialProductsState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.products
            }
        }
        case FETCH_PRODUCTS_FAILURE: {
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    collections: collectionsReducer,
    products: productsReducer
});