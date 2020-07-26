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
		array: [],
		selection: [],
		responseArray: [],
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
			selection: response.data[0],
		});
		console.log(this.state.responseArray)
	};

	onSelect = async (term) => {
		const response = await axios.get(`/api/beverages/${term}`);
		this.setState({
			selection: response.data[0],
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
										selection={this.state.selection}
									></SelectionDisplay>
								</Col>
							</Row>
							<Row>
								<SearchBar handleFormSubmit={this.handleFormSubmit}></SearchBar>
							</Row>
							<Row>
								<Col>
									<ResultDisplay
										array={this.state.array}
										onSelect={this.onSelect}
									></ResultDisplay>
								</Col>
							</Row>
						</Col>
						<Col>
							<DatabaseDisplay
								onSelect={this.onSelect}
								array={this.state.array}
							></DatabaseDisplay>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
