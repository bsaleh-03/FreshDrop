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
import {appName, BEARER_TOKEN} from "../../constants";
import {formatError} from "../../util/stringFormat";

// Auth API
export async function registerUser(url, data) {
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
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export class Verify extends React.Component {
    constructor(props) {
        super(props);

        // Get query params
        const params = new URLSearchParams(props.location.search);

        // Get token from url
        const token = params.get('token');

        // Activate user
        if (token) {
            this.activateUser(token);
        }
    }

    async activateUser(token) {
        console.log(token);
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

                                <Avatar className={classes.avatar} style={{backgroundColor: green["600"]}}>
                                    <Check />
                                </Avatar>

                                <Typography variant="h5" gutterBottom>Account Activated</Typography>

                                <Typography variant="subtitle1" align="center">Thank you for activating your { appName } account. You may now close this window.</Typography>

                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Verify);
