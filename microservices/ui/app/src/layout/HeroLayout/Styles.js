export const Styles = theme => ({
    root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        overflowX: "hidden"
    },
    body: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        zIndex: 20
    },
    fullheight: {
        minHeight: "100vh"
    },
    small: {
        padding: `${theme.spacing.unit}px`
    },
    medium: {
        padding: `${theme.spacing.unit * 2}px`
    },
    large: {
        padding: `${theme.spacing.unit * 4}px`
    },
    default: {
        backgroundColor: "inherit"
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    success: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    },
    danger: {
        backgroundColor: theme.palette.primary.danger,
        color: theme.palette.primary.contrastText,
    },
    image: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        background: "no-repeat center center",
        backgroundSize: "cover",
        zIndex: 0
    },
    filter: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 10
    }
});

export default Styles;