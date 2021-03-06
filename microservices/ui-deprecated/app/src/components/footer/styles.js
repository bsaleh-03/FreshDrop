export const Styles = theme => ({
    footerRoot: {
        backgroundColor: '#1a2327'
    },
    footerWrapper: {
        padding: theme.spacing.unit * 2
    },
    centeredMobile: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
            textAlign: "center"
        }
    }
});

export default Styles;
