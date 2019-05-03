import React, {useState} from 'react';
import { IconButton, Menu, MenuItem, Divider, ListItemText, ListItemIcon, Tooltip } from "@material-ui/core";
import { Person, History, Settings, Help, Info, ExitToApp } from "@material-ui/icons";

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Tooltip title="Logout">
                <IconButton
                    color="inherit"
                    onClick={() => window.location = "/"}
                >
                    <ExitToApp />
                </IconButton>
            </Tooltip>

            <Tooltip title="My Account">
                <IconButton
                    color="inherit"
                    aria-owns={anchorEl ? 'userMenu' : null}
                    aria-haspopup="true"
                    onClick={handleMenuClick}>
                    <Person />
                </IconButton>
            </Tooltip>

            <Menu
                id="appBarMenu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem button={true} component="a" href="/account" onClick={handleMenuClose}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                </MenuItem>

                <MenuItem button={true} component="a" href="/orders" onClick={handleMenuClose}>
                    <ListItemIcon>
                        <History />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                </MenuItem>

                <MenuItem button={true} component="a" href="/account/settings" onClick={handleMenuClose}>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </MenuItem>

                <Divider component="hr" />

                <MenuItem button={true} component="a" href="/help" onClick={handleMenuClose}>
                    <ListItemIcon>
                        <Help />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </MenuItem>

                <MenuItem button={true} component="a" href="/story" onClick={handleMenuClose}>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary="Our Story" />
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default UserMenu;