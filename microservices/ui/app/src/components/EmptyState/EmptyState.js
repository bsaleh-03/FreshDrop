import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";

const EmptyState = ({ icon, title, description }) => {
    return (
        <Box display="flex" flex={1} flexDirection="column">
            <Box alignSelf="center">{icon}</Box>
            <Typography variant="h6" align="center">{title}</Typography>
            <Typography variant="subtitle1" align="center">{description}</Typography>
        </Box>
    );
};

EmptyState.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default EmptyState;