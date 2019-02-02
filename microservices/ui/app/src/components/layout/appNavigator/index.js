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
    ExitToApp, Fastfood, Favorite, Kitchen,
    MoreVert,
    ShoppingCart,
    Person,
    Settings,
    History,
    Help,
    Info, Inbox, Mail
} from "@material-ui/icons"
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

export class PrimaryAppNavigator extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            anchorEl: null
        };
    }

    handleLogout() {
        // Remove auth token
        localStorage.removeItem("auth_token");

        // Redirect
        window.location = "/";
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
                    <Container>
                        <Toolbar>

                            <img src={logo} height="40" />

                            {/*<Typography variant="h6" color="inherit" noWrap>
                                { appName }
                            </Typography>*/}

                            <Hidden xsDown>
                                <div className={classes.appTitle}>
                                    <Tabs
                                        value={0}
                                        action={() => {return 0;}}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="fullWidth"
                                        centered
                                        classes={{indicator: classes.tabsIndicator}}
                                    >
                                        <Tab label="Browse Isles" icon={<Fastfood />} classes={{root: classes.tabsContainer, selected: classes.tabSelected}} />
                                        <Tab label="Recipes" icon={<Kitchen />} classes={{root: classes.tabsContainer}} />
                                        <Tab label="Nutritional Consultation" icon={<Favorite />} classes={{root: classes.tabsContainer}} />
                                    </Tabs>
                                </div>
                            </Hidden>

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
                        </Toolbar>
                    </Container>
                </AppBar>

                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <List>
                            <ListItem button>
                                <ListItemIcon><Fastfood /></ListItemIcon>
                                <ListItemText primary="Browse Isles" />
                            </ListItem>

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
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Hidden>

                <div className={classes.content}>
                    { children }
                </div>
            </div>
        );
    }
}

export default PrimaryAppNavigator;
