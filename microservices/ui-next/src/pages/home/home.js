import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainHero from "pages/home/sections/MainHero/MainHero";
import BrowseProducts from "pages/home/sections/BrowseProducts/BrowseProducts";

const Home = () => {
    return (
        <MainNavigator>
            <MainHero />

            <BrowseProducts />
        </MainNavigator>
    );
};

export default Home;