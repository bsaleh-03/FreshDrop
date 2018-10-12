import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import PrimarySearchAppBar from "../menu/appBar";

export class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <PrimarySearchAppBar />
            </React.Fragment>
        );
    }
}

export default Home;
