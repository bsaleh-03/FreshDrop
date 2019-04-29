import React from 'react';
import AppNavigator from "layout/appNavigator/appNavigator";
import Grid from "@material-ui/core/Grid";
import {Divider, Typography} from "@material-ui/core";
import Section from "layout/section/section";

const Recipes = () => {
    return (
        <AppNavigator>
            <Section>
                <Typography variant="h3">Recipes</Typography>
            </Section>
        </AppNavigator>
    );
};

export default Recipes;