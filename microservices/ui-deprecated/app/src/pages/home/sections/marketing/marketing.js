import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Paper,
    withStyles
} from "@material-ui/core";
import Styles from "./styles";
import image from "../../../../assets/images/branding-1.jpg";
import image2 from "../../../../assets/images/vegetables.jpg";

const Marketing = props => {
    const { classes } = props;

    return (
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <Paper style={{height: "100%"}}>
                        <img src={image} alt="Marketing 1" className={classes.imageContainer} />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <Paper style={{height: "100%"}}>
                        <img src={image2} alt="Marketing 2" className={classes.imageContainer} />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

Marketing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Marketing);