import React from "react";
import {Media} from "react-bootstrap";
import faker from "faker";

export function List({children, title}) {
    return (
      <div className="border border-primary list-overflow-container m-3">{title}
      <ul className="list-group">{children}</ul>
    </div>
    )
}

export function ListItem(props) {
  return   <Media className="border border-primary m-2" as="li">
  <img
    width={75}
    height={75}
    className="m-3"
    src={props.image}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{faker.random.words()}</h5>
    <p>
      {faker.random.word()}
    </p>
  </Media.Body>
</Media>
}

