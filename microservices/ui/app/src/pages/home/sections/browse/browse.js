import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    IconButton,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {
    ExpandMore
} from "@material-ui/icons";
import Styles from "./styles";
import Section from "../../../../layout/section/section";
import ProductCard from "../../../../components/productCard/productCard";
import { connect } from "react-redux";
import { fetchCollections, fetchProducts } from "../../../../redux/actions";

class Browse extends React.Component {

    componentDidMount() {
        // Fetch products
        this.props.dispatch(fetchCollections());
        this.props.dispatch(fetchProducts());
    }

    showCollection() {
        const {
            classes,
            width,
            collections,
            products,
            selectedCollection
        } = this.props;

        const allProducts = (
            <React.Fragment>
                {products.loading &&
                <p>Loading...</p>
                }

                {products.loading === false && products.items != null &&
                <Grid container spacing={24} className={classes.collectionWrapper}>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h5">All Products</Typography>
                            </Grid>

                            <Grid item>
                                <IconButton color="inherit">
                                    <ExpandMore />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    {products.items.map((product, index) => {
                        const productImage = product.images[0].src;
                        const productTitle = product.title;
                        const productPrice = product.variants[0].price;

                        return (
                            <ProductCard
                                image={productImage}
                                title={productTitle}
                                price={productPrice}
                                width={width}
                                key={index}
                            />
                        );
                    })}
                </Grid>
                }

                {products.loading === false && products.error != null &&
                <p>There was an error retrieving the products.</p>
                }
            </React.Fragment>
        );

        const collection = (
            <React.Fragment>
                {collections.loading &&
                <p>Loading...</p>
                }

                {collections.loading === false && collections.items != null &&
                collections.items.filter(collection => collection.id === selectedCollection).map((collection, index) => (
                    <Grid container spacing={24} className={classes.collectionWrapper} key={index}>
                        <Grid item xs={12}>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item>
                                    <Typography variant="h5">{collection.title}</Typography>
                                </Grid>

                                {collection.products.length > 4 &&
                                <Grid item>
                                    <IconButton color="inherit">
                                        <ExpandMore />
                                    </IconButton>
                                </Grid>
                                }
                            </Grid>
                        </Grid>

                        {collection.products.map((product, index) => {
                            const productImage = product.images[0].src;
                            const productTitle = product.title;
                            const productPrice = product.variants[0].price;

                            return (
                                <ProductCard
                                    image={productImage}
                                    title={productTitle}
                                    price={productPrice}
                                    width={width}
                                    key={index}
                                />
                            );
                        })}

                    </Grid>
                ))
                }

                {collections.loading === false && collections.error != null &&
                <p>There was an error retrieving the collections.</p>
                }
            </React.Fragment>
        );

        if (selectedCollection == null) {
            return allProducts;
        } else {
            return collection;
        }
    }

    render() {
        return (
            <Section>
                { this.showCollection() }
            </Section>
        );
    }
}

const mapStateToProps = state => {
    return {
        collections: {
            items: state.collections.items,
            loading: state.collections.loading,
            error: state.collections.error
        },
        selectedCollection: state.collections.selectedCollection,
        products: {
            items: state.products.items,
            loading: state.products.loading,
            error: state.products.error
        },
    };
};

Browse.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withWidth()(withStyles(Styles)(Browse)));
