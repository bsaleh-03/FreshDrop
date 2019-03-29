import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    withStyles
} from "@material-ui/core";
import Styles from './styles';
import AppBar from "../../components/nav/appbar/appbar";
import Drawer from "../../components/nav/drawer/drawer";

class AppNavigator extends Component {
    render() {
        const { classes, children } = this.props;

        const contentStyle = {
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        };

        if (true) {
            contentStyle.marginLeft = 120;
        }

        return (
            <div className={classes.root}>
                <AppBar />

                <Drawer />

                <Grid item xs={12} className={classes.gridContainer} style={contentStyle}>
                    <div className={classes.toolbar} />

                    { children }
                </Grid>
            </div>
        );
    }
}

AppNavigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(AppNavigator);
