import React, { Component } from "react";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap";
import Navbar from "./components/Navbar"
import DatabaseDisplay from "./components/DatabaseDisplay";
import SelectionDisplay from "./components/SelectionDisplay";
import SearchBar from "./components/SearchBar";
import ResultDisplay from "./components/ResultDisplay";
import faker from "faker";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      temp: 
      [{
        number: 1,
        image: faker.random.image()
      }, {
        number: 2,
        image: faker.random.image()
      }, {
        number: 3,
        image: faker.random.image()
      }, {
        number: 4,
        image: faker.random.image()
      }, {
        number: 5,
        image: faker.random.image()
      }, {
        number: 5,
        image: faker.random.image()
      }, {
        number: 5,
        image: faker.random.image()
      }, {
        number: 5,
        image: faker.random.image()
      }, {
        number: 5,
        image: faker.random.image()
      }]
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
                <Col>
                <SelectionDisplay array={this.state.temp.slice(0, 1)}></SelectionDisplay>
                </Col>
              </Row>
              <Row>  
                <SearchBar></SearchBar>
              </Row>
              <Row>
                <Col>
                <ResultDisplay array={this.state.temp.slice(0, 5)}></ResultDisplay>
                </Col>
              </Row>
            </Col>
            <Col>
              <DatabaseDisplay array={this.state.temp}></DatabaseDisplay>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
