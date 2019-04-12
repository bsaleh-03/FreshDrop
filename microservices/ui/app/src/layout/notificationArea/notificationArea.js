import React from 'react';
import {
    withStyles
} from "@material-ui/core";
import Styles from './styles';
import { TransitionGroup } from 'react-transition-group';
import Notification from "../../components/notification/notification";

const NotificationArea = (props) => {
    const { classes } = props;

    return (
        <div className={classes.notificationAreaRoot}>
            <TransitionGroup>
                <Notification/>
                <Notification/>
                <Notification/>
            </TransitionGroup>
        </div>
    );
};

export default withStyles(Styles)(NotificationArea);