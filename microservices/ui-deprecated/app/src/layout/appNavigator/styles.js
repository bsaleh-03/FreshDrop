export const Styles = theme => ({
    root: {
        display: "flex",
        flex: 1,
        height: "100vh",
        overflowX: "hidden",
        flexDirection: "column"
    },
    mainSection: {
        [theme.breakpoints.down('md')]: {
            marginLeft: "0 !important",
        },
        flexGrow: 1
    },
    gridContainer: {
        [theme.breakpoints.down('md')]: {
            marginLeft: "0 !important",
        },
    },
    toolbar: theme.mixins.toolbar,
});

export default Styles;
