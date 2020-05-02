import React from "react";
import {Media} from "react-bootstrap";
import imageSmall from "../../images/Grey100x100.jpg"
import faker from "faker";

export function List(props) {
    return (
      <div className="border border-primary list-overflow-container m-3">{props.title}
      <ul className="list-group">{props.children}</ul>
    </div>
    )
}

export function ListItem(props) {
  return   <Media className="border border-primary m-2" as="li">
  <img
    width={75}
    height={75}
    className="m-3"
    src={imageSmall}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>List-based media object</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollici
    </p>
  </Media.Body>
</Media>
}

