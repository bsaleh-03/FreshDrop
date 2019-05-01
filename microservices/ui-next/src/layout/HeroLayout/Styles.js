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
        flexDirection: "column"
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
        backgroundColor: "white"
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    success: {
        backgroundColor: theme.palette.secondary.main
    },
    danger: {
        backgroundColor: theme.palette.primary.danger
    },
    image: {
        background: "no-repeat center center",
        backgroundSize: "cover",
        color: theme.palette.primary.contrastText,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        "background-blend-mode": "multiply"
    }
});

export default Styles;