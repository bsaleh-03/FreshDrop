import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Paper,
    Typography,
    InputBase,
    IconButton,
    withStyles
} from "@material-ui/core";
import {
    Search
} from "@material-ui/icons";
import Styles from "./styles";
import shakshukaMP4 from "../../../../assets/video/shakshuka/shakshuka.mp4";
import shakshukaOGV from "../../../../assets/video/shakshuka/shakshuka.ogv";
import shakshukaWEBM from "../../../../assets/video/shakshuka/shakshuka.webm";

const HeroVideo = props => {
    const { classes } = props;

    return (
        <Grid item xs={12} className={classes.heroVideo}>
            <div className={classes.heroFilter} />

            <video className={classes.heroVideoMedia} autoPlay loop muted>
                <source src={shakshukaMP4} type='video/mp4' />
                <source src={shakshukaOGV} type='video/ogv' />
                <source src={shakshukaWEBM} type='video/webm' />
            </video>

            <div className={classes.heroContent}>
                <Typography variant="h2" align="center" className={classes.heroTitle} gutterBottom>Shop Now</Typography>

                <Paper className={classes.heroInputRoot} elevation={1}>
                    <InputBase className={classes.input} placeholder="Search..." />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <Search />
                    </IconButton>
                </Paper>
            </div>
        </Grid>
    );
};

HeroVideo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(HeroVideo);
