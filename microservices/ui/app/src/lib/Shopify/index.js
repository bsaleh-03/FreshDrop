import Client from "shopify-buy";

// Shopify Client
export const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

export const getCollectionFromProduct = (collections, productId) => {
    return collections.filter(collectionItem => {
        return collectionItem.products.filter(product => product.id === productId).length;
    });
};

export default client;