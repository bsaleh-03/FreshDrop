import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Paper,
    Typography,
    Grid
} from "@material-ui/core";
import { Send, Check, Error } from '@material-ui/icons';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import withStyles from '@material-ui/core/styles/withStyles';
import {appName, BEARER_TOKEN, VERIFY_URL} from "../../constants";
import {formatError} from "../../util/stringFormat";

// Auth API
export async function verifyUser(url) {

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
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        padding: 30,
        backgroundColor: theme.palette.primary.light,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export class Verify extends React.Component {
    constructor(props) {
        super(props);

        // Setup state
        this.state = {
            error: ""
        };
    }

    async componentWillMount() {
        // Get query params
        const params = new URLSearchParams(this.props.location.search);

        // Get token from url
        const token = params.get('token');

        // Activate user
        if (token) {
            await this.activateUser(token);
        }
    }

    async activateUser(token) {
        try {
            // Build params for GET request
            let requestOptions = {
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + BEARER_TOKEN,
                    "X-Hasura-Role": "admin"
                }
            };

            // Build verification url with token
            let url = VERIFY_URL + "?token=" + token;

            let response = await fetch(url, requestOptions);
            let result = await response.json();

            console.log(response);
            console.log(result);

            if (!response.ok) {
                // Set an error
                this.setState({
                    error: result.message
                });
            }
        } catch (e) {
            console.log('Request Failed:' + e);
        }
    }

    handleLogin() {
        // Redirect to login
        window.location = "/";
    }

    render() {
        const { classes } = this.props;

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
                        <Typography variant="h5" gutterBottom>Account Activated</Typography>
                    ) : (
                        <Typography variant="h5" gutterBottom>Error</Typography>
                    )
                }

                {
                    !this.state.error ? (
                        <React.Fragment>
                            <Typography variant="subtitle1" align="center">Thank you for activating your { appName } account. You may now close this window or login.</Typography>

                            <Button color="secondary" onClick={() => this.handleLogin()}>Login</Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography variant="subtitle1" align="center" gutterBottom>{formatError(this.state.error)}</Typography>
                        </React.Fragment>
                    )
                }
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

                                { messageLayout }

                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Verify);
