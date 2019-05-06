import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {
    Card,
    CardActionArea,
    CardMedia,
    Divider,
    Fab,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import {isWidthDown} from "@material-ui/core/withWidth";

const getProduct = (product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.variants[0].price,
    image: product.images[0].src
});

const ProductCard = ({ classes, width, product }) => {
    const isSmallScreen = isWidthDown('lg', width);
    const buttonProps = {
        size: isSmallScreen ? "small" : "default"
    };

    const productDetails = getProduct(product);

    return (
        <Card style={{display: "flex", flexDirection: "column", flex: 1, position: "relative"}}>
            <CardActionArea href={`/product/view/${productDetails.id}`} style={{flexGrow: 1}}>
                <CardMedia
                    component="div"
                    className={classes.media}
                    image={productDetails.image}
                    title={productDetails.title}
                />

                <Divider component="hr" />

                <div className={classes.productInfo}>
                    <span>
                        <Typography variant="subtitle1" display="inline" style={{fontWeight: "bold"}}>${productDetails.price}</Typography>
                        <Typography variant="subtitle1" color="textSecondary" display="inline" gutterBottom>/per lb</Typography>
                    </span>

                    <Typography variant="subtitle2" gutterBottom>4 left in stock</Typography>

                    <Typography variant="subtitle1" className={classes.productTitle}>{productDetails.title}</Typography>
                </div>
            </CardActionArea>

            <Tooltip title="Add To Cart">
                <Fab
                    variant="round"
                    color="primary"
                    className={classes.productFab}
                    {...buttonProps}>
                    <AddShoppingCart fontSize={buttonProps.size} />
                </Fab>
            </Tooltip>
        </Card>
    );
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default withWidth()(withStyles(Styles)(ProductCard));