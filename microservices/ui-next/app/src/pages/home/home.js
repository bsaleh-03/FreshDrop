import React from 'react';
import {
    Grid
} from "@material-ui/core";
import AppNavigator from "../../layout/appNavigator/appNavigator";

const Home = props => {
    return (
        <AppNavigator>
            <Grid container justify="center">
                <p>Hello World</p>
            </Grid>
        </AppNavigator>
    );
};

export default Home;
