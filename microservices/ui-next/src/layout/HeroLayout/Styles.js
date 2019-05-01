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
    },
    fullheight: {
        minHeight: "100vh"
    },
    small: {
        padding: `${theme.spacing.unit}px 0`
    },
    medium: {
        padding: `${theme.spacing.unit * 2}px 0`
    },
    large: {
        padding: `${theme.spacing.unit * 4}px 0`
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