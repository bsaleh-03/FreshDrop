import React from 'react';
import Styles from "./Styles";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Navbar = ({ classes }) => {
    return (
        <AppBar position="fixed" elevation={1} className={classes.root}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(Styles)(Navbar);