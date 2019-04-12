import React from 'react';
import {
    withStyles
} from "@material-ui/core";
import Styles from './styles';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Notification from "../../components/notification/notification";

import './transitions.css';

class NotificationArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [
                'Notification 1',
                'Notification 2',
                'Notification 3',
            ]
        };
    }

    removeNotification = (index) => {
        this.setState(state => ({
            notifications: state.notifications.filter((_, i) => i !== index)
        }))
    };

    render() {
        const { classes } = this.props;
        const { notifications } = this.state;

        return (
            <div className={classes.notificationAreaRoot}>
                <TransitionGroup>
                    {notifications.map((notification, index) => (
                        <CSSTransition
                            key={index}
                            timeout={500}
                            classNames="notification"
                        >
                            <Notification message={notification} onClick={() => this.removeNotification(index)} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

export default withStyles(Styles)(NotificationArea);