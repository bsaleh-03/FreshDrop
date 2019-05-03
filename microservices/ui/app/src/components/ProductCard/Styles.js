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
        marginTop: "calc(56.25% - 24px)",
        [theme.breakpoints.down('md')]: {
            marginTop: "calc(56.25% - 18px)"
        },
        right: theme.spacing(2)
    }
});

export default Styles;