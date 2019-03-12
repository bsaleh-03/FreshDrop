import React from 'react';
import {
    Button,
    CssBaseline,
    Paper,
    Typography,
    Grid, FormControl, Avatar
} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';
import {BEARER_TOKEN, RESET_PASSWORD_URL} from "../../constants";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import logo from "../../assets/images/logo.svg";
import {Form} from "../form/form";
import {formatError} from "../../util/stringFormat";
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
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export class VerifyReset extends Form {
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
                                { !this.state.passwordReset ? resetForm : passwordResetDialog }
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(VerifyReset);
