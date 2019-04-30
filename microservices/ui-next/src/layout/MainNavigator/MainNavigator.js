import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Grid, withStyles} from "@material-ui/core";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Navbar from "components/Navbar/Navbar";

const MainNavigator = ({ classes, children }) => {
    return (
        <HeroLayout variant="fullheight">
            <Navbar />

            <Grid container direction="column">
                <div className={classes.toolbar} />

                { children }
            </Grid>
        </HeroLayout>
    );
};

MainNavigator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(MainNavigator);