import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import {Typography} from "@material-ui/core";

const Home = () => {
    return (
        <MainNavigator>
            <Typography variant="h1">Home</Typography>
        </MainNavigator>
    );
};

export default Home;