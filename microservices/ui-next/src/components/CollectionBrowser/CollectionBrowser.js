import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Styles";
import { withStyles } from "@material-ui/core";

const CollectionBrowser = props => {
    return (
        <div>

        </div>
    );
};

CollectionBrowser.propTypes = {
    classes: PropTypes.object.isRequired,
    collection: PropTypes.string.isRequired
};

export default withStyles(Styles)(CollectionBrowser);