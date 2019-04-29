import Client from "shopify-buy";

// Shopify Client
const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

// Product Actions
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
});

export const fetchProducts = () => {
    return dispatch => {
        // Dispatch began fetching products
        dispatch(fetchProductsBegin());

        client.product.fetchAll()
            .then(products => {
                // Dispatch products
                dispatch(fetchProductsSuccess(products));

                return products;
            })
            .catch(e => {
                console.log(e);

                // Dispatch our error
                dispatch(fetchProductsFailure(e));
            });
    };
};

// Collection Actions
export const FETCH_COLLECTIONS_BEGIN   = 'FETCH_COLLECTIONS_BEGIN';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const SELECT_COLLECTION = 'SELECT_COLLECTION';

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

export const selectCollection = (collection) => ({
   type: SELECT_COLLECTION,
   payload: { collection }
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

// Shopping Cart Actions
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: { product }
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: { product }
});