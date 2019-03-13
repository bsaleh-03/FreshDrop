import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card, CardActionArea, CardMedia, Divider,
    Grid, Hidden, IconButton,
    Typography, withWidth,
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import Container from "../../../layout/container";
import {ExpandMore} from "@material-ui/icons";
import Client from 'shopify-buy';
import Async from "react-async";
import {ResponsiveFab} from "../../../responsive-fab";

const styles = theme => ({
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    productInfo: {
        position: "relative",
        padding: theme.spacing.unit * 2
    },
    productTitle: {
        maxWidth: "75%"
    },
    productFab: {
        position: "absolute",
        top: "-28px",
        right: theme.spacing.unit * 2
    }
});

// Shopify Client
const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

// Load Products
const getProducts = async () => {
    try {
        return await client.product.fetchAll();
    } catch (e) {
        console.log(e);
    }
};

export class ItemBrowser extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, width } = this.props;

        return (
            <Grid container alignItems="center" justify="center" className={classes.heroRoot}>
                <Container>
                    <Async promiseFn={getProducts}>
                        <Async.Loading>
                            <p>Loading...</p>
                        </Async.Loading>

                        <Async.Resolved>
                            {data => (
                                <Grid container spacing={24}>
                                    <Grid item xs={12}>
                                        <Grid container justify="space-between">
                                            <Grid item>
                                                <Typography variant="h4">All Products</Typography>
                                            </Grid>

                                            <Grid item>
                                                <IconButton color="inherit">
                                                    <ExpandMore />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {data.map((product, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                                <Card>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={(product.attrs.images[0].attrs.src).toString()}
                                                            title="Paella dish"
                                                        />
                                                        <Divider />
                                                        <div className={classes.productInfo}>
                                                            <Typography variant="h6" noWrap gutterBottom className={classes.productTitle}>{product.title}</Typography>
                                                            <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>${product.variants[0].price}</Typography>

                                                            <ResponsiveFab variant="fab" color="primary" aria-label="Add" width={width} className={classes.productFab} />
                                                        </div>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            )}
                        </Async.Resolved>

                        <Async.Rejected>
                            {error => `Something went wrong ${error}`}
                        </Async.Rejected>
                    </Async>
                </Container>
            </Grid>
        )
    }
}

export default withWidth()(withStyles(styles)(ItemBrowser));
