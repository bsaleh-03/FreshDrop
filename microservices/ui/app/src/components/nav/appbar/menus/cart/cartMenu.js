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
import { connect } from "react-redux";

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

    render() {
        const { classes, cart, products } = this.props;
        const { shoppingCartAnchor } = this.state;

        let total = 0.00;

        if (products !== [] && cart !== []) {
            cart.items.forEach(productId => {
                let item = products.filter(product => product.id === productId)[0];

                let price = item.variants[0].price;

                total += parseInt(price);
            });

            console.log(cart.items);
        }

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
                            { cart.items.length }
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

                        {cart.items.map((cartItem, index) => {
                            const product = products.filter(product => product.id === cartItem)[0];

                            return (
                                <React.Fragment key={index}>
                                    <div className={classes.cartItemContainer}>
                                        <div className={classes.itemImage} style={{backgroundImage: `url(${product.images[0].src})`}} />

                                        <div className={classes.cartItemInfo}>
                                            <Typography variant="h6" gutterBottom>{product.title}</Typography>
                                            <Typography variant="subtitle1" gutterBottom>{product.description}</Typography>
                                            <div className={classes.cartItemFooter}>
                                                <Typography variant="subtitle1" style={{fontWeight: "bold", alignSelf: "center", flexGrow: 1, flexDirection: "row"}}>{product.variants[0].price}</Typography>
                                                <Button variant="text" color="secondary">Remove</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider className={classes.cartItemDivider} />
                                </React.Fragment>
                            )
                        })}

                        {cart.items.length !== 0 &&
                            <React.Fragment>
                                <div className={classes.cartPricing}>
                                    <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Subtotal:</Typography>
                                    <Typography variant="subtitle1" gutterBottom>{ this.formatTotal(total) }</Typography>
                                </div>

                                <div className={classes.cartPricing}>
                                    <Typography variant="subtitle1" gutterBottom style={{flexGrow: 1}}>Total:</Typography>
                                    <Typography variant="subtitle1" gutterBottom>{ this.formatTotal(total) }</Typography>
                                </div>

                                <div className={classes.cartActions}>
                                    <Button variant="contained" color="secondary" size="medium"><ShoppingCart className={classes.buttonIcon} /> View Cart</Button>
                                    <Button variant="contained" color="primary" size="medium"><Payment className={classes.buttonIcon} /> Checkout</Button>
                                </div>
                            </React.Fragment>
                        }

                        {cart.count === 0 &&
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

const mapStateToProps = state => {
    return {
        products: state.products.items,
        cart: {
            items: state.shoppingCart.items
        }
    }
};

CartMenu.propTypes = {};

export default connect(mapStateToProps)(withStyles(Styles)(CartMenu));
