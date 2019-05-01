import React from 'react';
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Phone, Info, Help } from "@material-ui/icons";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Box from "@material-ui/core/Box";

const Footer = () => {
    return (
        <HeroLayout color="primary">
            <Grid container justify="center">
                <Grid item xs={12} md={8}>
                    <Box mx={2} width="100%" display="flex">
                        <Box display="flex" flexGrow={1} alignItems="center">
                            <Typography variant="h6">&copy; 2019 XMart Delivery</Typography>
                        </Box>

                        <Box display="flex">
                            <IconButton color="secondary">
                                <Phone />
                            </IconButton>

                            <IconButton color="secondary">
                                <Info />
                            </IconButton>

                            <IconButton color="secondary">
                                <Help />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </HeroLayout>
    );
};

export default Footer;