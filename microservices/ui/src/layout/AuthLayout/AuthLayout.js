import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Divider, withStyles} from "@material-ui/core";
import Card from "components/Card/Card";
import Logo from "logo.svg";

const AuthLayout = ({ classes, children }) => {
    return (
        <div className={classes.root}>
            <Card size="medium">
                <div className={classes.body}>
                    <img src={Logo} className={classes.logo} alt="Logo" height="60" />

                    <Divider />

                    { children }
                </div>
            </Card>
        </div>
    );
};

AuthLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired
};

export default withStyles(Styles)(AuthLayout);