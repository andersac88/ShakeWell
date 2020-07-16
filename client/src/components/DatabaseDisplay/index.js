import React from "react";
import {List, ListItem} from "../List";
import "./style.css";

function DatabaseDisplay({array}) {
    return (
        <React.Fragment id="databaseDisplay">
        <List title="Database">
            {array.map(temp => (
                <ListItem 
                    number = {temp}
                    image={temp.image}>
                </ListItem>
            ))   
            }
        </List>
        </ React.Fragment>
    );
};

export default DatabaseDisplay;