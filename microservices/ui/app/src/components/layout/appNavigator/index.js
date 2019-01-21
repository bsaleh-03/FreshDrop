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
    ShoppingCart
} from "@material-ui/icons"
import { appName } from "../../../constants";
import Container from "../container";

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

                <AppBar position="fixed" elevation="1" className={classes.appBar}>
                    <Container>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                { appName }
                            </Typography>

                            <Tabs
                                value={0}
                                indicatorColor="secondary"
                                textColor="inherit"
                                className={classes.appTitle}
                            >
                                <Tab label="Browse Isles" icon={<Fastfood />} />
                                <Tab label="Recipes" icon={<Kitchen />} />
                                <Tab label="Nutritional Consultation" icon={<Favorite />} />
                            </Tabs>

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
                                <MoreVert />
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
                                <MenuItem onClick={this.handleMenuClose}>Account</MenuItem>
                                <MenuItem onClick={this.handleMenuClose}>My Orders</MenuItem>
                                <MenuItem onClick={this.handleMenuClose}>Settings</MenuItem>
                                <Divider />
                                <MenuItem onClick={this.handleMenuClose}>Help</MenuItem>
                                <MenuItem onClick={this.handleMenuClose}>About</MenuItem>
                            </Menu>
                        </Toolbar>
                    </Container>
                </AppBar>

                <div className={classes.content}>
                    { children }
                </div>
            </div>
        );
    }
}

export default PrimaryAppNavigator;
