import React from 'react';
import {Grid, Typography, IconButton, Tooltip, makeStyles} from "@material-ui/core";
import { Phone, Info, Help } from "@material-ui/icons";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Box from "@material-ui/core/Box";
import MainNavigatorSection from "../../layout/MainNavigator/MainNavigatorSection";

const useStyles = makeStyles(theme => ({
    centeredMobile: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            textAlign: "center"
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <MainNavigatorSection>
            <HeroLayout color="primary" variant="small">
                <Box mx={4}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6" className={classes.centeredMobile}>&copy; 2019 XMart Delivery</Typography>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box display="flex" flex={1} justifyContent="flex-end" className={classes.centeredMobile}>
                                        <Tooltip title="Contact Us">
                                            <IconButton color="secondary" href={null}>
                                                <Phone />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Our Story">
                                            <IconButton color="secondary" href={null}>
                                                <Info />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Help & FAQ">
                                            <IconButton color="secondary" href={null}>
                                                <Help />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </HeroLayout>
        </MainNavigatorSection>
    );
};

export default Footer;