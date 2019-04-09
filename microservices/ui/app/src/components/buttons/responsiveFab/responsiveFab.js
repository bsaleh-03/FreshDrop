import React from "react";
import {Fab} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {isWidthDown} from "@material-ui/core/withWidth";

export const ResponsiveFab = ({width, className, onClick}) => {
    // This is equivalent to theme.breakpoints.down("sm")
    const isSmallScreen = isWidthDown('lg', width);
    const buttonProps = {
        size: isSmallScreen ? "medium" : "large"
    };

    return (
        <Fab {...buttonProps} color="primary" className={className} onClick={onClick}>
            <AddShoppingCart fontSize={isSmallScreen ? "small" : "default"} />
        </Fab>
    );
};

export default ResponsiveFab;