import React from "react";
import { Media } from "react-bootstrap";
import faker from "faker";
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
	return (
		<Media id="innerList" className="border border-secondary m-2" as="li">
			<img
				width={75}
				height={75}
				className="m-3"
				src={props.image}
				alt="Generic placeholder"
			/>
			<Media.Body>
				<h5>{faker.random.words()}</h5>
				<p>{faker.random.word()}</p>
			</Media.Body>
		</Media>
	);
}
