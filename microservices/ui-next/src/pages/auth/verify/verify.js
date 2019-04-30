import React, {useState, useEffect} from 'react';
import HeroLayout from "layout/HeroLayout/HeroLayout";
import CenteredLayout from "layout/CenteredLayout/CenteredLayout";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import HasuraAPI from "lib/Hasura";
import Box from "@material-ui/core/Box";
import {Avatar, Button, Grid, Typography} from "@material-ui/core";
import Green from "@material-ui/core/colors/green";
import Red from "@material-ui/core/colors/red";
import {Check, Close} from "@material-ui/icons";

const Verify = (props) => {
    const [message, setMessage] = useState(null);

    useEffect(async () => {
        // Get query params
        const params = new URLSearchParams(props.location.search);

        // Get token from url
        const token = params.get('token');

        // Activate user
        let response = await HasuraAPI.Auth.activateUserByEmail(token);

        if (response.message) {
            // Set the message
            setMessage(response.message);
        }
    }, []);

    return (
        <HeroLayout variant="fullheight" color="primary">
            <CenteredLayout>
                <AuthLayout>
                    <Grid container justify="center">
                        <Box textAlign="center" p={2}>
                            { message === "success" ? (
                                <React.Fragment>
                                    <Avatar style={{margin: "1rem auto", backgroundColor: Green["600"]}}>
                                        <Check />
                                    </Avatar>

                                    <Typography variant="h5" gutterBottom>Success</Typography>

                                    <Typography variant="subtitle1" align="center" gutterBottom>Thank you for activating your XMart Delivery account. You may now close this window or login.</Typography>

                                    <Button href="/" color="secondary">Login</Button>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Avatar style={{margin: "1rem auto", backgroundColor: Red["600"]}}>
                                        <Close />
                                    </Avatar>

                                    <Typography variant="h5" gutterBottom>Error</Typography>

                                    <Typography variant="subtitle1" align="center">{ message }</Typography>
                                </React.Fragment>
                            )}
                        </Box>
                    </Grid>
                </AuthLayout>
            </CenteredLayout>
        </HeroLayout>
    );
};

export default Verify;