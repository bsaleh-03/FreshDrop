import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Button,
    Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider,
    Grid, Hidden,
    Typography
} from "@material-ui/core";
import Hero from "../../../layout/hero";
import HeroHeader from "../../../layout/hero/header";
import Container from "../../../layout/container";
import entree from "../../../../assets/images/entree.jpg";

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
    }
});

export class ItemBrowser extends Hero {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        const products = [
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
        ];

        return (
            <Grid container alignItems="center" justify="center" className={classes.heroRoot}>
                <Container>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant="h4">Featured Products</Typography>
                        </Grid>

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.image}
                                                title="Paella dish"
                                            />
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="headline" gutterBottom>{product.name}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{product.price}</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}

                        <Grid item xs={12}>
                            <Typography variant="h4">Meat & Poultry</Typography>
                        </Grid>

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.image}
                                                title="Paella dish"
                                            />
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="headline" gutterBottom>{product.name}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{product.price}</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}

                        <Grid item xs={12}>
                            <Typography variant="h4">Ready to Eat</Typography>
                        </Grid>

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.image}
                                                title="Paella dish"
                                            />
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="headline" gutterBottom>{product.name}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{product.price}</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}

                        <Grid item xs={12}>
                            <Typography variant="h4">Freshly Made</Typography>
                        </Grid>

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.image}
                                                title="Paella dish"
                                            />
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="headline" gutterBottom>{product.name}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{product.price}</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}

                        <Grid item xs={12}>
                            <Typography variant="h4">Drinks</Typography>
                        </Grid>

                        {products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.image}
                                                title="Paella dish"
                                            />
                                            <Divider />
                                            <div className={classes.productInfo}>
                                                <Typography variant="headline" gutterBottom>{product.name}</Typography>
                                                <Typography variant="subtitle1" gutterBottom>{product.price}</Typography>
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
