export const Styles = theme => ({
    cartCounter: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        right: "-11px",
        bottom: "5%",
        marginRight: theme.spacing.unit,
        fontSize: "0.5rem",
        color: "white",
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.main,
        '& *': {
            alignSelf: "center",
            lineHeight: "normal"
        }
    },
    shoppingCartMenu: {
        maxWidth: 500
    },
    shoppingCartMenuContent: {
        outline: "none",
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    cartItemContainer: {
        display: "flex",
        flexDirection: "row"
    },
    cartItemInfo: {
        display: "flex",
        flexDirection: "column"
    },
    cartItemDivider: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    cartActions: {
        display: "flex",
        marginTop: 16,
        '& > button': {
            flexGrow: 1
        },
        '& :not(:last-child)': {
            marginRight: theme.spacing.unit * 2
        }
    },
    cartItemFooter: {
        display: 'flex'
    },
    cartPricing: {
        display: "flex",
    },
    itemImageContainer: {
        width: 64,
        height: 64,
        marginRight: theme.spacing.unit * 2,
    },
    itemImage: {
        width: 64,
        height: 64,
        background: 'no-repeat center',
        backgroundSize: 'contain',
        backgroundColor: '#f7f7f7'
    },
    buttonIcon: {
        marginRight: theme.spacing.unit
    }
});

export default Styles;
