import React from "react";
import {List, ListItem} from "../List";

function ResultDisplay({array}) {
    console.log(array);
    return (
        <>
        <List title="Search Results">
       {array.map(temp => (
           <ListItem number={temp} image={temp.image}></ListItem>
       ))
}
        </List>
        </>
    );
};

export default ResultDisplay;