import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Logo from "logo.svg";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";

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

                    <Box mx={2} display="flex" alignItems="center">
                        <Link to="/home"><img src={Logo} height="40" alt="Logo" /></Link>
                    </Box>
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