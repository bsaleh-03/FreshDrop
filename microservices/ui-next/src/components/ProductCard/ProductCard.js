import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Card, CardMedia, Divider, Fab, Tooltip, Typography, withStyles, withWidth} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import {isWidthDown} from "@material-ui/core/withWidth";
import Steak from "assets/image/steak.png";

const ProductCard = ({ classes, width }) => {
    console.log(width);

    const isSmallScreen = isWidthDown('lg', width);
    const buttonProps = {
        size: isSmallScreen ? "medium" : "large"
    };

    return (
        <Card>
            <CardMedia
                component="div"
                className={classes.media}
                image={Steak}
                title="Steak"
            />

            <Divider component="hr" />

            <div className={classes.productInfo}>
                <Typography variant="subtitle1" noWrap gutterBottom className={classes.productTitle}>Steak</Typography>
                <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>$5.99</Typography>

                <Tooltip title="Add To Cart">
                    <Fab
                        href="#"
                        variant="round"
                        color="primary"
                        className={classes.productFab}
                        {...buttonProps}>
                        <AddShoppingCart fontSize={isSmallScreen ? 'small' : 'default'} />
                    </Fab>
                </Tooltip>
            </div>
        </Card>
    );
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default withWidth()(withStyles(Styles)(ProductCard));