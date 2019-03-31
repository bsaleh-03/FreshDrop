import React from 'react';
import AppNavigator from "../../layout/appNavigator/appNavigator";
import PrimaryHero from "./sections/heroVideo/heroVideo";
import Browse from "./sections/browse/browse";
import Footer from "../../components/footer/footer";

const Home = props => {
    return (
        <AppNavigator>
            <PrimaryHero />

            <Browse />

            <Footer />
        </AppNavigator>
    );
};

export default Home;
