import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";

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
		<div className="my-4 mx-3" style={{width: "100%"}}>
			<Form className="form-inline">
				
					<input
						type="text"
						value={this.state.term}
						className="mx-5"
						id="sea	rchForm"
						onChange={this.handleInputChange}
						style={{width: "65%"}}
					/>
					<Button onClick={this.onFormSubmit} variant="secondary" type="submit">
						Search
					</Button>
				
			</Form>
		</div>
		)
	};
}

export default SearchBar;
