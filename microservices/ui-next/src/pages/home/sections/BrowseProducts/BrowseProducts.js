import React from 'react';
import {Typography, Divider} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CollectionBrowser from "components/CollectionBrowser/CollectionBrowser";
import HeroLayout from "layout/HeroLayout/HeroLayout";

const BrowseProducts = () => {
    return (
        <HeroLayout variant="large">
            <Typography variant="h5" gutterBottom>All Products</Typography>
            <Divider component="hr" />

            <Box my={2} flexGrow={1}>
                <CollectionBrowser collection="all" />
            </Box>
        </HeroLayout>
    );
};

export default BrowseProducts;