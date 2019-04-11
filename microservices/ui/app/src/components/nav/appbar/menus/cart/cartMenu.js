import React, {Component} from 'react';
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
import {connect} from "react-redux";

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

    formatTotal = (total) => {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(total);
    };

    calculateTotal = (shoppingCart) => {
        let total = 0.00;

        shoppingCart.items.forEach(cartItem => {
            let price = cartItem.variants[0].price;

            total += parseInt(price);
        });

        return this.formatTotal(total);
    };

    render() {
        const { classes, shoppingCart } = this.props;
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
                        <Typography variant="caption" align="center" style={{fontWeight: "bold", color: Theme.palette.primary.dark}}>
                            { shoppingCart.items.length }
                        </Typography>
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

                        {shoppingCart.items.map((cartItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className={classes.cartItemContainer}>
                                        <div className={classes.itemImageContainer}>
                                            <div className={classes.itemImage} style={{backgroundImage: `url(${cartItem.images[0].src})`}} />
                                        </div>

                                        <div className={classes.cartItemInfo}>
                                            <Typography variant="h6" gutterBottom>{cartItem.title}</Typography>
                                            <Typography variant="subtitle1" gutterBottom>{cartItem.description}</Typography>
                                            <div className={classes.cartItemFooter}>
                                                <Typography variant="subtitle1" style={{fontWeight: "bold", alignSelf: "center", flexGrow: 1, flexDirection: "row"}}>{cartItem.variants[0].price}</Typography>
                                                <Button variant="text" color="secondary">Remove</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider className={classes.cartItemDivider} />
                                </React.Fragment>
                            )
                        })}

                        {shoppingCart.items.length !== 0 &&
                            <React.Fragment>
                                <div className={classes.cartPricing}>
                                    <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Subtotal:</Typography>
                                    <Typography variant="subtitle1" gutterBottom>{ this.calculateTotal(shoppingCart) }</Typography>
                                </div>

                                <div className={classes.cartPricing}>
                                    <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Total:</Typography>
                                    <Typography variant="subtitle1" gutterBottom>{ this.calculateTotal(shoppingCart) }</Typography>
                                </div>

                                <div className={classes.cartActions}>
                                    <Button variant="contained" color="secondary" size="medium"><ShoppingCart className={classes.buttonIcon} /> View Cart</Button>
                                    <Button variant="contained" color="primary" size="medium"><Payment className={classes.buttonIcon} /> Checkout</Button>
                                </div>
                            </React.Fragment>
                        }

                        {shoppingCart.items.length === 0 &&
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <ShoppingCart color="action" fontSize="large" style={{marginBottom: 10}} />
                            <Typography variant="subtitle2">No Items</Typography>
                        </div>
                        }
                    </div>
                </Menu>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart
});

CartMenu.propTypes = {};

export default connect(mapStateToProps)(withStyles(Styles)(CartMenu));
