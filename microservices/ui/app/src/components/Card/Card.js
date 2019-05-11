import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import { Paper, withStyles } from "@material-ui/core";

const Card = ({ classes, children, size = 'default', style }) => {
    return (
        <Paper className={classes[size]} style={style}>
            { children }
        </Paper>
    );
};

Card.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    size: PropTypes.oneOf([
        'default',
        'small',
        'medium',
        'large'
    ]),
    style: PropTypes.object
};

export default withStyles(Styles)(Card);