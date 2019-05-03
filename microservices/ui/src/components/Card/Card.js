import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles';
import { Paper, withStyles } from "@material-ui/core";

const Card = ({ classes, children, size = 'default' }) => {
    return (
        <div>
            <Paper className={classes[size]}>
                { children }
            </Paper>
        </div>
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
    ])
};

export default withStyles(Styles)(Card);