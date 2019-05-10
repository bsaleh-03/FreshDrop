import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { withStyles } from "@material-ui/core";

const HeroLayout = ({ classes, children, variant = 'medium', color = 'default', image, style }) => {

    const imageBackgroundStyle = image && {backgroundImage: `url(${image})`};

    return (
        <div className={`${classes.root} ${classes[color]}`} style={style}>
            { image && <div className={classes.image} style={imageBackgroundStyle} /> }
            { image && <div className={classes.filter} /> }

            <div
                className={`
                    ${classes[variant]} 
                    ${classes.body}
                `}
            >
                { children }
            </div>
        </div>
    );
};

HeroLayout.propTypes = {
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
    color: PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'danger'
    ]),
    image: PropTypes.object,
    style: PropTypes.object
};

export default withStyles(Styles)(HeroLayout);