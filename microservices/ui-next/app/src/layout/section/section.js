import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    withStyles
} from "@material-ui/core";
import Styles from "./styles";

const Section = props => {
    const { classes, children } = props;

    return (
        <Grid container alignItems="center" justify="center" className={classes.sectionRoot}>
            <Grid item xs={12} md={8}>
                { children }
            </Grid>
        </Grid>
    );
};

Section.propTypes = {

};

export default withStyles(Styles)(Section);