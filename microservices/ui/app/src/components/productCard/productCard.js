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

const ProductCard = props => {
    const { image, title, price, width, classes } = props;

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

                    <ResponsiveFab variant="fab" color="primary" aria-label="Add" width={width} className={classes.productFab} />
                </div>
            </Card>
        </Grid>
    );
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withStyles(Styles)(ProductCard);
