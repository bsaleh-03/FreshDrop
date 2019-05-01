import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { withStyles } from "@material-ui/core";

const HeroLayout = ({ classes, children, variant = 'medium', color = 'default', image }) => {

    const imageBackgroundStyle = image ? {backgroundImage: `url(${image})`} : {backgroundImage: "inherit"};

    return (
        <div className={classes.root}>
            <div
                className={`
                    ${classes[variant]} 
                    ${classes[color]} 
                    ${classes.body}
                    ${image ? classes.image : ""}
                `}
                style={imageBackgroundStyle}
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
    image: PropTypes.object
};

export default withStyles(Styles)(HeroLayout);