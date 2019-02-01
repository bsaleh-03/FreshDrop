import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia,
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
    },
    productRoot: {
        display: "flex",
        flexDirection: "column"
    },
    productName: {
        marginTop: theme.spacing.unit * 2
    },
    productImage: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        '& img': {
            margin: "0 auto"
        }
    },
    productDescription: {},
    productActions: {
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
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
                        <Grid container justify="space-between" alignItems="center" spacing={24}>
                            <Grid item>
                                <Typography variant="button" align="left" className={classes.sectionHeadline}>All Products</Typography>
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="secondary">
                                    Browse All
                                </Button>
                            </Grid>
                        </Grid>
                    </HeroHeader>

                    <Grid container spacing={40} justify="space-evenly">
                        <Grid item xs={12} md>
                            <div className={classes.productRoot}>
                                <CardActionArea>
                                    <div className={classes.productName}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Eggplant
                                        </Typography>
                                    </div>

                                    <div className={classes.productImage}>
                                        <img src={grilledSteak} title="Image title" width="150" />
                                    </div>

                                    <div className={classes.productDescription}>
                                        <Typography variant="h5" align="center" color="primary" gutterBottom>
                                            $2.99
                                        </Typography>
                                    </div>
                                </CardActionArea>

                                <div className={classes.productActions}>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md>
                            <div className={classes.productRoot}>
                                <CardActionArea>
                                    <div className={classes.productName}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Eggplant
                                        </Typography>
                                    </div>

                                    <div className={classes.productImage}>
                                        <img src={grilledSteak} title="Image title" width="150" />
                                    </div>

                                    <div className={classes.productDescription}>
                                        <Typography variant="h5" align="center" color="primary" gutterBottom>
                                            $2.99
                                        </Typography>
                                    </div>
                                </CardActionArea>

                                <div className={classes.productActions}>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md>
                            <div className={classes.productRoot}>
                                <CardActionArea>
                                    <div className={classes.productName}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Eggplant
                                        </Typography>
                                    </div>

                                    <div className={classes.productImage}>
                                        <img src={grilledSteak} title="Image title" width="150" />
                                    </div>

                                    <div className={classes.productDescription}>
                                        <Typography variant="h5" align="center" color="primary" gutterBottom>
                                            $2.99
                                        </Typography>
                                    </div>
                                </CardActionArea>

                                <div className={classes.productActions}>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} md>
                            <div className={classes.productRoot}>
                                <CardActionArea>
                                    <div className={classes.productName}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Eggplant
                                        </Typography>
                                    </div>

                                    <div className={classes.productImage}>
                                        <img src={grilledSteak} title="Image title" width="150" />
                                    </div>

                                    <div className={classes.productDescription}>
                                        <Typography variant="h5" align="center" color="primary" gutterBottom>
                                            $2.99
                                        </Typography>
                                    </div>
                                </CardActionArea>

                                <div className={classes.productActions}>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(ItemBrowser);
