import { createMuiTheme } from '@material-ui/core/styles';
import {
    indigo,
    pink,
    red
} from '@material-ui/core/colors';

const Theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    }
});

export default Theme;
