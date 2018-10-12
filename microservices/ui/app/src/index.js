import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { AuthProvider } from 'react-check-auth';
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GRAPHQL_URL, SESSION_URL } from "./constants";
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './components/auth/login';
import Home from './components/home/home';
import Theme from './theme/theme';

const client = new ApolloClient({
    uri: "https://data.spelunking68.hasura-app.io/v1alpha1/graphql",
    cache: new InMemoryCache({
        addTypename: false
    })
});

function reqOptions() {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`
        }
    };
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <MuiThemeProvider theme={Theme}>
                <AuthProvider authUrl={SESSION_URL} reqOptions={reqOptions}>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                </AuthProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    </ApolloProvider>

    ,document.getElementById('root')
);
