import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Divider,
    IconButton,
    Menu,
    Typography,
    withStyles
} from "@material-ui/core";
import {Payment, ShoppingCart} from "@material-ui/icons";
import Theme from "../../../../../theme/theme";
import Styles from "./styles";
import CartItems from "./cartItems";

class CartMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCartAnchor: null,
        };
    }

    handleShoppingCartClick = (event) => {
        this.setState({ shoppingCartAnchor: event.currentTarget });
    };

    handleShoppingCartClose = () => {
        this.setState({ shoppingCartAnchor: null });
    };

    render() {
        const { classes } = this.props;
        const { shoppingCartAnchor } = this.state;

        return (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-owns={shoppingCartAnchor ? 'shoppingCartMenu' : null}
                    aria-haspopup="true"
                    aria-label="Menu"
                    onClick={this.handleShoppingCartClick}>
                    <ShoppingCart />

                    <div className={classes.cartCounter}>
                        <Typography variant="caption" align="center" style={{fontWeight: "bold", color: Theme.palette.primary.dark}}>2</Typography>
                    </div>
                </IconButton>

                <Menu
                    id="shoppingCartMenu"
                    classes={{paper: classes.shoppingCartMenu}}
                    anchorEl={shoppingCartAnchor}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    open={Boolean(shoppingCartAnchor)}
                    onClose={this.handleShoppingCartClose}
                >
                    <div className={classes.shoppingCartMenuContent}>
                        <Typography variant="h5" align="center" gutterBottom>Shopping Cart</Typography>

                        <Divider className={classes.cartItemDivider} />

                        {CartItems.map((cartItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className={classes.cartItemContainer}>
                                        <div className={classes.itemImage} style={{backgroundImage: `url(${cartItem.image})`}} />

                                        <div className={classes.cartItemInfo}>
                                            <Typography variant="h6" gutterBottom>{cartItem.title}</Typography>
                                            <Typography variant="subtitle1" gutterBottom>{cartItem.description}</Typography>
                                            <div className={classes.cartItemFooter}>
                                                <Typography variant="subtitle1" style={{fontWeight: "bold", alignSelf: "center", flexGrow: 1}}>{cartItem.price}</Typography>
                                                <Button variant="text" color="secondary">Remove</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider className={classes.cartItemDivider} />
                                </React.Fragment>
                            )
                        })}

                        <div className={classes.cartPricing}>
                            <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Subtotal:</Typography>
                            <Typography variant="subtitle1" gutterBottom>69.99</Typography>
                        </div>

                        <div className={classes.cartPricing}>
                            <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Total:</Typography>
                            <Typography variant="subtitle1" gutterBottom>70.00</Typography>
                        </div>

                        <div className={classes.cartActions}>
                            <Button variant="contained" color="secondary" size="medium"><ShoppingCart className={classes.buttonIcon} /> View Cart</Button>
                            <Button variant="contained" color="primary" size="medium"><Payment className={classes.buttonIcon} /> Checkout</Button>
                        </div>
                    </div>
                </Menu>
            </React.Fragment>
        );
    }
}

CartMenu.propTypes = {};

export default withStyles(Styles)(CartMenu);