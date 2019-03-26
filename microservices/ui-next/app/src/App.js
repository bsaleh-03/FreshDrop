import React, { Component } from 'react';
import {
    CssBaseline,
    Typography
} from "@material-ui/core";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                <Typography variant="h1" align="center">Hello World</Typography>
            </React.Fragment>
        );
    }
}

export default App;
