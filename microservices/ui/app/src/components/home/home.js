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

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    headerNav: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    nestedDrawerItem: {
        paddingLeft: theme.spacing.unit * 4,
    },
    tabsFlexContainer: {
        justifyContent: "space-evenly"
    },
    tabsContainer: {
        flexGrow: 1
    },
    tabsIndicator: {
        display: "none"
    },
    tabSelected: {
        borderBottom: "2px solid #b0f16f"
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
                    <Grid container>
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
