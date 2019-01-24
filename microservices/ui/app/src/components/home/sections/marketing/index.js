import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Grid, Paper, Typography,
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";

import Container from "../../../layout/container";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4
    }
});

export class MarketingSection extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container justify="center" className={classes.heroRoot}>
                <Container>
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={6}>
                            <Paper>
                                <Typography variant="subtitle1">Section 1</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper>
                                <Typography variant="subtitle1">Section 2</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(MarketingSection);
