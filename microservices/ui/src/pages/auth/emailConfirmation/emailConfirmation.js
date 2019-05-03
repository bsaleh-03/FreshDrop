import React from 'react';
import PropTypes from 'prop-types';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import CenteredLayout from "layout/CenteredLayout/CenteredLayout";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import {Avatar, Grid, Typography} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import Green from "@material-ui/core/colors/green";
import Box from "@material-ui/core/Box";

const EmailConfirmation = ({ email }) => {
    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                <AuthLayout>
                    <Grid container justify="center">
                        <Box textAlign="center" p={2}>
                            <Avatar style={{margin: "1rem auto", backgroundColor: Green["600"]}}>
                                <Check />
                            </Avatar>

                            <Typography variant="h5" gutterBottom>Success</Typography>

                            <Typography variant="subtitle1" align="center">An account verification email has been sent to { email }</Typography>
                        </Box>
                    </Grid>
                </AuthLayout>
            </CenteredLayout>
        </HeroLayout>
    );
};

EmailConfirmation.propTypes = {
    email: PropTypes.string.isRequired
};

export default EmailConfirmation;