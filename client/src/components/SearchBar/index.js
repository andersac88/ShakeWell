import React from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

function SearchBar() {
    return (
        <Form >
            <Row >
                <Col >
                    <Form.Control size="large" type="text" placeholder="Large text" />
                </Col>
                <Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
                </Row>
        </Form>
    )
}

export default SearchBar;