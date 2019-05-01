import React from 'react';
import Styles from "./Styles";
import {IconButton, InputBase, Paper, withStyles} from "@material-ui/core";
import {Search} from "@material-ui/icons";

const SearchComponent = ({ classes }) => {
    return (
        <Paper elevation={1} className={classes.searchInput}>
            <InputBase className={classes.searchInputBase} placeholder="Search..." />
            <IconButton className={classes.searchInputIcon} aria-label="Search">
                <Search />
            </IconButton>
        </Paper>
    );
};

export default withStyles(Styles)(SearchComponent);