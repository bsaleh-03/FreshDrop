import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Navbar = ({ classes, children, toggleDrawer }) => {
    return (
        <AppBar position="fixed" elevation={1} className={classes.root}>
            <Toolbar>
                <nav className={classes.left}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer}
                    >
                        <Menu />
                    </IconButton>
                </nav>

                <nav>
                    { children }
                </nav>
            </Toolbar>
        </AppBar>
    );
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(Styles)(Navbar);