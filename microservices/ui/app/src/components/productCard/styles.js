export const Styles = theme => ({
    cardRoot: {
        cursor: "pointer"
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    productInfo: {
        position: "relative",
        padding: theme.spacing.unit * 2
    },
    productTitle: {
        maxWidth: "75%"
    },
    productFab: {
        position: "absolute",
        top: "-28px",
        right: theme.spacing.unit * 2
    }
});

export default Styles;
