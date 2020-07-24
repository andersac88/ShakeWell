import React from "react";
import {List, ListItem} from "../List";
import "./style.css";

function DatabaseDisplay(props) {

    return (
        <React.Fragment >
        <List title="Database">
            {props.array.map((temp, i )=> (
                <ListItem 
                    key = {i}
                    name = {temp.name}
                    shake = {temp.shake}
                    image= {temp.image}
                    onSelect = {props.onSelect}>
                </ListItem>
            ))   
            }
        </List>
        </ React.Fragment>
    );
};

export default DatabaseDisplay;