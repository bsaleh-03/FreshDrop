import React from 'react';
import {Grid, Typography, IconButton, Tooltip} from "@material-ui/core";
import { Phone, Info, Help } from "@material-ui/icons";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Box from "@material-ui/core/Box";

const Footer = () => {
    return (
        <HeroLayout color="primary" variant="small">
            <Grid container justify="center" alignItems="center" style={{flexGrow: 1}}>
                <Grid item xs={12} md={8}>
                    <Box mx={2} width="100%" display="flex">
                        <Box display="flex" flexGrow={1} alignItems="center">
                            <Typography variant="h6">&copy; 2019 XMart Delivery</Typography>
                        </Box>

                        <Box display="flex">
                            <Tooltip title="Contact Us">
                                <IconButton color="secondary">
                                    <Phone />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Our Story">
                                <IconButton color="secondary">
                                    <Info />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Help & FAQ">
                                <IconButton color="secondary">
                                    <Help />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </HeroLayout>
    );
};

export default Footer;