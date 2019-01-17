import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Card,
    CardContent,
    CardMedia,
    Hidden,
    Grid,
    Typography
} from "@material-ui/core";
import Hero from "../../../layout/hero";

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
    },
    heroHeader: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});

export class FeaturedItems extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container xs={12} alignItems="center" justify="center" className={classes.heroRoot}>
                <Grid item xs={12} className={classes.heroHeader}>
                    <Typography variant="h4" align="center" marked="center" gutterBottom>Featured Items</Typography>
                </Grid>

                <Grid container xs={12} direction="row" alignItems="center" justify="center" spacing={40}>
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
                                    <Typography variant="h4" color="primary">
                                        $2.99
                                    </Typography>
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
                                    <Typography variant="h4" color="primary">
                                        $5.99
                                    </Typography>
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
