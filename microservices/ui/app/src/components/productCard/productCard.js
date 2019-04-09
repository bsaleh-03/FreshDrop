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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addProductToCart } from "../../redux/actions";

const ProductCard = props => {
    const { image, title, price, variant, width, classes, products } = props;

    const product = products.filter(item => item.variants[0].id === variant)[0];

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card classes={{root: classes.cardRoot}}>
                <CardMedia
                    className={classes.media}
                    image={image.toString()}
                    title={title}
                />
                <Divider />
                <div className={classes.productInfo}>
                    <Typography variant="h6" noWrap gutterBottom className={classes.productTitle}>{title}</Typography>
                    <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>${price}</Typography>

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

const mapStateToProps = state => {
    return {
        products: state.products.items
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(ProductCard));
