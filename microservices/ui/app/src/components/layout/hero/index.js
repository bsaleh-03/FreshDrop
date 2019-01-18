import React from 'react';
import {Grid} from "@material-ui/core";

const heroRoot = {
    flex: 1
};

export class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <Grid container style={heroRoot}>
                { children }
            </Grid>
        );
    }
}

export default Hero;
