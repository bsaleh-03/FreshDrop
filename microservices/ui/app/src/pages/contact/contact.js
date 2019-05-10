import React from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Steak from "assets/image/steak.png";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";

const Contact = () => {
    return (
        <MainNavigator>
            <MainNavigatorSection>
                <HeroLayout variant="large" color="primary" image={Steak}>
                    <Box flexGrow={1}>
                        <Typography variant="h2" align="center">Contact Us</Typography>
                    </Box>
                </HeroLayout>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

export default Contact;