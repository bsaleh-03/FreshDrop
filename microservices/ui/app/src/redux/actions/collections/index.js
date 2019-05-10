import Client from "lib/Shopify";
import {
    FETCH_COLLECTIONS_BEGIN,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS,
} from "redux/actions/types";

export const fetchCollectionsBegin = () => ({
    type: FETCH_COLLECTIONS_BEGIN
});

export const fetchCollectionsSuccess = (collections) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: { collections }
});

export const fetchCollectionsFailure = (error) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: { error }
});

export const fetchCollections = () => {
    return dispatch => {
        // Dispatch began fetching collections
        dispatch(fetchCollectionsBegin());

        Client.collection.fetchAllWithProducts()
            .then(collections => {
                // Dispatch collections
                dispatch(fetchCollectionsSuccess(collections));

                return collections;
            })
            .catch(e => {
                console.log(e);

                // Dispatch our error
                dispatch(fetchCollectionsFailure(e));
            });
    };
};