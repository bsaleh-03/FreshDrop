import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Typography,
    IconButton,
    withStyles,
    withWidth
} from "@material-ui/core";
import {
    ExpandMore
} from "@material-ui/icons";
import Styles from "./styles";
import ProductCard from "../../../../components/productCard/productCard";
import Section from "../../../../layout/section/section";
import {connect} from "react-redux";

class Browse extends React.Component {
    render() {
        const { products, selectedCollection, width, classes } = this.props;

        let currentCollection = (selectedCollection !== null ? selectedCollection.products : products.items);
        let collectionTitle = (selectedCollection !== null ? selectedCollection.title : "All Products");

        return (
            <Section>
                <Grid container spacing={24} className={classes.collectionWrapper}>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h5">{collectionTitle}</Typography>
                            </Grid>

                            {currentCollection.length > 4 &&
                            <Grid item>
                                <IconButton color="inherit">
                                    <ExpandMore />
                                </IconButton>
                            </Grid>
                            }
                        </Grid>
                    </Grid>

                    {currentCollection.map((product, index) => {
                        return (
                            <ProductCard
                                product={product}
                                width={width}
                                key={index}
                            />
                        );
                    })}

                </Grid>
            </Section>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    selectedCollection: state.collections.selected
});

Browse.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withWidth()(withStyles(Styles)(Browse)));
