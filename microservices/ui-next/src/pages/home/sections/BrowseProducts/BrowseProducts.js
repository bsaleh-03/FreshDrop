import React from 'react';
import CollectionBrowser from "components/CollectionBrowser/CollectionBrowser";
import HeroLayout from "layout/HeroLayout/HeroLayout";

const BrowseProducts = () => {
    return (
        <HeroLayout variant="large">
            <CollectionBrowser collection="all" />
        </HeroLayout>
    );
};

export default BrowseProducts;