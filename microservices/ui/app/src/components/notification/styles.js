export const Styles = theme => ({
    notification: {
        position: "relative",
        display: "flex",
        width: "auto",
        minWidth: "300px",
        height: "auto",
        backgroundColor: "white",
        border: "2px solid" + theme.palette.secondary.main,
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        borderRadius: 4,
        color: "#15CD72",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#fafafa"
        }
    },
    notificationContent: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start"
    },
    notificationCloseIcon: {
        position: "absolute",
        top: theme.spacing.unit,
        right: theme.spacing.unit,
        color: "#15CD72"
    }
});

export default Styles;