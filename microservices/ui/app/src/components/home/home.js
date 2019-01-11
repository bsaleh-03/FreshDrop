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
import Hidden from "@material-ui/core/Hidden";

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
    card: {
        display: 'flex'
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    media: {
        height: 140,
    },
    toolbar: theme.mixins.toolbar,
    heroRoot: {
        padding: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 8
    },
    heroHeader: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
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

                        <Grid container xs={12} className={classes.heroRoot} alignItems="center" justify="center">
                            <Grid item xs={12} className={classes.heroHeader}>
                                <Typography variant="h4" align="center" marked="center" gutterBottom>Featured Items</Typography>
                            </Grid>

                            <Grid container xs={12} direction="row" alignItems="center" justify="center" spacing={40}>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    Title
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    December 25, 2018
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    This is a featured item description. More details should be provided here.
                                                </Typography>
                                                <Typography variant="subtitle1" color="primary">
                                                    Continue reading...
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    Title
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    December 25, 2018
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    This is a featured item description. More details should be provided here.
                                                </Typography>
                                                <Typography variant="subtitle1" color="primary">
                                                    Continue reading...
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container xs={12} className={classes.heroRoot} alignItems="center" justify="center" style={{backgroundColor: 'white'}}>
                            <Grid item xs={12} className={classes.heroHeader}>
                                <Typography variant="h4" align="center" marked="center" gutterBottom>Daily Specials</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
