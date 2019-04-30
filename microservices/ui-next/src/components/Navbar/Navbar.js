import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Navbar = ({ classes, toggleDrawer }) => {
    return (
        <AppBar position="fixed" elevation={1} className={classes.root}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={toggleDrawer}
                >
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(Styles)(Navbar);