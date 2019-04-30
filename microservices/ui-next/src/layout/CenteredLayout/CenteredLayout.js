import React from 'react';
import PropTypes from "prop-types";
import Styles from "./Styles";
import { withStyles } from "@material-ui/core";

const CenteredLayout = ({ classes, children }) => {
    return (
        <div className={classes.root}>
            { children }
        </div>
    );
};

CenteredLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(CenteredLayout);