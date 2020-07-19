import React from "react";
import "./style.css";
import { Form, Button, Row } from "react-bootstrap";

class SearchBar extends React.Component{
	state = {
		term: ''
	}

	handleInputChange = (event) => {
		this.setState({
			term: event.target.value
		})
	}

	onFormSubmit = (event) => {
		event.preventDefault()
		this.props.handleFormSubmit(this.state.term)
	}


	render() {
		return (
		<div className="my-4 mx-3">
			<Form className="form-inline">
				<Row>
					<input
						type="text"
						value={this.state.term}
						className="mx-5"
						id="searchForm"
						onChange={this.handleInputChange}
					/>
					<Button onClick={this.onFormSubmit} variant="primary" type="submit">
						Search
					</Button>
				</Row>
			</Form>
		</div>
		)
	};
}

export default SearchBar;
