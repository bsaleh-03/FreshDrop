import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";
import {
    Breadcrumbs,
    Link,
    Grid,
    Button,
    Typography,
    CircularProgress,
    Divider
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {bindActionCreators} from "redux";
import {fetchProduct} from "redux/actions/products";
import {connect} from "react-redux";
import useReactRouter from "use-react-router";
import {getCollectionFromProduct} from "lib/Shopify";
import CollectionBrowser from "components/CollectionBrowser/CollectionBrowser";
import ProductView from "components/ProductView/ProductView";

const getProduct = (product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.variants[0].price,
    image: product.images[0].src
});

const Product = ({ collections, product, fetchProduct }) => {
    // Get token from url
    const { match } = useReactRouter();

    // Get product from shopify
    const { productId } = match.params;

    useEffect(() => {
        fetchProduct(productId);
    }, [fetchProduct, productId]);

    const collection = getCollectionFromProduct(collections, productId)[0];

    return (
        <MainNavigator>
            <MainNavigatorSection>
                <Grid container justify="center">
                    <Grid item xs={12} md={10}>
                        { product.loading || product.product == null ? (
                            <Box py={5} display="flex" flexGrow={1} flexDirection="row" justifyContent="center">
                                <CircularProgress />
                            </Box>
                        ) : (
                            <React.Fragment>
                                <HeroLayout variant="large">
                                    <Box mb={3} display="flex" flexDirection="row">
                                        <Box display="flex">
                                            <Button href="/home" variant="outlined" color="secondary">Go back</Button>
                                        </Box>

                                        <Box ml={2} display="flex" flex={1} alignItems="center">
                                            <Breadcrumbs aria-label="Breadcrumb">
                                                <Link color="inherit" href="/home">
                                                    Collections
                                                </Link>
                                                <Link color="inherit" href={`/collection/${collection.id}`}>
                                                    { collection.title }
                                                </Link>
                                                <Typography color="textPrimary">{getProduct(product.product).title}</Typography>
                                            </Breadcrumbs>
                                        </Box>
                                    </Box>

                                    <ProductView
                                        image={getProduct(product.product).image}
                                        description={getProduct(product.product).description}
                                        price={getProduct(product.product).price}
                                        title={getProduct(product.product).title}
                                        stock={4}
                                    />
                                </HeroLayout>

                                <HeroLayout variant="large">
                                    <Box mb={2}>
                                        <Typography variant="h5" gutterBottom>Similar Products</Typography>
                                        <Divider component="hr" />
                                    </Box>

                                    <CollectionBrowser collection={collection.id} showTitle={false} />
                                </HeroLayout>
                            </React.Fragment>
                        )}
                    </Grid>
                </Grid>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

const mapStateToProps = (state) => ({
    product: state.product,
    collections: state.collections.items
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProduct
    }, dispatch);
};

Product.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);