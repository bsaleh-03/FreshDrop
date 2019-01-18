import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Hidden,
    Grid,
    Typography, Divider
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";

// Images
import eggplant from "../../../../assets/images/eggplant.jpg";
import grilledSteak from "../../../../assets/images/grilled-steak.jpg";

const styles = theme => ({
    card: {
        display: 'flex'
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    }
});

export class FeaturedItems extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container alignItems="center" justify="center" className={classes.heroRoot}>
                <HeroHeader>
                    <Typography variant="h4" align="center" marked="center" gutterBottom>Featured Items</Typography>
                </HeroHeader>

                <Grid container alignItems="center" justify="center" spacing={40}>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Eggplant
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        December 25, 2018
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        This is a featured item description. More details should be provided here.
                                    </Typography>
                                    <Typography variant="h4" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary">
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={eggplant}
                                    title="Image title"
                                />
                            </Hidden>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Grilled Steak
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        December 25, 2018
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        This is a featured item description. More details should be provided here.
                                    </Typography>
                                    <Typography variant="h4" color="primary" gutterBottom>
                                        $5.99
                                    </Typography>
                                    <Button variant="contained" color="primary">
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />
                            </Hidden>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(FeaturedItems);
