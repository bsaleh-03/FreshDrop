import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Grid, Paper, Typography,
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";
import image from "../../../../assets/images/branding-1.jpg"
import image2 from "../../../../assets/images/vegetables.jpg"

import Container from "../../../layout/container";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4
    },
    imageContainer: {
        maxWidth: "100%",
        padding: theme.spacing.unit * 2
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
                                <img src={image} alt="Marketing 1" className={classes.imageContainer} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper>
                                <img src={image2} alt="Marketing 2" className={classes.imageContainer} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(MarketingSection);
