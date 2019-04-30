import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Grid, withStyles} from "@material-ui/core";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Navbar from "components/Navbar/Navbar";
import Drawer from "components/Drawer/Drawer";

const MainNavigator = ({ classes, children }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const contentStyle = {
        transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
    };

    if (drawerOpen) {
        contentStyle.marginLeft = 120;
    }

    return (
        <HeroLayout variant="fullheight">
            <Navbar toggleDrawer={() => setDrawerOpen(!drawerOpen)} />

            <Drawer open={drawerOpen} />

            <Grid container direction="column" style={contentStyle}>
                <div className={classes.toolbar} />

                { children }
            </Grid>
        </HeroLayout>
    );
};

MainNavigator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(MainNavigator);