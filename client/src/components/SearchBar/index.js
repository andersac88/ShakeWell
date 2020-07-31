import React, { useState } from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ handleFormSubmit }) => {
	const [term, setTerm] = useState("");

	const formSubmit = (event) => {
		event.preventDefault();
		handleFormSubmit(term);
	};

	return (
		<div className="my-4 mx-3" style={{ width: "100%" }}>
			<Form className="form-inline">
				<input
					type="text"
					value={term}
					className="mx-5"
					id="sea	rchForm"
					onChange={(event) => setTerm(event.target.value)}
					style={{ width: "65%" }}
				/>
				<Button onClick={formSubmit} variant="secondary" type="submit">
					Search
				</Button>
			</Form>
		</div>
	);
};

export default SearchBar;
