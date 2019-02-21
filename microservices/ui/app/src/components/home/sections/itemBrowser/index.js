import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider,
    Grid, Hidden, IconButton,
    Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";
import Container from "../../../layout/container";
import entree from "../../../../assets/images/entree.jpg";
import {ExpandMore, ShoppingCart} from "@material-ui/icons";
import Client from 'shopify-buy';

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
        padding: theme.spacing.unit * 2
    },
    productFab: {
        position: "absolute",
        top: "50%",
        right: theme.spacing.unit * 2
    }
});

const client = Client.buildClient ({
    domain: 'xmartdelivery.myshopify.com',
    storefrontAccessToken: '46c755b162eb3627af1027e177da6e07'
});

export class ItemBrowser extends Hero {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentWillMount() {
        client.product.fetchAll().then(products => {
            console.log(products);

            this.setState({
                products: products
            });
        });
    }

    render() {
        const { classes } = this.props;
        const { products } = this.state;

        const sections = [
            {
                "title": "Featured Items",
                "items": [
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    }
                ]
            },
            {
                "title": "Meat & Poultry",
                "items": [
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    },
                    {
                        "name": "Product",
                        "price": "$2.99",
                        "image": entree
                    }
                ]
            }
        ];

        return (
            <Grid container alignItems="center" justify="center" className={classes.heroRoot}>
                <Container>
                    <Grid container spacing={24}>
                        {sections.map((section, index) => {
                            return (
                                <React.Fragment>
                                    <Grid item xs={12} key={index}>
                                        <Grid container justify="space-between">
                                            <Grid item>
                                                <Typography variant="h4">{section.title}</Typography>
                                            </Grid>

                                            <Grid item>
                                                <IconButton color="inherit">
                                                    <ExpandMore />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {section.items.map((product, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <Card>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={product.image}
                                                            title="Paella dish"
                                                        />
                                                        <Hidden mdDown>
                                                            <Button variant="fab" color="primary" aria-label="Add" className={classes.productFab}>
                                                                <AddShoppingCart />
                                                            </Button>
                                                        </Hidden>
                                                        <Divider />
                                                        <div className={classes.productInfo}>
                                                            <Typography variant="h5" gutterBottom>{product.name}</Typography>
                                                            <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>{product.price}</Typography>
                                                        </div>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        );
                                    })}
                                </React.Fragment>
                            )
                        })}

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={(product.attrs.images[0].attrs.src).toString()}
                                                title="Paella dish"
                                            />
                                            <Hidden mdDown>
                                                <Button variant="fab" color="primary" aria-label="Add" className={classes.productFab}>
                                                    <AddShoppingCart />
                                                </Button>
                                            </Hidden>
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="h5" gutterBottom>{product.title}</Typography>
                                                <Typography variant="subtitle1" style={{fontWeight: "bold"}} gutterBottom>${product.variants[0].price}</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default withStyles(styles)(ItemBrowser);
