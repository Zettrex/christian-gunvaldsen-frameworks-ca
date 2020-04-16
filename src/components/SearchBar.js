import React from "react";
import {Form, Button} from "react-bootstrap"
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";

export default function searchBar({filterF}) {
    return (
        <Form className={"searchBar"}>
            <Row>
                <Col md={10} xs={12}>
                    <Form.Control className={"searchField"} type="text" name={"search"} onChange={filterF} placeholder={"search"}/>
                </Col>
                <Col md={2} xs={12}>
                    <Button className={"searchButton"} type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

searchBar.propTypes = {
    filterF: PropTypes.func.isRequired
};


