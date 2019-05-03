import React, {Component} from 'react';
import {
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem
} from "@material-ui/core";
import {
    ExitToApp,
    Help,
    History,
    Info,
    Person,
    Settings
} from "@material-ui/icons";

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null
        };
    }

    handleMenuClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout() {
        // Remove auth token
        localStorage.removeItem("auth_token");

        // Redirect
        window.location = "/";
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <React.Fragment>
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
                    id="appBarMenu"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={this.handleMenuClose}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText inset primary="Account" />
                    </MenuItem>

                    <MenuItem onClick={this.handleMenuClose}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText inset primary="My Orders" />
                    </MenuItem>

                    <MenuItem onClick={this.handleMenuClose}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText inset primary="Settings" />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleMenuClose}>
                        <ListItemIcon>
                            <Help />
                        </ListItemIcon>
                        <ListItemText inset primary="Help" />
                    </MenuItem>

                    <MenuItem onClick={this.handleMenuClose}>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText inset primary="About" />
                    </MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

export default UserMenu;