import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Button,
    Paper,
    Typography,
    Grid,
    withStyles
} from "@material-ui/core";
import { Check, Error } from '@material-ui/icons';
import { red, green } from "@material-ui/core/colors";
import { appName } from "../../../constants";
import HasuraAPI from "../../../hasuraAPI";
import { formatError } from "../../../util/stringFormat";
import Styles from './styles';

class Verify extends Component {
    constructor(props) {
        super(props);

        // Setup state
        this.state = {
            error: ""
        };
    }

    async componentWillMount() {
        // Get query params
        const params = new URLSearchParams(this.props.location.search);

        // Get token from url
        const token = params.get('token');

        // Activate user
        if (token) {
            await this.activateUser(token);
        }
    }

    async activateUser(token) {
        try {
            // Build params for GET request
            let requestOptions = {
                "method": "GET",
                "headers": HasuraAPI.Util.buildHeaders()
            };

            // Build verification url with token
            let url = new URL(HasuraAPI.Client.VERIFY_EMAIL_URL);
            url.search = new URLSearchParams({
                token: token
            });

            let response = await fetch(url, requestOptions);
            let result = await response.json();

            console.log(response);
            console.log(result);

            if (!response.ok) {
                // Set an error
                this.setState({
                    error: result.message
                });
            }
        } catch (e) {
            console.log('Request Failed:' + e);
        }
    }

    handleLogin() {
        // Redirect to login
        window.location = "/";
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.gridContainer}
                >
                    <Grid item xs={12}>
                        <main className={classes.layout}>
                            <Paper className={classes.paper}>

                                <React.Fragment>
                                    {
                                        !this.state.error ? (
                                            <Avatar className={classes.avatar} style={{backgroundColor: green["600"]}}>
                                                <Check />
                                            </Avatar>
                                        ) : (
                                            <Avatar className={classes.avatar} style={{backgroundColor: red["600"]}}>
                                                <Error />
                                            </Avatar>
                                        )
                                    }

                                    {
                                        !this.state.error ? (
                                            <Typography variant="h5" gutterBottom>Account Activated</Typography>
                                        ) : (
                                            <Typography variant="h5" gutterBottom>Error</Typography>
                                        )
                                    }

                                    {
                                        !this.state.error ? (
                                            <React.Fragment>
                                                <Typography variant="subtitle1" align="center" gutterBottom>Thank you for activating your { appName } account. You may now close this window or login.</Typography>

                                                <Button color="secondary" onClick={() => this.handleLogin()}>Login</Button>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <Typography variant="subtitle1" align="center" gutterBottom>{formatError(this.state.error)}</Typography>
                                            </React.Fragment>
                                        )
                                    }
                                </React.Fragment>

                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Verify.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Verify);
