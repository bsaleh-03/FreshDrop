export const Styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    productInfo: {
        position: "relative",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: theme.spacing(2)
    },
    productTitle: {
        maxWidth: "75%"
    },
    productFab: {
        position: "absolute",
        top: "-28px",
        right: theme.spacing(2)
    }
});

export default Styles;