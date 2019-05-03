import {
    FETCH_COLLECTIONS_BEGIN,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS
} from "redux/actions/types";
import {combineReducers} from "redux";

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

export default combineReducers({
    collections: collectionsReducer
})