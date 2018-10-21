import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    FormControl,
    Paper,
    Typography,
    Grid
} from "@material-ui/core";
import { AllInclusive } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../form/form";
import {BEARER_TOKEN} from "../../constants";

// Auth API
const AUTH_ROUTE = "https://auth.spelunking68.hasura-app.io/v1/login";

export async function authenticate(url, data) {
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
            "email": data.email,
            "password": data.password
        }
    };

    requestOptions.body = JSON.stringify(body);

    try {
        let response = await fetch(url, requestOptions);

        return response.json();
    } catch (e) {
        console.log('Request Failed:' + e);
    }

}

const styles = theme => ({
    gridContainer: {
        height: '100vh'
    },
    layout: {
        width: 'auto',
        display: 'flex',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        width: 60,
        height: 60,
        backgroundColor: theme.palette.primary.light,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export class Register extends Form {
    constructor(props) {
        super(props);

        // Component state
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        // Try to authenticate the user
        authenticate(AUTH_ROUTE, this.state).then((response) => {
            console.log(response);

            console.log(Object.keys(response));

            // Set auth token
            localStorage.setItem("auth_token", response.auth_token);

            // Redirect
            window.location = "/home";
        });
    }

    handleLogin() {
        // Redirect
        window.location = "/";
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />

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

                                <Avatar className={classes.avatar}>
                                    <AllInclusive />
                                </Avatar>

                                <Typography variant="headline">FreshDrop</Typography>

                                <ValidatorForm ref="form" className={classes.form} onSubmit={this.onSubmit} onError={errors => console.log(errors)}>
                                    <FormControl margin="normal" required fullWidth>
                                        <TextValidator
                                            autoFocus
                                            id="name"
                                            name="name"
                                            label="Your Name"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                        />
                                    </FormControl>

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
                                            name="password"
                                            type="password"
                                            validators={['required']}
                                            errorMessages={['This field is required']}
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
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                            value={this.state.confirmPassword}
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="raised"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Register
                                    </Button>
                                </ValidatorForm>

                                <Button className={classes.button} color="secondary" onClick={() => this.handleLogin()}>Already have an account? Sign in</Button>
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Register);
