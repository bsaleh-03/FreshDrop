import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { Grid, withStyles } from "@material-ui/core";
import Client from "shopify-buy";
import ProductCard from "components/ProductCard/ProductCard";

// Shopify Client
const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

const getCollections = async () => {
    const collections = await client.collection.fetchAllWithProducts();

    console.log(collections);
};

getCollections();

const CollectionBrowser = props => {
    return (
        <Grid container>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <ProductCard product="all" />
            </Grid>
        </Grid>
    );
};

CollectionBrowser.propTypes = {
    classes: PropTypes.object.isRequired,
    collection: PropTypes.string.isRequired
};

export default withStyles(Styles)(CollectionBrowser);