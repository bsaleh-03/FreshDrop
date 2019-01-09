import React from 'react';
import {
    Button,
    Paper,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    CardMedia,
    Grid,
    Typography,
    Divider
} from "@material-ui/core";
import { PrimaryAppNavigator } from "../layout/appNavigator";
import { Search, Fastfood, Kitchen, Favorite, Book, Help } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import shakshukaMP4 from "../../assets/video/shakshuka/shakshuka.mp4";
import shakshukaOGV from "../../assets/video/shakshuka/shakshuka.ogv";
import shakshukaWEBM from "../../assets/video/shakshuka/shakshuka.webm";
import shakshuka from "../../assets/video/shakshuka/shakshuka.jpg";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    appTitle: {
        flexGrow: 1
    },
    content: {
        flexGrow: 1
    },
    media: {
        height: 140,
    },
    toolbar: theme.mixins.toolbar,
    heroVideo: {
        position: 'relative',
        overflow: 'hidden',
        bottom: '0%',
        left: '0%',
        height: 'auto',
        minHeight: '400px',
        width: '100%'
    },
    heroFilter: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    heroVideoMedia: {
        position: 'absolute',
        zIndex: 0,
        bottom: 0
    },
    heroContent: {
        position: 'relative',
        zIndex: 500,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroTitle: {
        color: theme.palette.common.white
    },
    heroInputRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    navigationBar: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        height: '100px'
    },
    navigationItem: {
        height: '100%'
    },
    navigationSelected: {
        padding: 0
    }
});

export class Home extends React.Component {
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
            <React.Fragment>
                <PrimaryAppNavigator classes={classes}>
                    <Grid container className={classes.content}>
                        <Grid item xs={12} className={classes.heroVideo}>
                            <div className={classes.heroFilter} />

                            <video className={classes.heroVideoMedia} autoPlay loop muted>
                                <source src={shakshukaMP4} type='video/mp4' />
                                <source src={shakshukaOGV} type='video/ogv' />
                                <source src={shakshukaWEBM} type='video/webm' />
                            </video>

                            <div className={classes.heroContent}>
                                <Typography variant="h2" align="center" className={classes.heroTitle} gutterBottom>Shop Now</Typography>

                                <Paper className={classes.heroInputRoot} elevation={1}>
                                    <InputBase className={classes.input} placeholder="Search..." />
                                    <IconButton className={classes.iconButton} aria-label="Search">
                                        <Search />
                                    </IconButton>
                                </Paper>
                            </div>
                        </Grid>

                        <BottomNavigation
                            value={value}
                            onChange={this.handleChange}
                            showLabels
                            className={classes.navigationBar}
                        >
                            <BottomNavigationAction label="Browse Aisles" icon={<Fastfood />} className={{root: classes.navigationItem, selected: classes.navigationSelected}} />
                            <BottomNavigationAction label="Recipes" icon={<Kitchen />} className={{root: classes.navigationItem, selected: classes.navigationSelected}} />
                            <BottomNavigationAction label="Nutritional Consultation" icon={<Favorite />} className={{root: classes.navigationItem, selected: classes.navigationSelected}} />
                            <BottomNavigationAction label="About Us" icon={<Book />} className={{root: classes.navigationItem, selected: classes.navigationSelected}} />
                            <BottomNavigationAction label="Help" icon={<Help />} className={{root: classes.navigationItem, selected: classes.navigationSelected}} />
                        </BottomNavigation>
                    </Grid>
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
