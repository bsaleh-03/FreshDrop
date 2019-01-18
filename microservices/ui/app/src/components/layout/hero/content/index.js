import React from "react";
import {Grid} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    heroContent: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});

export class HeroContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, children } = this.props;

        return (
            <Grid item xs={12} className={classes.heroContent}>
                { children }
            </Grid>
        );
    }
}

export default withStyles(styles)(HeroContent);
