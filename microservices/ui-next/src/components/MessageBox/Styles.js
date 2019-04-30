export const Styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
    body: {
        padding: theme.spacing(1)
    },
    default: {
        backgroundColor: "white"
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    success: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    danger: {
        backgroundColor: theme.palette.error["500"],
        color: "white"
    }
});

export default Styles;