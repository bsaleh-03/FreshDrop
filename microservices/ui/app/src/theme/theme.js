import { createMuiTheme } from '@material-ui/core/styles';
import {
    indigo,
    pink,
    red
} from '@material-ui/core/colors';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#718792',
            main: '#455a64',
            dark: '#1c313a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
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
