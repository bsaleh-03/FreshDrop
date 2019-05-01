import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import HeroLayout from "layout/HeroLayout/HeroLayout";

import Steak from "assets/image/steak.png";
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Account = () => {
    return (
        <MainNavigator>
            <Grid item xs={12}>
                <HeroLayout variant="large" image={Steak}>
                    <Box flexGrow={1}>
                        <Typography variant="h2" align="center">My Account</Typography>
                    </Box>
                </HeroLayout>
            </Grid>
        </MainNavigator>
    );
};

export default Account;