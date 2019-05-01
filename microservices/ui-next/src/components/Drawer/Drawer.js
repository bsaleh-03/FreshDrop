import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import {
    Avatar,
    Drawer as MuiDrawer,
    Divider,
    List,
    ListSubheader,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    withStyles
} from "@material-ui/core";
import {
    Image,
    ShoppingCart,
    Settings,
    History,
    AccountCircle,
    Info,
    Phone,
    Help
} from "@material-ui/icons";

const Drawer = ({ classes, open }) => {
    return (
        <MuiDrawer
            variant="persistent"
            open={open}
            className={classes.root}
            classes={{paper: classes.drawerPaper}}
        >
            <div className={classes.toolbar} />

            <List
                component="nav"
                subheader={<ListSubheader component="div">Collections</ListSubheader>}
            >
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Deli" />
                </ListItem>

                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Poultry" />
                </ListItem>

                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Beef" />
                </ListItem>

                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Lamb" />
                </ListItem>

                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Seafood" />
                </ListItem>
            </List>

            <Divider />

            <List
                component="nav"
                subheader={<ListSubheader component="div">Account</ListSubheader>}
            >
                <ListItem button component="a" href="/account">
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="My Account" />
                </ListItem>

                <ListItem button component="a" href="/orders">
                    <ListItemIcon>
                        <History />
                    </ListItemIcon>
                    <ListItemText primary="Order History" />
                </ListItem>

                <ListItem button component="a" href="/cart">
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary="Shopping Cart" />
                </ListItem>
            </List>

            <Divider />

            <List
                component="nav"
                subheader={<ListSubheader component="div">More</ListSubheader>}
            >
                <ListItem button component="a" href="/account/settings">
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>

                <ListItem button component="a" href="/story">
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary="Our Story" />
                </ListItem>

                <ListItem button component="a" href="/contact">
                    <ListItemIcon>
                        <Phone />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                </ListItem>

                <ListItem button component="a" href="/help">
                    <ListItemIcon>
                        <Help />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
            </List>
        </MuiDrawer>
    );
};

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

export default withStyles(Styles)(Drawer);