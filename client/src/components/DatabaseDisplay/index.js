import React from "react";
import {List, ListItem} from "../List";
function DatabaseDisplay({array}) {
    return (
        <>
        <List title="Database">
            {array.map(temp => (
                <ListItem number = {temp} image={temp.image}></ListItem>
            ))   
            }
        </List>
        </>
    );
};

export default DatabaseDisplay;