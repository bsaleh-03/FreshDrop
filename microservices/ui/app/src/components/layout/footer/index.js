import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
   footerRoot: {
       backgroundColor: '#444'
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
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" style={{color: 'white'}}>I am a footer</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);
