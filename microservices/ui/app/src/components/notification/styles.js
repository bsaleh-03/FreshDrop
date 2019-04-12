export const Styles = theme => ({
    notification: {
        position: "relative",
        display: "flex",
        width: "auto",
        minWidth: "300px",
        height: "auto",
        backgroundColor: "white",
        border: "2px solid #15CD72",
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        borderRadius: 4,
        color: "#15CD72",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#f1f1f1"
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