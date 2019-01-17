import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import shakshukaMP4 from "../../../../assets/video/shakshuka/shakshuka.mp4";
import shakshukaOGV from "../../../../assets/video/shakshuka/shakshuka.ogv";
import shakshukaWEBM from "../../../../assets/video/shakshuka/shakshuka.webm";
import {Grid, Paper, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {Search} from "@material-ui/icons";
import {Hero} from "../../../layout/hero";

const styles = theme => ({
    heroVideo: {
        position: 'relative',
        overflow: 'hidden',
        bottom: '0%',
        left: '0%',
        height: 'auto',
        minHeight: '400px',
        width: '100%'
    },
    heroFilter: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    heroVideoMedia: {
        position: 'absolute',
        zIndex: 0,
        bottom: 0
    },
    heroContent: {
        position: 'relative',
        zIndex: 500,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroTitle: {
        color: theme.palette.common.white
    },
    heroInputRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
});

export class PrimaryHero extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Hero>
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
            </Hero>
        )
    }
}

export default withStyles(styles)(PrimaryHero);
