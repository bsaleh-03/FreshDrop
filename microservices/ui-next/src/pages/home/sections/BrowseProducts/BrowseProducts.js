import React from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import {Typography, Divider} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CollectionBrowser from "components/CollectionBrowser/CollectionBrowser";

const BrowseProducts = () => {
    return (
        <HeroLayout>
            <Box pl={2} pr={2} flexGrow={1}>
                <Typography variant="h5" gutterBottom>All Products</Typography>
                <Divider />

                <CollectionBrowser collection="all" />
            </Box>
        </HeroLayout>
    );
};

export default BrowseProducts;