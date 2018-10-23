import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    ExitToApp
} from "@material-ui/icons"
import { appName } from "../../../constants";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import IconButton from "@material-ui/core/IconButton/IconButton";

export class PrimaryAppNavigator extends React.Component {
    constructor(props){
        super(props);
    }

    handleLogout() {
        // Remove auth token
        localStorage.removeItem("auth_token");

        // Redirect
        window.location = "/";
    }

    render() {
        const { classes, children } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="relative" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}} noWrap>
                            { appName }
                        </Typography>

                        <IconButton color="inherit" aria-label="Menu" onClick={() => this.handleLogout()}>
                            <ExitToApp />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <div className={classes.content}>
                    { children }
                </div>
            </div>
        );
    }
}

export default PrimaryAppNavigator;
