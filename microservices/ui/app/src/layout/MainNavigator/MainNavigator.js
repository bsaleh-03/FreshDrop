import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Grid, withStyles} from "@material-ui/core";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Navbar from "components/Navbar/Navbar";
import Drawer from "components/Drawer/Drawer";
import UserMenu from "menus/MainNavbarMenu/UserMenu/UserMenu";
import ShoppingCartMenu from "menus/MainNavbarMenu/ShoppingCartMenu/ShoppingCartMenu";
import Footer from "components/Footer/Footer";
import Box from "@material-ui/core/Box";

const MainNavigator = ({ classes, children }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const contentStyle = {
        transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        flexGrow: 1
    };

    if (drawerOpen) {
        contentStyle.marginLeft = 120;
    }

    return (
        <HeroLayout variant="fullheight">
            <Navbar toggleDrawer={() => setDrawerOpen(!drawerOpen)}>
                <ShoppingCartMenu />

                <UserMenu />
            </Navbar>

            <div style={{position: "absolute", left: 0}}>
                <Drawer open={drawerOpen} />
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

MainNavigator.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(MainNavigator);