import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    IconButton,
    Toolbar,
    withStyles
} from "@material-ui/core";
import {
    Menu
} from "@material-ui/icons";
import Styles from "./styles";
import Logo from "../../../logo.svg";

class PrimaryAppBar extends Component {
    render() {
        const { classes, toggleDrawer } = this.props;

        return (
            <AppBar position="fixed" elevation={1} className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer}
                        style={{marginRight: 8, marginLeft: "-10px"}}
                    >
                        <Menu />
                    </IconButton>

                    <img src={Logo} height="40"  alt="Logo" />
                </Toolbar>
            </AppBar>
        );
    }
}

PrimaryAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(Styles)(PrimaryAppBar);
