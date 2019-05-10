import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Grid, withStyles, withWidth} from "@material-ui/core";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Navbar from "components/Navbar/Navbar";
import Drawer from "components/Drawer/Drawer";
import UserMenu from "menus/MainNavbarMenu/UserMenu/UserMenu";
import ShoppingCartMenu from "menus/MainNavbarMenu/ShoppingCartMenu/ShoppingCartMenu";
import Footer from "components/Footer/Footer";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeDrawer, openDrawer} from "redux/actions/drawer";
import {isWidthDown} from "@material-ui/core/withWidth";

const MainNavigator = ({ classes, children, width, drawer, openDrawer, closeDrawer }) => {
    const contentStyle = {
        transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        flexGrow: 1
    };

    if (drawer.open) {
        contentStyle.marginLeft = 120;
    }

    const toggleDrawer = (open) => {
        open ? closeDrawer() : openDrawer()
    };

    useEffect(() => {
        const isSmallScreen = isWidthDown('md', width);

        if (isSmallScreen) {
            toggleDrawer(true);
        }
    }, []);

    return (
        <HeroLayout variant="fullheight">
            <Navbar toggleDrawer={() => toggleDrawer(drawer.open)}>
                <ShoppingCartMenu />

                <UserMenu />
            </Navbar>

            <div style={{position: "absolute", left: 0}}>
                <Drawer open={drawer.open} />
            </div>

            <Grid container direction="column" style={{flexGrow: 1}}>
                <div className={classes.toolbar} />

                <Grid container direction="column" style={contentStyle}>
                    <Box display="block" width="100%">
                        { children }
                    </Box>

                    <Box display="block" width="100%">
                        <Footer />
                    </Box>
                </Grid>
            </Grid>
        </HeroLayout>
    );
};

const mapStateToProps = (state) => ({
    drawer: state.drawer
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openDrawer,
        closeDrawer
    }, dispatch);
};

MainNavigator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(withStyles(Styles)(MainNavigator)));