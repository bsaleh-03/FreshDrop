import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import { Paper, withStyles } from "@material-ui/core";

const Card = ({ classes, children, size = 'default', elevation = 1, style }) => {
    return (
        <Paper className={classes[size]} elevation={elevation} style={style}>
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
    elevation: PropTypes.number,
    style: PropTypes.object
};

export default withStyles(Styles)(Card);