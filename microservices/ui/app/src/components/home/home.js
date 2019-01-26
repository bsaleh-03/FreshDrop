import React from 'react';
import {
    Grid
} from "@material-ui/core";
import { PrimaryAppNavigator } from "../layout/appNavigator";
import withStyles from "@material-ui/core/styles/withStyles";

// Sections
import PrimaryHero from "./sections/primaryHero";
import FeaturedItems from "./sections/featuredItems";
import FeedYourOrgans from "./sections/feedYourOrgans";
import ItemBrowser from "./sections/itemBrowser";
import Footer from "../layout/footer";
import MarketingSection from "./sections/marketing";

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    appTitle: {
        flexGrow: 1
    },
    tabsRoot: {
        margin: "0 4em"
    },
    toolbar: theme.mixins.toolbar,
});

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <PrimaryAppNavigator classes={classes}>
                    <Grid container className={classes.content}>
                        <PrimaryHero />

                        <MarketingSection />

                        <FeaturedItems />

                        <ItemBrowser />

                        {/*<FeedYourOrgans />*/}
                    </Grid>

                    <Footer />
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
