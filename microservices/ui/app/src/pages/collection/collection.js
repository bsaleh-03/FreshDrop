import React from 'react';
import MainNavigator from "layout/MainNavigator/MainNavigator";
import {Breadcrumbs, Button, Grid, Link, Typography} from "@material-ui/core";
import MainNavigatorSection from "layout/MainNavigator/MainNavigatorSection";
import HeroLayout from "layout/HeroLayout/HeroLayout";
import Box from "@material-ui/core/Box";
import useReactRouter from "use-react-router";
import CollectionBrowser from "components/CollectionBrowser/CollectionBrowser";
import {connect} from "react-redux";

const Collection = ({ collections }) => {
    // Get the collection id
    const { match } = useReactRouter();
    const { collectionId } = match.params;

    const currentCollection = collections.filter(collectionItem => collectionItem.id === collectionId)[0];

    return (
        <MainNavigator>
            <MainNavigatorSection>
                <HeroLayout variant="large" color="primary" image={currentCollection.image ? currentCollection.image.src : null}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}>
                            <Box flexGrow={1}>
                                <Typography variant="h2" align="center">{currentCollection.title}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </HeroLayout>
            </MainNavigatorSection>

            <MainNavigatorSection>
                <Grid container justify="center">
                    <Grid item xs={12} md={10}>
                        <HeroLayout variant="large">
                            <Box mb={3} display="flex" flexDirection="row">
                                <Box display="flex">
                                    <Button href="/home" variant="outlined" color="secondary">Go back</Button>
                                </Box>

                                <Box ml={2} display="flex" flex={1} alignItems="center">
                                    <Breadcrumbs aria-label="Breadcrumb">
                                        <Link color="inherit" href="/home" component="a">
                                            Collections
                                        </Link>
                                        <Typography color="textPrimary">{currentCollection.title}</Typography>
                                    </Breadcrumbs>
                                </Box>
                            </Box>

                            <CollectionBrowser collection={collectionId} showTitle={false} />
                        </HeroLayout>
                    </Grid>
                </Grid>
            </MainNavigatorSection>
        </MainNavigator>
    );
};

const mapStateToProps = state => ({
    loading: state.collections.loading,
    collections: state.collections.items
});

export default connect(mapStateToProps)(Collection);