import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainHero from "pages/home/sections/MainHero/MainHero";
import BrowseProducts from "pages/home/sections/BrowseProducts/BrowseProducts";
import {Grid} from "@material-ui/core";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";

const Home = () => {
    return (
        <MainNavigator>
            <MainNavigatorSection>
                <MainHero />
            </MainNavigatorSection>

            <MainNavigatorSection>
                <Grid container justify="center">
                    <Grid item xs={12} md={8}>
                        <BrowseProducts />
                    </Grid>
                </Grid>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

export default Home;