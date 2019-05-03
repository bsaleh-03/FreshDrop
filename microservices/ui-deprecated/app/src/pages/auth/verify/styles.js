export const Styles = theme => ({
    gridContainer: {
        height: '100vh'
    },
    layout: {
        width: 'auto',
        display: 'flex',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        padding: 30,
        backgroundColor: theme.palette.primary.light,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export default Styles;
