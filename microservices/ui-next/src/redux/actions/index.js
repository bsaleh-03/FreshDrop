import Client from "shopify-buy";
import {
    FETCH_COLLECTIONS_BEGIN,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS
} from "redux/actions/types";

// Shopify Client
const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

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
        // Dispatch began fetching products
        dispatch(fetchCollectionsBegin());

        client.collection.fetchAllWithProducts()
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