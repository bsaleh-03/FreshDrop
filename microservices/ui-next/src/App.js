import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { AuthProvider } from 'react-check-auth';
import HasuraAPI from "lib/Hasura";
import Theme from "theme/theme";

// Pages
import Home from "pages/home/home";
import Login from "pages/auth/login/login";
import Register from "pages/auth/register/register";
import Verify from "pages/auth/verify/verify";

const App = props => {
    return (
        <BrowserRouter>
            <AuthProvider authUrl={HasuraAPI.Client.SESSION_INFO_URL} reqOptions={HasuraAPI.Util.buildAuthProviderHeaders}>
                <MuiThemeProvider theme={Theme}>
                    <CssBaseline/>

                    <Switch>
                        {/* Auth Routes */}
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/verify-email" component={Verify} />

                        <Route exact path="/home" component={Home} />
                    </Switch>
                </MuiThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;