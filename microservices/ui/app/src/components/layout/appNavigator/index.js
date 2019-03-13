import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Divider,
    Menu,
    MenuItem,
    IconButton,
    Grid, Button
} from "@material-ui/core";
import {
    AllInbox,
    Waves,
    Phone,
    LocalDining,
    RoomService,
    ExitToApp,
    Fastfood,
    Kitchen,
    CreditCard,
    ShoppingCart,
    Person,
    Settings,
    History,
    Help,
    Info,
    ExpandLess,
    ExpandMore, Payment
} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../../assets/images/logo.svg";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import {isWidthDown} from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/es/Typography/Typography";
import Entree from "../../../assets/images/entree.jpg";

const cartItems = [
    {
        title: "Cart Item",
        image: Entree,
        description: "This is a simple description for a shopping cart item.",
        price: "$7.99",
        quantity: 1
    },
    {
        title: "Cart Item",
        image: Entree,
        description: "This is a simple description for a shopping cart item.",
        price: "$7.99",
        quantity: 1
    }
];

export class PrimaryAppNavigator extends React.Component {
    constructor(props){
        super(props);

        const isSmallScreen = isWidthDown('md', props.width);

        this.state = {
            anchorEl: null,
            shoppingCartAnchor: null,
            drawerOpen: !isSmallScreen,
            browseOpen: true
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.toggleBrowse = this.toggleBrowse.bind(this);
    }

    handleLogout() {
        // Remove auth token
        localStorage.removeItem("auth_token");

        // Redirect
        window.location = "/";
    }

    toggleBrowse(state) {
        this.setState({ browseOpen: state });
    }

    toggleDrawer(state) {
        this.setState({ drawerOpen: state });
    }

    handleMenuClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleShoppingCartClick = (event) => {
        this.setState({ shoppingCartAnchor: event.currentTarget });
    };

    handleShoppingCartClose = () => {
        this.setState({ shoppingCartAnchor: null });
    };

    render() {
        const { anchorEl, shoppingCartAnchor, drawerOpen } = this.state;
        const { classes, children } = this.props;

        const contentStyle = {
            transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
        };

        if (drawerOpen) {
            contentStyle.marginLeft = 120;
        }

        return (
            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="fixed" elevation={1} className={classes.appBar}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Toolbar>

                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={() => this.toggleDrawer(!drawerOpen)}
                                    style={{marginRight: 8, marginLeft: "-10px"}}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <img src={logo} height="40" />

                                <div className={classes.headerNav}>
                                    <IconButton
                                        color="inherit"
                                        aria-owns={shoppingCartAnchor ? 'shoppingCartMenu' : null}
                                        aria-haspopup="true"
                                        aria-label="Menu"
                                        onClick={this.handleShoppingCartClick}>
                                        <ShoppingCart />

                                        {/*<div className={classes.cartCounter}>0</div>*/}
                                    </IconButton>

                                    <IconButton color="inherit" aria-label="Menu" onClick={() => this.handleLogout()}>
                                        <ExitToApp />
                                    </IconButton>

                                    <IconButton
                                        color="inherit"
                                        aria-owns={anchorEl ? 'appBarMenu' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenuClick}>
                                        <Person />
                                    </IconButton>

                                    <Menu
                                        id="shoppingCartMenu"
                                        classes={{paper: classes.shoppingCartMenu}}
                                        anchorEl={shoppingCartAnchor}
                                        getContentAnchorEl={null}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        open={Boolean(shoppingCartAnchor)}
                                        onClose={this.handleShoppingCartClose}
                                    >
                                        <div className={classes.shoppingCartMenuContent}>
                                            <Typography variant="h5" align="center" gutterBottom>Shopping Cart</Typography>

                                            <Divider className={classes.cartItemDivider} />

                                            {cartItems.map((cartItem, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <div className={classes.cartItemContainer}>
                                                            <div className={classes.itemImage} style={{backgroundImage: `url(${cartItem.image})`}} />

                                                            <div className={classes.cartItemInfo}>
                                                                <Typography variant="h6" gutterBottom>{cartItem.title}</Typography>
                                                                <Typography variant="subtitle1" gutterBottom>{cartItem.description}</Typography>
                                                                <div className={classes.cartItemFooter}>
                                                                    <Typography variant="subtitle1" style={{fontWeight: "bold", alignSelf: "center", flexGrow: 1}}>{cartItem.price}</Typography>
                                                                    <Button variant="text" color="secondary">Remove</Button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <Divider className={classes.cartItemDivider} />
                                                    </React.Fragment>
                                                )
                                            })}

                                            <div className={classes.cartPricing}>
                                                <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Subtotal:</Typography>
                                                <Typography variant="subtitle1" gutterBottom>69.99</Typography>
                                            </div>

                                            <div className={classes.cartPricing}>
                                                <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Total:</Typography>
                                                <Typography variant="subtitle1" gutterBottom>70.00</Typography>
                                            </div>

                                            <div className={classes.cartActions}>
                                                <Button variant="contained" color="secondary" size="medium"><ShoppingCart className={classes.buttonIcon} /> View Cart</Button>
                                                <Button variant="contained" color="primary" size="medium"><Payment className={classes.buttonIcon} /> Checkout</Button>
                                            </div>
                                        </div>
                                    </Menu>

                                    <Menu
                                        id="appBarMenu"
                                        anchorEl={anchorEl}
                                        getContentAnchorEl={null}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleMenuClose}
                                    >
                                        <MenuItem onClick={this.handleMenuClose}>
                                            <ListItemIcon className={classes.icon}>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText classes={{ primary: classes.primary }} inset primary="Account" />
                                        </MenuItem>

                                        <MenuItem onClick={this.handleMenuClose}>
                                            <ListItemIcon className={classes.icon}>
                                                <History />
                                            </ListItemIcon>
                                            <ListItemText classes={{ primary: classes.primary }} inset primary="My Orders" />
                                        </MenuItem>

                                        <MenuItem onClick={this.handleMenuClose}>
                                            <ListItemIcon className={classes.icon}>
                                                <Settings />
                                            </ListItemIcon>
                                            <ListItemText classes={{ primary: classes.primary }} inset primary="Settings" />
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={this.handleMenuClose}>
                                            <ListItemIcon className={classes.icon}>
                                                <Help />
                                            </ListItemIcon>
                                            <ListItemText classes={{ primary: classes.primary }} inset primary="Help" />
                                        </MenuItem>

                                        <MenuItem onClick={this.handleMenuClose}>
                                            <ListItemIcon className={classes.icon}>
                                                <Info />
                                            </ListItemIcon>
                                            <ListItemText classes={{ primary: classes.primary }} inset primary="About" />
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    open={drawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button selected onClick={() => this.toggleBrowse(!this.state.browseOpen)} classes={{selected: classes.listItemSelected}}>
                            <ListItemIcon><Fastfood /></ListItemIcon>
                            <ListItemText primary="Browse Isles" />
                            {this.state.browseOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={this.state.browseOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <AllInbox />
                                    </ListItemIcon>
                                    <ListItemText inset primary="All Isles" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <LocalDining />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Meat" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <RoomService />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Poultry" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <Waves />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Seafood" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button>
                            <ListItemIcon><Kitchen /></ListItemIcon>
                            <ListItemText primary="Recipes" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><Person /></ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><ShoppingCart /></ListItemIcon>
                            <ListItemText primary="Shopping Cart" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText primary="Order History" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><CreditCard /></ListItemIcon>
                            <ListItemText primary="Billing" />
                        </ListItem>
                    </List>

                    <Divider />

                    <List>
                        <ListItem button>
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><Info /></ListItemIcon>
                            <ListItemText primary="Our Story" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><Phone /></ListItemIcon>
                            <ListItemText primary="Contact Us" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><Help /></ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>
                </Drawer>

                <div>
                    <Grid container className={classes.gridContainer} style={contentStyle}>
                        { children }
                    </Grid>
                </div>
            </div>
        );
    }
}

export default PrimaryAppNavigator;
