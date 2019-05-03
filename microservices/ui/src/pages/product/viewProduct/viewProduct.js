import React, {useState} from 'react';
import PropTypes from 'prop-types';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import MainNavigator from "layout/MainNavigator/MainNavigator";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";
import {Divider, Breadcrumbs, Link, Grid, Button, Typography, Paper, InputBase, IconButton} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

import Steak from "assets/image/steak.png";
import Box from "@material-ui/core/Box";

const ViewProduct = ({ classes }) => {
    const [quantity, setQuantity] = useState(1);

    const validateNextQuantity = (nextQuantity) => {
        const minQuantity = 1;

        if (nextQuantity >= minQuantity) { setQuantity(nextQuantity) }
    };

    return (
        <MainNavigator>
            <MainNavigatorSection>
                <Grid container justify="center">
                    <Grid item xs={12} md={10}>
                        <HeroLayout variant="large">
                            <Box mb={3} display="flex" flexDirection="row">
                                <Box display="flex">
                                    <Button href="/home" variant="outlined" color="secondary">Go back</Button>
                                </Box>

                                <Box ml={2} display="flex" flex={1} alignItems="center">
                                    <Breadcrumbs aria-label="Breadcrumb">
                                        <Link color="inherit" href="/home">
                                            Collections
                                        </Link>
                                        <Link color="inherit" href="/home">
                                            XMart
                                        </Link>
                                        <Typography color="textPrimary">Product Name</Typography>
                                    </Breadcrumbs>
                                </Box>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
                                        <img src={Steak} alt="Steak" style={{maxWidth: "100%"}} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box ml={2}>
                                        <Typography variant="h2" gutterBottom>Product Name</Typography>
                                        <Typography variant="body1" paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </Typography>

                                        <Typography variant="body1" paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </Typography>

                                        <Box mb={2} display="flex" flexDirection="row" flex={1}>

                                            <Grid container>
                                                <Grid item xs={12} sm={6} style={{display: "flex"}}>
                                                    <Box flex={1} flexDirection="column" alignSelf="center">
                                                        <Typography variant="subtitle1">4 left in stock</Typography>
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <Box mx={1} display="flex" flexDirection="row">
                                                        <IconButton href={null} onClick={() => validateNextQuantity(quantity - 1)}>
                                                            <Remove />
                                                        </IconButton>

                                                        <Box display="flex" alignItems="center" flexGrow={1}>
                                                            <InputBase
                                                                type="number"
                                                                value={quantity}
                                                                onChange={e => validateNextQuantity(parseInt(e.target.value))}
                                                                inputProps={{style: {textAlign: "center"}}}
                                                                fullWidth
                                                            />
                                                        </Box>

                                                        <IconButton href={null} onClick={() => validateNextQuantity(quantity + 1)}>
                                                            <Add />
                                                        </IconButton>
                                                    </Box>

                                                    <Box display="flex" flexDirection="row">

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Button href={null} variant="text" size="large" color="primary" fullWidth>Add To Wish List</Button>
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Button href={null} variant="contained" size="large" color="primary" fullWidth>Add To Cart</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </HeroLayout>
                    </Grid>
                </Grid>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

ViewProduct.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ViewProduct;