import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    FormControl,
    Paper,
    Typography,
    Grid,
    Avatar,
    withStyles
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Check } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../../../components/form/form";
import { BEARER_TOKEN, FORGOT_PASSWORD_URL } from "../../../constants";
import { formatError } from "../../../util/stringFormat";
import Styles from './styles';
import Logo from "../../../logo.svg";

async function resetPassword(url, data) {
    let requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + BEARER_TOKEN,
            "X-Hasura-Role": "admin"
        }
    };

    requestOptions.body = JSON.stringify({
        "email": (data.email).toLowerCase()
    });

    try {
        return await fetch(url, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }

}

class Reset extends Form {
    constructor(props) {
        super(props);

        // Component state
        this.state = {
            email: "",
            emailSent: false,
            errors: []
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {
        // Clear any previous errors
        this.setState({
            errors: []
        });

        try {
            // Try to authenticate the user
            let response = await resetPassword(FORGOT_PASSWORD_URL, this.state);

            // Get json
            let result = await response.json();

            console.log(result);

            if(response.ok) {
                console.log(result);

                // Show the confirmation dialog
                this.setState({
                    emailSent: true
                });
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

    handleLogin() {
        window.location = "/";
    }

    render() {
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

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Send Reset Email
                    </Button>
                </ValidatorForm>

                <Button className={classes.button} color="secondary" onClick={() => this.handleLogin()}>Already have an account? Sign in</Button>
            </React.Fragment>
        );

        const emailSent = (
            <React.Fragment>
                <Avatar className={classes.avatar} style={{backgroundColor: green["600"]}}>
                    <Check />
                </Avatar>

                <Typography variant="h5" gutterBottom>Password Reset Email Sent</Typography>

                <Typography variant="subtitle1" align="center" gutterBottom>A password reset link was sent to your email.</Typography>
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
                                { !this.state.emailSent ? resetForm : emailSent }
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Reset.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Reset);
