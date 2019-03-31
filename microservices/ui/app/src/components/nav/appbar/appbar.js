import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Hidden,
    IconButton,
    Toolbar,
    withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Styles from "./styles";
import Logo from "../../../logo.svg";
import UserMenu from "./menus/user/userMenu";
import ShoppingCartMenu from "./menus/cart/cartMenu";

const PrimaryAppBar = props => {
    const { classes, toggleDrawer } = props;

    return (
        <AppBar position="fixed" elevation={1} className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={toggleDrawer}
                    style={{marginRight: 8, marginLeft: "-10px"}}
                >
                    <MenuIcon />
                </IconButton>

                <div className={classes.logo}>
                    <img src={Logo} height="40" alt="Logo" />
                </div>

                <div className={classes.headerNav}>
                    <Hidden smDown>
                        <ShoppingCartMenu />

                        <UserMenu />
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" aria-label="MobileMenu">
                            <MoreIcon />
                        </IconButton>
                    </Hidden>
                </div>
            </Toolbar>
        </AppBar>
    );
};

PrimaryAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(Styles)(PrimaryAppBar);
