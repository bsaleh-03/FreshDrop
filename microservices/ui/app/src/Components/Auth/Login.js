import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid/Grid";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Form} from "../Form/Form";

// Auth API
const AUTH_ROUTE = "https://auth.spelunking68.hasura-app.io/v1/login";

export async function authenticate(url, data) {
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer 2a1ad1e479c0cdc54414ca055c502939329db8e6839ad3ed",
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

    await fetch(url, requestOptions)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(JSON.stringify(result));
        })
        .catch(function(error) {
            console.log('Request Failed:' + error);
        });
}

const styles = theme => ({
    gridContainer: {
        height: '100vh'
    },
    layout: {
        width: 'auto',
        display: 'flex', // Fix IE11 issue.
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
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

export class Login extends Form {
    constructor(props) {
        super(props);

        // Component state
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        // Try to authenticate the user
        authenticate(AUTH_ROUTE, this.state).then((response) => {
            console.log(response);
        });
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
                                    <AllInclusiveIcon />
                                </Avatar>

                                <Typography variant="headline">FreshDrop</Typography>

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
                                        variant="raised"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={this.onSubmit}
                                    >
                                        Sign in
                                    </Button>
                                </ValidatorForm>
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Login);