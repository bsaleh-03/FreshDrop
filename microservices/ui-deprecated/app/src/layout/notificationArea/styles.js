export const Styles = theme => ({
    notificationAreaRoot: {
        position: "fixed",
        top: 0,
        right: 0,
        width: "auto",
        zIndex: 1000,
        paddingTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
        paddingRight: theme.spacing.unit * 2
    }
});

export default Styles;