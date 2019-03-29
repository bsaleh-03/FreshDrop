import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Paper,
    Typography,
    FormControl,
    Button,
    withStyles
} from "@material-ui/core";
import { formatError } from "../../../util/stringFormat";
import { BEARER_TOKEN, LOGIN_URL } from "../../../constants";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../../../components/form/form";
import Styles from './styles';
import Logo from "../../../logo.svg";

async function authenticate(url, data) {
    let requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + BEARER_TOKEN,
            "X-Hasura-Role": "admin"
        }
    };

    let body = {
        "provider": "email",
        "data": {
            "email": (data.email).toLowerCase(),
            "password": data.password
        }
    };

    requestOptions.body = JSON.stringify(body);

    try {
        return await fetch(url, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }

}

class Login extends Form {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: []
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);

        // Bind clear errors function
        this.clearErrors = this.clearErrors.bind(this);
    }

    async onSubmit() {
        // Clear any previous errors
        this.clearErrors();

        try {
            // Try to authenticate the user
            let response = await authenticate(LOGIN_URL, this.state);

            // Get json
            let result = await response.json();

            if(response.ok) {
                // Set auth token
                localStorage.setItem("auth_token", result.auth_token);

                // Redirect
                window.location = "/home";
            } else {
                // Display an error
                this.setState(prevState => ({
                    errors: [...prevState.errors, formatError(result.message)]
                }));
            }
        } catch (e) {
            console.error(e);
        }
    }

    clearErrors() {
        this.setState({
            errors: []
        });
    }

    handleRegister() {
        // Redirect
        window.location = "/register";
    }

    handleReset() {
        // Redirect
        window.location = "/reset";
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

                                <img src={Logo} height="60" className={classes.logo}  alt="Logo" />

                                { this.state.errors.length > 0 &&
                                <div className={classes.formErrors}>
                                    {
                                        this.state.errors.map((error, index) => (
                                            <Typography variant="subtitle1" key={index} className={classes.formError}>{error}</Typography>
                                        ))
                                    }
                                </div>
                                }

                                <ValidatorForm ref="form" className={classes.form} onSubmit={this.onSubmit} onError={errors => console.log(errors)}>
                                    <FormControl margin="normal" required fullWidth>
                                        <TextValidator
                                            autoFocus
                                            id="email"
                                            name="email"
                                            label="Email Address"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            autoComplete="email"
                                            validators={['required', 'isEmail']}
                                            errorMessages={['This field is required', 'Email is not valid']}
                                        />
                                    </FormControl>

                                    <FormControl margin="normal" required fullWidth>
                                        <TextValidator
                                            id="password"
                                            label="Password"
                                            onChange={this.handleChange}
                                            autoComplete="current-password"
                                            name="password"
                                            type="password"
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                            value={this.state.password}
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign in
                                    </Button>
                                </ValidatorForm>

                                <Button className={classes.button} color="secondary" onClick={() => this.handleReset()}>Reset Password</Button>
                            </Paper>

                            <Button className={classes.button} color="secondary" onClick={() => this.handleRegister()}>Don't have an account? Sign up</Button>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Login);
