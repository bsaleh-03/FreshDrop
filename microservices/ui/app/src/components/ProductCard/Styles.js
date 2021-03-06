export const Styles = theme => ({
    media: {
        height: 0,
        paddingTop: "56.25%",
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
        top: 0,
        marginTop: "calc(56.25% - 28px)",
        [theme.breakpoints.down('lg')]: {
            marginTop: "calc(56.25% - 20px)"
        },
        right: theme.spacing(2)
    }
});

export default Styles;