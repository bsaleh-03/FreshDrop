import React from 'react';
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";

const MainNavigatorCenteredLayout = ({ children }) => {
    return (
        <Grid container justify="center">
            <Grid item xs={12} md={10}>
                { children }
            </Grid>
        </Grid>
    );
};

MainNavigatorCenteredLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired
};

export default MainNavigatorCenteredLayout;