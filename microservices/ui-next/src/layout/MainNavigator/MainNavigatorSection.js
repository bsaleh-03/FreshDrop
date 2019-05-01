import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

const MainNavigatorSection = ({ children }) => {
    return (
        <Grid item xs={12}>
            { children }
        </Grid>
    );
};

MainNavigatorSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired
};

export default MainNavigatorSection;