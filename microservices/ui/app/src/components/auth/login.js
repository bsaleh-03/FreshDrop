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
import { Send } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../form/form";
import {appName, BEARER_TOKEN} from "../../constants";

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
        return await fetch(url, requestOptions);
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
        padding: 30,
        backgroundColor: theme.palette.primary.light,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    formErrors: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing.unit,
        paddingTop: `${theme.spacing.unit}px`,
        paddingBottom: `${theme.spacing.unit}px`,
        background: theme.palette.secondary.main
    },
    formError: {
        color: 'white'
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export class Login extends Form {
    constructor(props) {
        super(props);

        // Component state
        this.state = {
            email: "",
            password: "",
            errors: []
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        // Clear any previous errors
        this.setState({
            errors: []
        });

        // Try to authenticate the user
        authenticate(AUTH_ROUTE, this.state).then((response) => {
            console.log(response);

           try {
               if(response.ok) {
                   // Get json
                   let result = response.json();

                   // Set auth token
                   localStorage.setItem("auth_token", result.auth_token);

                   // Redirect
                   window.location = "/home";
               } else {
                   // Display an error
                   this.setState(prevState => ({
                       errors: [...prevState.errors, "The email or password is incorrect."]
                   }));
               }
           } catch (e) {
               console.error(e);
           }
        });
    }

    handleRegister() {
        // Redirect
        window.location = "/register";
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
                                    <Send />
                                </Avatar>

                                <Typography variant="h5">{appName}</Typography>

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

                                <Button className={classes.button} color="secondary" onClick={() => this.handleRegister()}>Don't have an account? Sign up</Button>
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Login);
