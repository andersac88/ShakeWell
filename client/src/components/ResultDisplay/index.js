import React from "react";
import {List, ListItem} from "../List";

function ResultDisplay({array}) {
    return (
        <>
        <List title="Search Results">
       {array.map(temp => (
           <ListItem image={temp.image}></ListItem>
       ))}
        </List>
        </>
    );
};

export default ResultDisplay;