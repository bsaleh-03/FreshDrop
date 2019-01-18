import React from 'react';
import {
    Grid
} from "@material-ui/core";
import { PrimaryAppNavigator } from "../layout/appNavigator";
import withStyles from "@material-ui/core/styles/withStyles";

// Sections
import PrimaryHero from "./sections/primaryHero";
import HomeNavigationBar from "./sections/navigationBar";
import FeaturedItems from "./sections/featuredItems";
import DailySpecials from "./sections/dailySpecials";
import FeedYourOrgans from "./sections/feedYourOrgans";
import Footer from "../layout/footer";

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    appTitle: {
        flexGrow: 1
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

                        <HomeNavigationBar />

                        <FeaturedItems />

                        <DailySpecials />

                        <FeedYourOrgans />
                    </Grid>

                    <Footer />
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
