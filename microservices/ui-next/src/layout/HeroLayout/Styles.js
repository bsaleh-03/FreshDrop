export const Styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flex: "0 0 100%",
        height: "auto"
    },
    body: {
        display: "flex",
        flexGrow: 1
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
    }
});

export default Styles;