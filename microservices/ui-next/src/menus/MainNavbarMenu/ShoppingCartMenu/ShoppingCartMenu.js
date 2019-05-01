import React, {useState} from 'react';
import {Tooltip, Badge, withStyles, IconButton} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const StyledBadge = withStyles(theme => ({
    badge: {
        top: "100%",
        right: -3,
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        }`,
    },
}))(Badge);

const ShoppingCartMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Tooltip title="Shopping Cart">
                <IconButton
                    color="inherit"
                    aria-owns={anchorEl ? 'userMenu' : null}
                    aria-haspopup="true"
                    onClick={handleMenuClick}>
                        <StyledBadge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </StyledBadge>
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
};

export default ShoppingCartMenu;