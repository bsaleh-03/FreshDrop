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
    logo: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2
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
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    formErrors: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing.unit,
        paddingTop: `${theme.spacing.unit}px`,
        paddingBottom: `${theme.spacing.unit}px`,
        background: theme.palette.secondary.main
    },
    formError: {
        color: 'white'
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export default Styles;
