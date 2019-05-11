import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Steak from "assets/image/steak.png";
import {Button, Grid, Typography} from "@material-ui/core";
import { Payment } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";
import MainNavigatorCenteredLayout from "layout/MainNavigator/MainNavigatorCenteredLayout";
import Card from "components/Card/Card";
import EmptyState from "components/EmptyState/EmptyState";

const Account = () => {
    return (
        <MainNavigator>
            <MainNavigatorSection>
                <HeroLayout variant="large" color="primary" image={Steak}>
                    <Box flexGrow={1}>
                        <Typography variant="h2" align="center">My Account</Typography>
                    </Box>
                </HeroLayout>
            </MainNavigatorSection>

            <MainNavigatorSection>
                <HeroLayout variant="large">
                    <MainNavigatorCenteredLayout>
                        <Box mb={2}>
                            <Card>
                                <Typography variant="h5" gutterBottom>Account Information</Typography>
                            </Card>
                        </Box>

                        <Box mb={2}>
                            <Card>
                                <Typography variant="h5" gutterBottom>Personal Information</Typography>
                            </Card>
                        </Box>

                        <Box mb={2}>
                            <Card>
                                <Typography variant="h5" gutterBottom>Payment Methods</Typography>

                                <Grid container justify="center">
                                    <Grid item xs={12} sm={6} md={4}>
                                        <EmptyState
                                            icon={<Payment fontSize="large" />}
                                            title="No Payment Methods"
                                            description="There are no payment methods added to your account."
                                        />

                                        <Box display="flex" flex={1} flexDirection="column" alignItems="center" mt={2}>
                                            <Button href={null} variant="contained" color="primary">
                                                Add Payment Method
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                    </MainNavigatorCenteredLayout>
                </HeroLayout>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

export default Account;