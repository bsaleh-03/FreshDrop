import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { withStyles } from "@material-ui/core";

const HeroVideoLayout = ({ classes, children, variant = 'medium', mp4Source, ogvSource, webmSource, image }) => {
    return (
        <div className={classes.root}>
            <div className={`${classes[variant]} ${classes.body}`}>

                <div className={classes.filter} />

                <video className={classes.videoMedia} poster={image} autoPlay loop muted>
                    <source src={mp4Source} type='video/mp4' />
                    <source src={ogvSource} type='video/ogv' />
                    <source src={webmSource} type='video/webm' />
                </video>

                <div className={classes.content}>
                    { children }
                </div>
            </div>
        </div>
    );
};

HeroVideoLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    classes: PropTypes.object.isRequired,
    variant: PropTypes.oneOf([
        'fullheight',
        'small',
        'medium',
        'large'
    ]),
    mp4Source: PropTypes.object,
    ogvSource: PropTypes.object,
    webmSource: PropTypes.object,
    image: PropTypes.object.isRequired
};

export default withStyles(Styles)(HeroVideoLayout);