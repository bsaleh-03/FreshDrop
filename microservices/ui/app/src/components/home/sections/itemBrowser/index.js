import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card, CardContent, CardHeader, CardMedia,
    Grid, Hidden,
    Typography
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";
import Container from "../../../layout/container";
import eggplant from "../../../../assets/images/eggplant.jpg";
import grilledSteak from "../../../../assets/images/grilled-steak.jpg";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    },
    sectionHeadline: {
        fontSize: '1rem'
    },
    cardMedia: {
        height: '150px',
        backgroundSize: 'contain'
    }
});

export class ItemBrowser extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container alignItems="center" justify="center" className={classes.heroRoot}>
                <Container>
                    <HeroHeader>
                        <Typography variant="button" align="left" className={classes.sectionHeadline} gutterBottom>All Products</Typography>
                    </HeroHeader>

                    <Grid container spacing={40}>
                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={eggplant}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={eggplant}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={grilledSteak}
                                    title="Image title"
                                />

                                <CardContent>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Eggplant
                                    </Typography>
                                    <Typography variant="h6" align="center" color="primary" gutterBottom>
                                        $2.99
                                    </Typography>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(ItemBrowser);
