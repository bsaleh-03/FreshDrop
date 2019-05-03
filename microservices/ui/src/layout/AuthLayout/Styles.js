export const Styles = theme => ({
    root: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    logo: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    actions: {
        marginTop: theme.spacing.unit * 2,
        "& div": {
            "&:not(:first-child)": {
                marginTop: theme.spacing.unit * 2,
            }
        }
    }
});

export default Styles;