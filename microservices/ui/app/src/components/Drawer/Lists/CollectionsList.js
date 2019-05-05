import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, ListSubheader} from "@material-ui/core";
import {Image} from "@material-ui/icons";
import {connect} from "react-redux";

const CollectionsList = ({ collections }) => {
    return (
        <List
            component="nav"
            subheader={<ListSubheader component="div">Collections</ListSubheader>}
        >
            { collections.map((collection, idx) => (
                <ListItem button key={idx} component="button" href={`/collection/view/${collection.id}`}>
                    <ListItemAvatar>
                        <Avatar>
                            <Image />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={collection.title} />
                </ListItem>
            ))}
        </List>
    );
};

const mapStateToProps = state => ({
   collections: state.collections.items
});

export default connect(mapStateToProps)(CollectionsList);