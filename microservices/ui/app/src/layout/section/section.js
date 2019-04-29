import React from 'react';
import {
    Grid,
    withStyles
} from "@material-ui/core";
import Styles from "./styles";

const Section = props => {
    const { classes, children } = props;

    return (
        <Grid container justify="center" className={classes.sectionRoot}>
            <Grid item xs={12} md={8}>
                { children }
            </Grid>
        </Grid>
    );
};

export default withStyles(Styles)(Section);
