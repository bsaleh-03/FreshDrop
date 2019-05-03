import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Divider, Grid, Typography, withStyles} from "@material-ui/core";
import ProductCard from "components/ProductCard/ProductCard";
import {bindActionCreators} from "redux";
import {fetchCollections} from "redux/actions";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";

const CollectionBrowser = ({ classes, collection, collections, fetchCollections }) => {

    // Fetch collections from shopify
    useEffect(() => {
        fetchCollections();
    }, []);

    if (collection !== "all") {
        collections.filter(collection => collection.id !== collection);
    }

    return (
        <React.Fragment>
            { collections.map((collection, idx) => (
                <Box mb={2} flexGrow={1}>
                    <Box mb={2}>
                        <Typography variant="h5" gutterBottom>{collection.title}</Typography>
                        <Divider component="hr" />
                    </Box>

                    <Grid container spacing={2} key={idx}>
                        { collection.products.map((product, idx) => (
                            <Grid item xs={12} sm={6} md={3} lg={2} key={idx} style={{display: "flex"}}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCollections
    }, dispatch);
};

const mapStateToProps = state => ({
   collections: state.collections.items
});

CollectionBrowser.propTypes = {
    classes: PropTypes.object.isRequired,
    collection: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(CollectionBrowser));