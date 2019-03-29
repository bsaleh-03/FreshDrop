export const Styles = theme => ({
    root: {
        flex: 1,
        height: '100vh',
        overflowX: "hidden"
    },
    gridContainer: {
        [theme.breakpoints.down('md')]: {
            marginLeft: "0 !important",
        },
    },
    toolbar: theme.mixins.toolbar,
});

export default Styles;
