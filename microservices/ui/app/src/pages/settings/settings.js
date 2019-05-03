import React from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Steak from "assets/image/steak.png";
import Box from "@material-ui/core/Box";
import {Grid, Typography} from "@material-ui/core";
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";

const Settings = () => {
    return (
        <MainNavigator>
            <MainNavigatorSection>
                <HeroLayout variant="large" image={Steak}>
                    <Box flexGrow={1}>
                        <Typography variant="h2" align="center">Settings</Typography>
                    </Box>
                </HeroLayout>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

export default Settings;