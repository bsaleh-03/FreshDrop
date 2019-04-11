import { combineReducers } from 'redux';
import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    FETCH_COLLECTIONS_BEGIN,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE,
    COLLECTION_SELECTED,

    ADD_PRODUCT_TO_CART
} from "../actions";

// Collections Reducer
const initialCollectionsState = {
    loading: false,
    items: [],
    error: null,
    selected: null
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
        case COLLECTION_SELECTED: {
            return {
                ...state,
                selected: action.payload.collectionId
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

// Shopping Cart Reducers
const initialShoppingCartState = {
    items: []
};

const shoppingCartReducer = function (state = initialShoppingCartState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload.productId]
            }
        }
        default: {
            return initialShoppingCartState;
        }
    }
};

export default combineReducers({
    collections: collectionsReducer,
    products: productsReducer,
    shoppingCart: shoppingCartReducer
});