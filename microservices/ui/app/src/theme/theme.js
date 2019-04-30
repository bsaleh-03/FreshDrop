import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#515b5f',
            main: '#263238',
            dark: '#1a2327',
            contrastText: '#fff',
            danger: '#D0424C'
        },
        secondary: {
            light: '#bff38b',
            main: '#67e9a2',
            dark: '#6ed087',
            contrastText: '#fff',
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    }
});

export default Theme;
