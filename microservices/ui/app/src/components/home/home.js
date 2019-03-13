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
    cartCounter: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        right: "-11px",
        bottom: "5%",
        marginRight: theme.spacing.unit,
        fontSize: "0.5rem",
        color: "white",
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.main,
        '& *': {
            alignSelf: "center"
        }
    },
    shoppingCartMenu: {

    },
    shoppingCartMenuContent: {
        outline: "none",
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    cartItemContainer: {
        display: "flex",
    },
    cartItemDivider: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    cartActions: {
        display: "flex",
        marginTop: 16,
        '& > button': {
            flexGrow: 1
        },
        '& :not(:last-child)': {
            marginRight: theme.spacing.unit * 2
        }
    },
    cartItemFooter: {
        display: 'flex'
    },
    cartPricing: {
        display: "flex",
    },
    itemImage: {
        width: 64,
        height: 64,
        marginRight: theme.spacing.unit * 2,
        background: 'no-repeat center center',
        backgroundSize: 'contain',
        backgroundColor: '#f7f7f7'
    },
    buttonIcon: {
        marginRight: theme.spacing.unit
    }
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
