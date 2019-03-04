import React from "react";
import {Fab} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {isWidthDown} from "@material-ui/core/withWidth";

export function ResponsiveFab({ width, className }) {
    // This is equivalent to theme.breakpoints.down("sm")
    const isSmallScreen = isWidthDown('lg', width);
    const buttonProps = {
        size: isSmallScreen ? "medium" : "large"
    };
    return (
        <Fab {...buttonProps} color="primary" className={className}>
            <AddShoppingCart fontSize={isSmallScreen ? "small" : "default"} />
        </Fab>
    );
}

export default ResponsiveFab;