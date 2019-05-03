import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core";
import Styles from "./Styles";

const AuthLayoutButtons = ({ classes, children }) => {
    return (
        <div className={classes.actions}>
            { children }
        </div>
    );
};

AuthLayoutButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
};

export default withStyles(Styles)(AuthLayoutButtons);