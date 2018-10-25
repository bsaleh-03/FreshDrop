import React from 'react';
import { Paper } from "@material-ui/core";
import { PrimaryAppNavigator } from "../layout/appNavigator";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    toolbar: theme.mixins.toolbar
});

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <PrimaryAppNavigator classes={classes}>
                    <Paper>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                    </Paper>
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
