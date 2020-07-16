import React from "react";
import "./style.css";
import faker from "faker";

function SelectDisplay(props) {
    return (
        <>
        <div className="container m-3">
        <img    
        width={300}
        height={300}
        className="m-3"
        src={props.array[0].image}
        alt="Generic placeholder"/>
        <div id="toShake">Shake Well</div>
        </div>
        </>
    )
}

export default SelectDisplay