import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {CircularProgress, withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const AsyncView = ({ loading, children }) => {
    return (
        loading === true ? (
            <Box display="flex" flexGrow={1} flexDirection="row" justifyContent="center">
                <CircularProgress />
            </Box>
        ) : (
            [ children ]
        )
    );
};

AsyncView.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    loading: PropTypes.bool.isRequired
};

export default withStyles(Styles)(AsyncView);