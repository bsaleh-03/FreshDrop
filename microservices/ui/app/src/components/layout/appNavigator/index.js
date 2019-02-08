import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Divider,
    Menu,
    MenuItem,
    IconButton, Paper, Tabs, Tab, Grid
} from "@material-ui/core";
import {
    AllInbox,
    Waves,
    LocalBar,
    Restaurant,
    RoomService,
    ExitToApp, Fastfood, Favorite, Kitchen,
    CreditCard,
    MoreVert,
    ShoppingCart,
    Person,
    Settings,
    History,
    Help,
    Info, Inbox, Mail, ExpandLess, ExpandMore, StarBorder
} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu";
import { appName } from "../../../constants";
import Container from "../container";
import logo from "../../../assets/images/logo.svg";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuList from "@material-ui/core/MenuList";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";

export class PrimaryAppNavigator extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            anchorEl: null,
            drawerOpen: true,
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

    render() {
        const { anchorEl } = this.state;
        const { classes, children } = this.props;

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
                                    onClick={() => this.toggleDrawer(!this.state.drawerOpen)}
                                    style={{marginRight: 8, marginLeft: "-10px"}}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <img src={logo} height="40" />

                                <div className={classes.headerNav}>
                                    <IconButton color="inherit" aria-label="Menu">
                                        <ShoppingCart />
                                    </IconButton>

                                    <IconButton color="inherit" aria-label="Menu" onClick={() => this.handleLogout()}>
                                        <ExitToApp />
                                    </IconButton>

                                    <IconButton color="inherit"
                                                aria-owns={anchorEl ? 'appBarMenu' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleMenuClick}
                                    >
                                        <Person />
                                    </IconButton>

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
                    open={this.state.drawerOpen}
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
                                        <Waves />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Meat & Poultry" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <RoomService />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Ready to Eat" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <Restaurant />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Freshly Made" />
                                </ListItem>

                                <ListItem button className={classes.nestedDrawerItem}>
                                    <ListItemIcon>
                                        <LocalBar />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Drinks" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button>
                            <ListItemIcon><Kitchen /></ListItemIcon>
                            <ListItemText primary="Recipes" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><Favorite /></ListItemIcon>
                            <ListItemText primary="Consultation" />
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
                            <ListItemText primary="My Orders" />
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
                            <ListItemText primary="About" />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon><Help /></ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>
                </Drawer>

                <div className={classes.content}>
                    { children }
                </div>
            </div>
        );
    }
}

export default PrimaryAppNavigator;
