export const Styles = theme => ({
    root: {
        display: "flex",
        flexGrow: 0,
        flexDirection: "column",
        height: "auto"
    },
    body: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        overflow: "hidden"
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
    filter: {
        zIndex: 5,
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    videoMedia: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minHeight: "100%",
        minWidth: "100%",
        width: "auto",
        height: "auto"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        zIndex: 10
    }
});

export default Styles;