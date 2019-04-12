import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    withStyles,
    withWidth
} from "@material-ui/core";
import Styles from './styles';
import AppBar from "../../components/nav/appbar/appbar";
import Drawer from "../../components/nav/drawer/drawer";
import {isWidthDown} from "@material-ui/core/withWidth";
import NotificationArea from "../notificationArea/notificationArea";

class AppNavigator extends Component {
    constructor(props) {
        super(props);

        const isSmallScreen = isWidthDown('md', props.width);

        this.state = {
            drawerOpen: !isSmallScreen,
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(state) {
        this.setState({ drawerOpen: state });
    }

    render() {
        const { drawerOpen } = this.state;
        const { classes, children } = this.props;

        const contentStyle = {
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        };

        if (drawerOpen) {
            contentStyle.marginLeft = 120;
        }

        return (
            <div className={classes.root}>
                <AppBar toggleDrawer={() => this.toggleDrawer(!drawerOpen)} />

                <Drawer open={drawerOpen} />

                <Grid container className={classes.mainSection} style={contentStyle}>
                    <div className={classes.toolbar} />

                    <NotificationArea />

                    { children }
                </Grid>
            </div>
        );
    }
}

AppNavigator.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.array
};

export default withWidth()(withStyles(Styles)(AppNavigator));
