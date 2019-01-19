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
import Container from "../../../layout/container";

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
    sectionHeadline: {
        fontSize: '1rem'
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
                <Container>
                    <HeroHeader>
                        <Typography variant="button" align="left" className={classes.sectionHeadline} gutterBottom>Featured Items</Typography>
                    </HeroHeader>

                    <Grid container alignItems="center" justify="center" spacing={40}>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Eggplant
                                        </Typography>
                                        <Typography variant="h6" color="primary" gutterBottom>
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

                        <Grid item xs={12} md={4}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Grilled Steak
                                        </Typography>
                                        <Typography variant="h6" color="primary" gutterBottom>
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

                        <Grid item xs={12} md={4}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Grilled Steak
                                        </Typography>
                                        <Typography variant="h6" color="primary" gutterBottom>
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
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(FeaturedItems);
