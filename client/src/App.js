import React, { Component } from "react";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap";
import Navbar from "./components/Navbar"
import DatabaseDisplay from "./components/DatabaseDisplay";
import SelectionDisplay from "./components/SelectionDisplay";
import SearchBar from "./components/SearchBar";
import ResultDisplay from "./components/ResultDisplay";


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      tempArray: [1, 2, 3, 8, 9, 0, 1, 5]
    }
  }
  
  render() {
    return (
      <>
        <Navbar/>
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <SelectionDisplay></SelectionDisplay>
              </Row>
              <Row>  
                <SearchBar></SearchBar>
              </Row>
              <Row>
                <Col>
                <ResultDisplay array={this.state.tempArray.slice(0, 4)}></ResultDisplay>
                </Col>
              </Row>
            </Col>
            <Col>
              <DatabaseDisplay array={this.state.tempArray}></DatabaseDisplay>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
