import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Paper,
    Typography,
    Grid,
    FormControl,
    Avatar,
    withStyles
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import { Form } from "../../../components/form/form";
import { formatError } from "../../../util/stringFormat";
import { BEARER_TOKEN, RESET_PASSWORD_URL } from "../../../constants";
import Styles from './styles';
import Logo from "../../../logo.svg";

class VerifyReset extends Form {
    constructor(props) {
        super(props);

        // Setup state
        this.state = {
            token: null,
            password: "",
            confirmPassword: "",
            passwordReset: false,
            errors: []
        };

        this.resetPassword = this.resetPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        // Setup custom rule for password match
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            return value === this.state.password;
        });

        // Get query params
        const params = new URLSearchParams(this.props.location.search);

        // Get token from url
        const token = params.get('token');

        // Activate user
        if (token) {
            this.setState({
                token: token
            })
        }
    }

    async resetPassword(token, password) {
        try {
            // Build params for GET request
            let requestOptions = {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + BEARER_TOKEN,
                    "X-Hasura-Role": "admin"
                }
            };

            requestOptions.body = JSON.stringify({
                token: token,
                password: password
            });

            let response = await fetch(RESET_PASSWORD_URL, requestOptions);
            let result = await response.json();

            console.log(response);
            console.log(result);

            if (!response.ok) {
                // Display an error
                this.setState(prevState => ({
                    errors: [...prevState.errors, formatError(result.message)]
                }));
            } else {
                // Show confirmation
                this.setState({
                    passwordReset: true
                })
            }
        } catch (e) {
            console.log('Request Failed:' + e);
        }
    }

    async onSubmit() {
        // Clear any previous errors
        this.setState({
            formErrors: []
        });

        try {
            await this.resetPassword(this.state.token, this.state.password);
        } catch (e) {
            console.log(e);
        }
    }

    handleLogin() {
        // Redirect to login
        window.location = "/";
    }

    render() {
        const { password, confirmPassword } = this.state;
        const { classes } = this.props;

        const resetForm = (
            <React.Fragment>
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
                            id="password"
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            validators={['required', 'minStringLength:8']}
                            errorMessages={['This field is required', 'Password must be a minimum of 8 characters']}
                            value={password}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            id="confirmPassword"
                            label="Confirm Password"
                            onChange={this.handleChange}
                            name="confirmPassword"
                            type="password"
                            validators={['required', 'isPasswordMatch']}
                            errorMessages={['This field is required', 'The passwords must match']}
                            value={confirmPassword}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Reset Password
                    </Button>
                </ValidatorForm>
            </React.Fragment>
        );

        const passwordResetDialog = (
            <React.Fragment>
                <Avatar className={classes.avatar} style={{backgroundColor: green["600"]}}>
                    <Check />
                </Avatar>

                <Typography variant="h5" gutterBottom>Password Reset</Typography>

                <Typography variant="subtitle1" align="center" gutterBottom>Your password was successfully reset. Please use the link below to login.</Typography>

                <Button color="secondary" onClick={() => this.handleLogin()}>Login</Button>
            </React.Fragment>
        );

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
                                { !this.state.passwordReset ? resetForm : passwordResetDialog }
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

VerifyReset.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(VerifyReset);
