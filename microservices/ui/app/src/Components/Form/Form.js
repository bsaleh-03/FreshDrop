import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitting: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}