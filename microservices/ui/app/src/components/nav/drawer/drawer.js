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
import { connect } from "react-redux";
import { fetchCollections } from "../../../redux/actions";

class PrimaryDrawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            browseOpen: true,
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchCollections());
    }

    toggleBrowse(state) {
        this.setState({ browseOpen: state });
    }

    render() {
        const { classes, open, collections } = this.props;

        const collectionIcons = [
            <LocalDining />,
            <RoomService />,
            <Waves />,
            <Kitchen />,
            <Fastfood />
        ];

        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />

                <List>
                    <ListItem button selected onClick={() => this.toggleBrowse(!this.state.browseOpen)} classes={{selected: classes.listItemSelected}}>
                        <ListItemIcon><Fastfood /></ListItemIcon>
                        <ListItemText primary="Browse Aisles" />
                        {this.state.browseOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.browseOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nestedDrawerItem}>
                                <ListItemIcon>
                                    <AllInbox />
                                </ListItemIcon>
                                <ListItemText inset primary="All Aisles" />
                            </ListItem>

                            {collections.loading === false && collections.items != null &&
                                collections.items.map((collection, index) => {
                                    return (
                                        <ListItem button className={classes.nestedDrawerItem} key={index}>
                                            <ListItemIcon>
                                                {collectionIcons[index]}
                                            </ListItemIcon>
                                            <ListItemText inset primary={collection.title} />
                                        </ListItem>
                                    )
                                })
                            }
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

const mapStateToProps = state => {
    return {
        collections: {
            items: state.collections.items,
            loading: state.collections.loading,
            error: state.collections.error
        }
    };
};

PrimaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(withStyles(Styles)(PrimaryDrawer));
