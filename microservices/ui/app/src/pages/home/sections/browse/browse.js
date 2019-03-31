import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    IconButton,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {
    ExpandMore
} from "@material-ui/icons";
import Styles from "./styles";
import Client from "shopify-buy";
import Async from "react-async";
import Section from "../../../../layout/section/section";
import ProductCard from "../../../../components/productCard/productCard";

// Shopify Client
const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

// Load Collections
const getCollections = async () => {
  try {
      return await client.collection.fetchAllWithProducts();
  } catch (e) {
      console.log(e);
  }
};

// Load Products
const getProducts = async () => {
    try {
        return await client.product.fetchAll();
    } catch (e) {
        console.log(e);
    }
};

const Browse = props => {
    const { classes, width } = props;

    return (
        <Section>
            <Async promiseFn={getProducts}>
                <Async.Loading>
                    <p>Loading...</p>
                </Async.Loading>

                <Async.Resolved>
                    {data => (
                        <Grid container spacing={24} className={classes.collectionWrapper}>
                            <Grid item xs={12}>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography variant="h4">All Products</Typography>
                                    </Grid>

                                    <Grid item>
                                        <IconButton color="inherit">
                                            <ExpandMore />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {data.map((product, index) => {
                                const productImage = product.images[0].src;
                                const productTitle = product.title;
                                const productPrice = product.variants[0].price;

                                return (
                                    <ProductCard
                                        image={productImage}
                                        title={productTitle}
                                        price={productPrice}
                                        width={width}
                                        key={index}
                                    />
                                );
                            })}
                        </Grid>
                    )}
                </Async.Resolved>

                <Async.Rejected>
                    {error => `Something went wrong ${error}`}
                </Async.Rejected>
            </Async>

            <Async promiseFn={getCollections}>
                <Async.Loading>
                    <p>Loading...</p>
                </Async.Loading>

                <Async.Resolved>
                    {data => data.map((collection, index) => (
                        <Grid container spacing={24} className={classes.collectionWrapper} key={index}>
                            <Grid item xs={12}>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography variant="h4">{collection.title}</Typography>
                                    </Grid>

                                    {collection.products.length > 4 &&
                                        <Grid item>
                                            <IconButton color="inherit">
                                                <ExpandMore />
                                            </IconButton>
                                        </Grid>
                                    }
                                </Grid>
                            </Grid>

                            {collection.products.map((product, index) => {
                                const productImage = product.images[0].src;
                                const productTitle = product.title;
                                const productPrice = product.variants[0].price;

                                return (
                                    <ProductCard
                                        image={productImage}
                                        title={productTitle}
                                        price={productPrice}
                                        width={width}
                                        key={index}
                                    />
                                );
                            })}
                        </Grid>
                    ))}
                </Async.Resolved>

                <Async.Rejected>
                    {error => `Something went wrong ${error}`}
                </Async.Rejected>
            </Async>
        </Section>
    );
};

Browse.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(Styles)(Browse));
