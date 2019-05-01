import React from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Steak from "assets/image/steak.png";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MainNavigator from "layout/MainNavigator/MainNavigator";

const Story = () => {
    return (
        <MainNavigator>
            <HeroLayout variant="large" image={Steak}>
                <Box flexGrow={1}>
                    <Typography variant="h2" align="center">Our Story</Typography>
                </Box>
            </HeroLayout>
        </MainNavigator>
    );
};

export default Story;