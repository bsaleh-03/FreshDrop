import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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

    var body = {
        "provider": "username",
        "data": {
            "username": "johnsmith",
            "password": "js@hasura"
        }
    };

    requestOptions.body = JSON.stringify(body);

    /* await fetch(url, requestOptions)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(JSON.stringify(result));
        })
        .catch(function(error) {
            console.log('Request Failed:' + error);
        }); */
}

const styles = theme => ({
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
        marginTop: theme.spacing.unit * 8,
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

export class Login extends React.Component {
    constructor(props){
        super(props);

        // Component state
        this.state = {
            email: "",
            password: ""
        };

        // Set change listener
        this.handleChange = this.handleChange.bind(this);

        // Set submit listener
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit() {

    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>

                        <Avatar className={classes.avatar}>
                            <AllInclusiveIcon />
                        </Avatar>

                        <Typography variant="headline">FreshDrop</Typography>

                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    autoComplete="email"
                                    autoFocus />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Login);