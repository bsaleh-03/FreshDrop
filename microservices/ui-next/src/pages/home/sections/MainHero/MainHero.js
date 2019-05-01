import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SearchComponent from "components/SearchComponent/SearchComponent";
import HeroVideoLayout from "layout/HeroVideoLayout/HeroVideoLayout";

import shakshukaMP4 from "assets/video/shakshuka/shakshuka.mp4";
import shakshukaOGV from "assets/video/shakshuka/shakshuka.ogv";
import shakshukaWEBM from "assets/video/shakshuka/shakshuka.webm";
import shakshukaImage from "assets/video/shakshuka/shakshuka.jpg";

const MainHero = () => {
    return (
        <HeroVideoLayout
            variant="large"
            mp4Source={shakshukaMP4}
            ogvSource={shakshukaOGV}
            webmSource={shakshukaWEBM}
            image={shakshukaImage}
        >
            <Typography variant="h2" align="center">Shop Now</Typography>

            <Box my={2} flexGrow={1}>
                <Grid container justify="center">
                    <SearchComponent/>
                </Grid>
            </Box>
        </HeroVideoLayout>
    );
};

export default MainHero;