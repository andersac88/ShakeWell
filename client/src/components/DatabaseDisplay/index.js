import React from "react";
import {List, ListItem} from "../List";
import "./style.css";

function DatabaseDisplay({array}) {
    return (
        <React.Fragment >
        <List title="Database">
            {array.map((temp, i )=> (
                <ListItem 
                    key = {i}
                    name = {temp.name}
                    shake = {temp.shake}
                    image= {temp.image}>
                </ListItem>
            ))   
            }
        </List>
        </ React.Fragment>
    );
};

export default DatabaseDisplay;