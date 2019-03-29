import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Collapse,
    withStyles
} from "@material-ui/core";
import {
    Fastfood,
    AllInbox,
    LocalDining,
    RoomService,
    Waves,
    Kitchen,
    Person,
    ShoppingCart,
    History,
    CreditCard,
    Settings,
    Info,
    Phone,
    Help,
    ExpandLess,
    ExpandMore
} from "@material-ui/icons";
import Styles from "./styles";

class PrimaryDrawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: true,
            browseOpen: true,
        };
    }

    toggleBrowse(state) {
        this.setState({ browseOpen: state });
    }

    render() {
        const { drawerOpen } = this.state;
        const { classes } = this.props;

        return (
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
        );
    }
}

PrimaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(PrimaryDrawer);
