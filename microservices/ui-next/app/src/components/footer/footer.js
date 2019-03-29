import React from 'react';
import PropTypes from 'prop-types';
import {Grid, IconButton, Typography, withStyles} from "@material-ui/core";
import {Help, Info, Phone} from "@material-ui/icons";
import Styles from "./styles";

const Footer = props => {
    const { classes } = props;

    return (
        <Grid container justify="center" className={classes.footerRoot}>
            <Grid item xs={12} md={8} className={classes.footerWrapper}>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" style={{color: 'white'}}>&copy; 2019 XMart Delivery</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Grid container justify="flex-end">
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
                </Grid>
            </Grid>
        </Grid>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Footer);