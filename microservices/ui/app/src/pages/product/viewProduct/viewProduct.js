import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";
import {Breadcrumbs, Link, Grid, Button, Typography, InputBase, IconButton, CircularProgress} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import {bindActionCreators} from "redux";
import {fetchProduct} from "redux/actions/products";
import {connect} from "react-redux";
import useReactRouter from "use-react-router";

const getProduct = (product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.variants[0].price,
    image: product.images[0].src
});

const ViewProduct = ({ product, fetchProduct }) => {
    // Get token from url
    const { match } = useReactRouter();

    useEffect(() => {
        // Get product from shopify
        const { productId } = match.params;

        fetchProduct(productId);
    }, []);

    const [quantity, setQuantity] = useState(1);

    const validateNextQuantity = (nextQuantity) => {
        const minQuantity = 1;

        if (nextQuantity >= minQuantity) { setQuantity(nextQuantity) }
    };

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
                                            <Link color="inherit" href="/home">
                                                XMart
                                            </Link>
                                            <Typography color="textPrimary">{getProduct(product.product).title}</Typography>
                                        </Breadcrumbs>
                                    </Box>
                                </Box>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
                                            <img src={getProduct(product.product).image} alt="Steak" style={{maxWidth: "100%"}} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box ml={2}>
                                            <Typography variant="h2" gutterBottom>{getProduct(product.product).title}</Typography>
                                            <Typography variant="body1" paragraph>{getProduct(product.product).description}</Typography>

                                            <span>
                                                <Typography variant="h5" display="inline">${getProduct(product.product).price}</Typography>
                                                <Typography variant="h5" display="inline" color="textSecondary">/per lb</Typography>
                                            </span>

                                            <Box mb={2} display="flex" flexDirection="row" flex={1}>

                                                <Grid container>
                                                    <Grid item xs={12} sm={6} style={{display: "flex"}}>
                                                        <Box flex={1} flexDirection="column" alignSelf="center">
                                                            <Typography variant="subtitle1">4 left in stock</Typography>
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xs={12} sm={6}>
                                                        <Box mx={1} display="flex" flexDirection="row">
                                                            <IconButton href={null} onClick={() => validateNextQuantity(quantity - 1)}>
                                                                <Remove />
                                                            </IconButton>

                                                            <Box display="flex" alignItems="center" flexGrow={1}>
                                                                <InputBase
                                                                    type="number"
                                                                    value={quantity}
                                                                    onChange={e => validateNextQuantity(parseInt(e.target.value))}
                                                                    inputProps={{style: {textAlign: "center"}}}
                                                                    fullWidth
                                                                />
                                                            </Box>

                                                            <IconButton href={null} onClick={() => validateNextQuantity(quantity + 1)}>
                                                                <Add />
                                                            </IconButton>
                                                        </Box>

                                                        <Box display="flex" flexDirection="row">

                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <Button href={null} variant="text" size="large" color="primary" fullWidth>Add To Wish List</Button>
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <Button href={null} variant="contained" size="large" color="primary" fullWidth>Add To Cart</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </HeroLayout>
                        )}
                    </Grid>
                </Grid>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

const mapStateToProps = (state) => ({
    product: state.product
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProduct
    }, dispatch);
};

ViewProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);