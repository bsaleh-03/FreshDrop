import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {Divider, Grid, Typography, withStyles} from "@material-ui/core";
import ProductCard from "components/ProductCard/ProductCard";
import {bindActionCreators} from "redux";
import {fetchCollections} from "redux/actions";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import AsyncView from "components/AsyncView/AsyncView";

const CollectionBrowser = ({ classes, showTitle = true, collection, collections, loading, fetchCollections }) => {
    // Fetch collections from shopify
    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    let filteredCollections = collections;

    if (collection !== "all") {
        filteredCollections = collections.filter(collectionItem => collectionItem.id === collection);
    }

    return (
        <AsyncView loading={loading}>
            { filteredCollections.map((collection, idx) => (
                <Box mb={2} flexGrow={1} key={idx}>
                    { showTitle && (
                        <Box mb={2}>
                            <Typography variant="h5" gutterBottom>{collection.title}</Typography>
                            <Divider component="hr" />
                        </Box>
                    )}

                    <Grid container spacing={2} key={idx}>
                        { collection.products.map((product, idx) => (
                            <Grid item xs={12} sm={6} md={3} lg={2} key={idx} style={{display: "flex"}}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </AsyncView>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCollections
    }, dispatch);
};

const mapStateToProps = state => ({
    loading: state.collections.loading,
    collections: state.collections.items
});

CollectionBrowser.propTypes = {
    classes: PropTypes.object.isRequired,
    collection: PropTypes.string.isRequired,
    showTitle: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(CollectionBrowser));