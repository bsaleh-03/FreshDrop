export const Styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center"
        }
    },
    headerNav: {
        display: "flex",
        justifyContent: "flex-end"
    }
});

export default Styles;
