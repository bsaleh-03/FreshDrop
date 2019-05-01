import React from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Steak from "assets/image/steak.png";
import Box from "@material-ui/core/Box";
import {Grid, Typography} from "@material-ui/core";
import MainNavigator from "layout/MainNavigator/MainNavigator";

const Help = () => {
    return (
        <MainNavigator>
            <Grid item xs={12}>
                <HeroLayout variant="large" image={Steak}>
                    <Box flexGrow={1}>
                        <Typography variant="h2" align="center">Help & FAQ</Typography>
                    </Box>
                </HeroLayout>
            </Grid>
        </MainNavigator>
    );
};

export default Help;