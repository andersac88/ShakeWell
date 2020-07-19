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
								<SearchBar></SearchBar>
							</Row>
							<Row>
								<Col>
									<ResultDisplay
										array={this.state.array.slice(0, 5)}
									></ResultDisplay>
								</Col>
							</Row>
						</Col>
						<Col>
							<DatabaseDisplay array={this.state.array}></DatabaseDisplay>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
