import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardMedia,
    Divider,
    Grid,
    Typography,
    withStyles
} from "@material-ui/core";
import Styles from "./styles";
import ResponsiveFab from "../buttons/responsiveFab/responsiveFab";
import {bindActionCreators} from "redux";
import {addProductToCart} from "../../redux/actions";
import {connect} from "react-redux";

const ProductCard = props => {
    const { width, classes, product } = props;

    const productImage = product.images[0].src;
    const productTitle = product.title;
    const productPrice = product.variants[0].price;

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card classes={{root: classes.cardRoot}}>
                <CardMedia
                    className={classes.media}
                    image={productImage.toString()}
                    title={productTitle}
                />
                <Divider />
                <div className={classes.productInfo}>
                    <Typography variant="h6" noWrap gutterBottom className={classes.productTitle}>{productTitle}</Typography>
                    <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>${productPrice}</Typography>

                    <ResponsiveFab
                        variant="fab"
                        color="primary"
                        aria-label="Add"
                        width={width}
                        className={classes.productFab}
                        onClick={() => props.addProductToCart(product)}
                    />
                </div>
            </Card>
        </Grid>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addProductToCart: addProductToCart
    }, dispatch);
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(Styles)(ProductCard));
