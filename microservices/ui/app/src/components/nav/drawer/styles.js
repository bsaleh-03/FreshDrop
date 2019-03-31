const drawerWidth = 240;

export const Styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    listItemSelected: {
        '& *': {
            color: theme.palette.primary.dark
        },
        borderLeft: "5px solid " + theme.palette.primary.dark
    },
    nestedDrawerItem: {
        paddingLeft: theme.spacing.unit * 4,
    },
    toolbar: theme.mixins.toolbar,
});

export default Styles;
