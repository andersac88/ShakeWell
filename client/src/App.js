import React, { Component } from "react";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap";
import Navbar from "./components/Navbar"
import DatabaseDisplay from "./components/DatabaseDisplay";
import SelectionDisplay from "./components/SelectionDisplay";
import SearchBar from "./components/SearchBar";


class App extends Component {
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
                <Col>
                <SearchBar></SearchBar>
                </Col>
              </Row>
              <Row>
                <Col>
                
                
                
                
                
                </Col>
              </Row>
            </Col>
            <Col>
              <DatabaseDisplay></DatabaseDisplay>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
