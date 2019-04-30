import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Typography, withStyles} from "@material-ui/core";

const MessageBox = ({ classes, message, color = 'default' }) => {
    return (
        <div className={classes.root}>
            <div className={`${classes.body} ${classes[color]}`}>
                <Typography variant="body1" align="center">{ message }</Typography>
            </div>
        </div>
    );
};

MessageBox.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'danger'
    ])
};

export default withStyles(Styles)(MessageBox);