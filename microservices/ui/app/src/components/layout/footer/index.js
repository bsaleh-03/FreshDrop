import React from 'react';
import {Divider, Grid, IconButton, Typography} from "@material-ui/core";
import {
    Phone,
    Info,
    Help
} from "@material-ui/icons";
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
                        <Grid container>
                            <Grid container xs={12} sm={4} alignContent="center">
                                <Typography variant="h6" align="left" style={{color: 'white'}}>&copy; 2019 XMart Delivery</Typography>
                            </Grid>

                            <Grid container xs={12} sm={8} justify="flex-end">
                                <IconButton color="secondary">
                                    <Phone />
                                </IconButton>

                                <IconButton color="secondary">
                                    <Info />
                                </IconButton>

                                <IconButton color="secondary">
                                    <Help />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);
