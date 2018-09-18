import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from './Components/Auth/Login';

const client = new ApolloClient({
    uri: "https://data.spelunking68.hasura-app.io/v1alpha1/graphql",
    cache: new InMemoryCache({
        addTypename: false
    })
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </ApolloProvider>

    ,document.getElementById('root')
);