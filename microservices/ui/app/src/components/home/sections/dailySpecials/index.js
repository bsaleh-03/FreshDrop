import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Grid,
    Typography
} from "@material-ui/core";
import Hero from "../../../layout/hero";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    },
    heroHeader: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});

export class DailySpecials extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container xs={12} className={classes.heroRoot} alignItems="center" justify="center" style={{backgroundColor: 'white'}}>
                <Grid item xs={12} className={classes.heroHeader}>
                    <Typography variant="h4" align="center" gutterBottom>Daily Specials</Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(DailySpecials);
