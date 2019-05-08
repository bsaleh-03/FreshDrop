import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { AuthProvider } from 'react-check-auth';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "redux/store";
import HasuraAPI from "lib/Hasura";
import Theme from "theme/theme";

// Pages
import Home from "pages/home/home";
import Login from "pages/auth/login/login";
import Register from "pages/auth/register/register";
import Verify from "pages/auth/verify/verify";
import Account from "pages/account/account";
import Settings from "pages/settings/settings";
import ShoppingCart from "pages/shoppingcart/shoppingcart";
import Contact from "pages/contact/contact";
import Story from "pages/story/story";
import Help from "pages/help/help";
import Orders from "pages/orders/orders";
import ViewProduct from "pages/product/product";
import ViewCollection from "pages/collection/collection";

const App = props => {
    return (
        <BrowserRouter>
            <AuthProvider authUrl={HasuraAPI.Client.SESSION_INFO_URL} reqOptions={HasuraAPI.Util.buildAuthProviderHeaders}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persist}>
                        <MuiThemeProvider theme={Theme}>
                            <CssBaseline/>

                            <Switch>
                                {/* Auth Routes */}
                                <Route exact path="/" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/verify-email" component={Verify} />

                                {/* Main Routes */}
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/orders" component={Orders} />
                                <Route exact path="/cart" component={ShoppingCart} />

                                {/* Collection Routes */}
                                <Route exact path="/collection/:collectionId" component={ViewCollection} />

                                {/* Product Routes */}
                                <Route exact path="/product/:productId" component={ViewProduct} />

                                {/* Account Routes*/}
                                <Route exact path="/account" component={Account} />
                                <Route exact path="/account/settings" component={Settings} />

                                {/* Misc Routes */}
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/story" component={Story} />
                                <Route exact path="/help" component={Help} />
                            </Switch>
                        </MuiThemeProvider>
                    </PersistGate>
                </Provider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;