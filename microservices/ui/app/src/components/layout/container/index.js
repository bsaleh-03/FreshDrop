import React from 'react';
import {Grid} from "@material-ui/core";

export class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <Grid container justify="center">
                <Grid item xs={12} md={8}>
                    { children }
                </Grid>
            </Grid>
        );
    }
}

export default Container;
