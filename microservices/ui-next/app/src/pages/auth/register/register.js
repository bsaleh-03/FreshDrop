import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Button,
    FormControl,
    Paper,
    Typography,
    Grid,
    withStyles
} from "@material-ui/core";
import { Check, Error } from '@material-ui/icons';
import { red, green } from "@material-ui/core/colors";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../../../components/form/form";
import { BEARER_TOKEN, QUERY_URL, SIGNUP_URL } from "../../../constants";
import { formatError } from "../../../util/stringFormat";
import Styles from './styles';
import Logo from "../../../logo.svg";

// Auth API
async function registerUser(url, data) {
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

async function setUserInfo(url, data) {
    let requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + BEARER_TOKEN,
            "X-Hasura-Role": "admin"
        }
    };

    let body = {
        "type": "insert",
        "args": {
            "table": "user_info",
            "objects": [
                {
                    "hasura_id": data.hasura_id,
                    "name": (data.name).toLowerCase()
                }
            ]
        }
    };

    requestOptions.body = JSON.stringify(body);

    try {
        return await fetch(url, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }
}

class Register extends Form {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            showForm: true,
            error: "",
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    async onSubmit() {
        try {
            // Try to authenticate the user
            let response = await registerUser(SIGNUP_URL, this.state);

            console.log(response);

            // Get json
            let result = await response.json();

            console.log(result);

            if (response.ok) {
                // Extract user info from response
                let userInfo = {
                    hasura_id: result.hasura_id,
                    name: this.state.name
                };

                // Attempt to set extra user info
                let queryResponse = await setUserInfo(QUERY_URL, userInfo);

                console.log(queryResponse);

                // Get json
                let queryResult = await queryResponse.json();

                console.log(queryResult);

                if (queryResponse.ok) {
                    // Show messages
                    this.setState({
                        showForm: false
                    });
                } else {
                    // Set an error
                    this.setState({
                        error: result.message
                    });
                }
            } else {
                // Set an error
                this.setState({
                    error: result.message
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleLogin() {
        // Redirect
        window.location = "/";
    }

    handleBack() {
        // Clear any errors and show the form
        this.setState({
            showForm: true,
            error: ""
        });
    }

    componentDidMount() {
        // Setup custom rule for password match
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            return value === this.state.password;
        });
    }

    render() {
        const { classes } = this.props;

        const registerForm = (
            <React.Fragment>
                <img src={Logo} height="60" className={classes.logo}  alt="Logo" />

                <ValidatorForm ref="form" className={classes.form} onSubmit={this.onSubmit} onError={errors => console.log(errors)}>
                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            autoFocus
                            id="name"
                            name="name"
                            label="Your Name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            autoComplete="name"
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <TextValidator
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
                            name="password"
                            type="password"
                            validators={['required', 'minStringLength:8']}
                            errorMessages={['This field is required', 'Password must be a minimum of 8 characters']}
                            value={this.state.password}
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
                            value={this.state.confirmPassword}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                </ValidatorForm>

                <Button className={classes.button} color="secondary" onClick={() => this.handleLogin()}>Already have an account? Sign in</Button>
            </React.Fragment>
        );

        const messageLayout = (
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
                        <Typography variant="h5" gutterBottom>Success</Typography>
                    ) : (
                        <Typography variant="h5" gutterBottom>Error</Typography>
                    )
                }

                {
                    !this.state.error ? (
                        <Typography variant="subtitle1" align="center">An account verification email has been sent to { this.state.email }</Typography>
                    ) : (
                        <React.Fragment>
                            <Typography variant="subtitle1" align="center" gutterBottom>{formatError(this.state.error)}</Typography>

                            <Button color="secondary" onClick={() => this.handleBack()}>Go back</Button>
                        </React.Fragment>
                    )
                }
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

                                { this.state.showForm ? registerForm : messageLayout }

                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Register);
