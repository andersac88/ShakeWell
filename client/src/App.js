import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/Navbar";
import DatabaseDisplay from "./components/DatabaseDisplay";
import SelectionDisplay from "./components/SelectionDisplay";
import SearchBar from "./components/SearchBar";
import ResultDisplay from "./components/ResultDisplay";
import axios from "axios";

class App extends Component {
	state = {
		array: [{}],
		responseArray: [{}],
	};

	componentDidMount() {
		this.loadDatabase();
	}

	loadDatabase = () => {
		axios
			.get("/api/beverages/")
			.then((res) => {
				this.setState({ array: res.data });
			})
			.catch((error) => console.log("error"));
	};

	handleFormSubmit = async (term) => {
		const response = await axios.get(`/api/beverages/${term}`);
		this.setState({
			responseArray: response,
		});
	};

	onSelect = async (term) => {
		console.log("Hi")
		const response = await axios.get(`/api/beverages/${term}`);
		this.setState({
			responseArray: response,
		});
	};

	render() {
		return (
			<>
				<Navbar />
				<Container fluid>
					<Row>
						<Col>
							<Row>
								<Col>
									<SelectionDisplay
										array={this.state.array.slice(0, 1)}
									></SelectionDisplay>
								</Col>
							</Row>
							<Row>
								<SearchBar handleFormSubmit={this.handleFormSubmit}></SearchBar>
							</Row>
							<Row>
								<Col>
									<ResultDisplay
										array={this.state.responseArray}
										onSelect={this.onSelect}
									></ResultDisplay>
								</Col>
							</Row>
						</Col>
						<Col>
							<DatabaseDisplay onSelect={this.onSelect} array={this.state.array}></DatabaseDisplay>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
