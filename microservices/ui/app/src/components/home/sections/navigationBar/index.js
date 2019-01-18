import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Grid,
    BottomNavigation,
    BottomNavigationAction
} from "@material-ui/core";
import {
    Fastfood,
    Kitchen,
    Favorite,
    Book,
    Help
} from "@material-ui/icons";

const styles = theme => ({
    navigationBar: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        height: '100px'
    },
    navigationItem: {
        height: '100%'
    },
    navigationLabel: {
        fontSize: theme.typography.pxToRem(14),
        paddingTop: 4
    },
});

export class HomeNavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({
            value: value
        });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Grid item xs={12}>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.navigationBar}
                >
                    <BottomNavigationAction label="Browse Aisles" icon={<Fastfood />} classes={{root: classes.navigationItem, label: classes.navigationLabel}} />
                    <BottomNavigationAction label="Recipes" icon={<Kitchen />} classes={{root: classes.navigationItem, label: classes.navigationLabel}} />
                    <BottomNavigationAction label="Nutritional Consultation" icon={<Favorite />} classes={{root: classes.navigationItem, label: classes.navigationLabel}} />
                    <BottomNavigationAction label="About Us" icon={<Book />} classes={{root: classes.navigationItem, label: classes.navigationLabel}} />
                </BottomNavigation>
            </Grid>
        )
    }
}

export default withStyles(styles)(HomeNavigationBar);
