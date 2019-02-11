import React from 'react';
import {
    withWidth
} from "@material-ui/core";
import { PrimaryAppNavigator } from "../layout/appNavigator";
import withStyles from "@material-ui/core/styles/withStyles";

// Sections
import PrimaryHero from "./sections/primaryHero";
import ItemBrowser from "./sections/itemBrowser";
import Footer from "../layout/footer";
import MarketingSection from "./sections/marketing";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh',
        overflowX: "hidden"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    headerNav: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end"
    },
    gridContainer: {
        [theme.breakpoints.down('md')]: {
            marginLeft: "0 !important",
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    listItemSelected: {
        '& *': {
            color: theme.palette.primary.dark
        }
    },
    nestedDrawerItem: {
        paddingLeft: theme.spacing.unit * 4,
    },
    toolbar: theme.mixins.toolbar,
});

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, width } = this.props;

        return (
            <React.Fragment>
                <PrimaryAppNavigator classes={classes} width={width}>
                    <PrimaryHero />

                    <MarketingSection />

                    <ItemBrowser />

                    <Footer />
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withWidth()(withStyles(styles)(Home));
