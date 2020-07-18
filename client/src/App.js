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
        name: "Coke",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Sprite",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Water",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Milk",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Ice Tea",
        image: faker.random.image(),
        shake: true
      }, {
        name: "Orange Juice",
        image: faker.random.image(),
        shake: true
      }, {
        name: "Coffee",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Gatorade",
        image: faker.random.image(),
        shake: false
      }, {
        name: "Dr. Pepper",
        image: faker.random.image(),
        shake: false
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
