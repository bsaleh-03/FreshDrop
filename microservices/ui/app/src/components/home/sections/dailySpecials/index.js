import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Grid,
    Typography
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    }
});

export class DailySpecials extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.heroRoot} alignItems="center" justify="center" style={{backgroundColor: 'white'}}>
                <HeroHeader>
                    <Typography variant="h4" align="center" gutterBottom>Daily Specials</Typography>
                    <Typography variant="subtitle1" align="center" paragraph>Daily specials will be listed here soon...</Typography>
                </HeroHeader>
            </Grid>
        )
    }
}

export default withStyles(styles)(DailySpecials);
