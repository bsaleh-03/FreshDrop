import React from 'react';
import {
    Typography,
    withStyles
} from "@material-ui/core";
import {
    Close
} from "@material-ui/icons";
import Styles from "./styles";

const Notification = (props) => {
    const { classes } = props;

    return (
        <div className={classes.notification}>
            <div className={classes.notificationCloseIcon}>
                <Close />
            </div>
            <div className={classes.notificationContent}>
                <Typography variant="subtitle1" style={{color: "#15CD72"}}>This is a notification</Typography>
            </div>
        </div>
    );
};

export default withStyles(Styles)(Notification);