import React from "react";
import { Media } from "react-bootstrap";
import "./style.css"

export function List({ children, title }) {
	return (
		<div id="outerList" className="border border-secondary list-overflow-container m-3">
			<h5 id="containerTitle">{title}</h5>
			<ul id="outerListList" className="list-group">{children}</ul>
		</div>
	);
}

export function ListItem(props) {

	let shake = props.shake === true ? "Shake" : "Don't Shake";
	let image = props.image === undefined ? `download` : props.image;

	//not sure why the above ternary is necessary but app crashes without it//
	return (
		<Media key={props._id} id="innerList" className="border border-secondary m-2" as="li" onClick={() => props.onSelect(props.name)}>
			<img
				width={100}
				height={100}
				className="ml-3 my-3"
				src={require(`../../images/beverages/${image}.jpeg`)}
				alt={props.name}
			/>
			<Media.Body className="row">
				<div className="col-sm-6" id="media_body">{props.name}</div>
				<div className="col-sm-6" id="media_body">{shake}</div>
			</Media.Body>
		</Media>
	);
}
