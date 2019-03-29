import React from 'react';
import {
    Button,
    CssBaseline,
    FormControl,
    Paper,
    Typography,
    Grid,
    Avatar
} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Form } from "../form/form";
import logo from "../../assets/images/logo.svg";
import {formatError} from "../../util/stringFormat";
import {BEARER_TOKEN, FORGOT_PASSWORD_URL} from "../../constants";
import green from "@material-ui/core/colors/green";
import {Check} from "@material-ui/icons";

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
    logo: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
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
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export async function resetPassword(url, data) {
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

export class Reset extends Form {
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
                <img src={logo} height="60" className={classes.logo} />

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
                                { !this.state.emailSent ? resetForm : emailSent }
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Reset);
