import React from 'react';
import AppNavigator from "../../layout/appNavigator/appNavigator";
import PrimaryHero from "./sections/heroVideo/heroVideo";
import Browse from "./sections/browse/browse";

const Home = props => {
    return (
        <AppNavigator>
            <PrimaryHero />

            <Browse />
        </AppNavigator>
    );
};

export default Home;
