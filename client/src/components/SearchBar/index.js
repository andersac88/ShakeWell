import React from "react";
import "./style.css"
import {Form, Button, Row} from "react-bootstrap";

function SearchBar() {
    return (
        <div className="my-4 mx-3">
        <Form className="form-inline" >
            <Row >
                <Form.Control type="text" placeholder="Search" className="mx-5" id="searchForm" />
                <Button variant="primary" type="submit">
                    Search
                </Button>
    
                </Row>
        </Form>
        </div>
    )
}

export default SearchBar;