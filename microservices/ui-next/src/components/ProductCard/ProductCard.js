import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { Card, CardMedia, Divider, Typography, withStyles } from "@material-ui/core";

import Steak from "assets/image/steak.png";

const ProductCard = ({ classes }) => {
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
            </div>
        </Card>
    );
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default withStyles(Styles)(ProductCard);