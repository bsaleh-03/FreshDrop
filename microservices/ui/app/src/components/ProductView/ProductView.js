import React from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

const ProductView = ({ title, description, image, price, stock }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
                    <img src={image} alt="Steak" style={{maxWidth: "100%"}} />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box ml={2}>
                    <Typography variant="h2" gutterBottom>{title}</Typography>
                    <Typography variant="body1" paragraph>{description}</Typography>

                    <span>
                        <Typography variant="h5" display="inline">${price}</Typography>
                        <Typography variant="h5" display="inline" color="textSecondary">/per lb</Typography>
                    </span>

                    <Box mb={2} display="flex" flexDirection="row" flex={1}>

                        <Grid container>
                            <Grid item xs={12} sm={6} style={{display: "flex"}}>
                                <Box flex={1} flexDirection="column" alignSelf="center">
                                    <Typography variant="subtitle1">{stock} left in stock</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <QuantityPicker />
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
    );
};

ProductView.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
};

export default ProductView;