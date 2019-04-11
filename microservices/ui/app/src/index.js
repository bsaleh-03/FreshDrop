import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from 'react-check-auth';
import HasuraAPI from './hasuraAPI';
import Theme from "./theme/theme";
import Store from "./redux/store";

// Routes
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Reset from "./pages/auth/reset/reset";
import Verify from "./pages/auth/verify/verify";
import VerifyReset from "./pages/auth/verifyReset/verifyReset";

import Home from "./pages/home/home";

function reqOptions() {
    return {
        method: "GET",
        headers: HasuraAPI.Util.buildHeaders()
    };
}

let store = Store;
window.store = store;

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={Theme}>
            <AuthProvider authUrl={HasuraAPI.Client.SESSION_INFO_URL} reqOptions={reqOptions}>
                <Provider store={store}>
                    <CssBaseline />

                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/reset" component={Reset} />
                        <Route exact path="/reset-password" component={VerifyReset} />
                        <Route exact path="/verify-email" component={Verify} />

                        <Route exact path="/home" component={Home} />
                    </Switch>
                </Provider>
            </AuthProvider>
        </MuiThemeProvider>
    </BrowserRouter>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
