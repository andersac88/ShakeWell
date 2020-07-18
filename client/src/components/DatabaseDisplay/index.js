import React from "react";
import {List, ListItem} from "../List";
import "./style.css";

function DatabaseDisplay({array}) {
    return (
        <React.Fragment id="databaseDisplay">
        <List title="Database">
            {array.map(temp => (
                <ListItem 
                    name = {temp.name}
                    shake = {temp.shake}
                    image={temp.image}>
                </ListItem>
            ))   
            }
        </List>
        </ React.Fragment>
    );
};

export default DatabaseDisplay;