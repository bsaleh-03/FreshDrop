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
import withStyles from "@material-ui/core/styles/withStyles";
import { fade } from "@material-ui/core/es/styles/colorManipulator";

const styles = theme => ({
    root: {
        flex: 1,
        height: '100vh'
    },
    appTitle: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    },
    media: {
        height: 140,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
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
                    <Grid container className={classes.content}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>Featured Products</Typography>
                            <Divider />
                            <Grid container className={classes.content} spacing={24} style={{paddingLeft: 0, paddingRight: 0}}>
                                <Grid item xs={'auto'} sm={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://via.placeholder.com/350x250"
                                                title="Product 1"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={'auto'} sm={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://via.placeholder.com/350x250"
                                                title="Product 1"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={'auto'} sm={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://via.placeholder.com/350x250"
                                                title="Product 1"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={'auto'} sm={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://via.placeholder.com/350x250"
                                                title="Product 1"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Lizard
                                                </Typography>
                                                <Typography component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>Halal Meats</Typography>
                            <Divider />
                            <Grid container className={classes.content} spacing={24}>
                                <p>Items...</p>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>Dishes</Typography>
                            <Divider />
                            <Grid container className={classes.content} spacing={24}>
                                <p>Items...</p>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>Vegetables</Typography>
                            <Divider />
                            <Grid container className={classes.content} spacing={24}>
                                <p>Items...</p>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>Fruits</Typography>
                            <Divider />
                            <Grid container className={classes.content} spacing={24}>
                                <p>Items...</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </PrimaryAppNavigator>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(Home);
