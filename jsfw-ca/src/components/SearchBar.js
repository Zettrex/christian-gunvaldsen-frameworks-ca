import React from "react";
import {Form, Button} from "react-bootstrap"
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";

export default function searchBar({filterF}) {
    return (
        <Form className={"searchBar"}>
            <Row>
                <Col sm={9} md={9} lg={9}>
                    <Form.Control className={"searchField"} type="text" name={"search"} onChange={filterF} placeholder={"search"}/>
                </Col>
                <Col sm={3} md={3} lg={3}>
                    <Button className={"searchButton"} type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

searchBar.propTypes = {
    filterF: PropTypes.func.isRequired
};


