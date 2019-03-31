export const Styles = theme => ({
    heroVideo: {
        position: 'relative',
        overflow: 'hidden',
        height: 'auto',
        minHeight: '325px',
        width: '100%'
    },
    heroFilter: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    heroVideoMedia: {
        position: 'absolute',
        zIndex: 0,
        bottom: 0
    },
    heroContent: {
        position: 'relative',
        zIndex: 500,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroTitle: {
        color: theme.palette.common.white
    },
    heroInputRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
});

export default Styles;