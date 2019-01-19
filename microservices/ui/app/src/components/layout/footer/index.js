import React from 'react';
import {Divider, Grid, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "../container";

const styles = theme => ({
    footerRoot: {
        backgroundColor: '#1a2327'
    },
    footerWrapper: {
        padding: theme.spacing.unit * 4
    }
});

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.footerRoot}>
                <Grid item xs={12} className={classes.footerWrapper}>
                    <Container>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" align="left" style={{color: 'white'}}>XMart Delivery</Typography>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);
