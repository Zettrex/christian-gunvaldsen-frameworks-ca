import React from "react";
import {Form, Button} from "react-bootstrap"
import PropTypes from "prop-types";

export default function searchBar({filterF}) {
    return (
        <Form className={"searchBar row"}>
            <Form.Control className={"searchField"} type="text" name={"search"} onChange={filterF} placeholder={"search"}/>
            <Button className={"searchButton"} type="submit">Search</Button>
        </Form>
    )
}

searchBar.propTypes = {
    filterF: PropTypes.func.isRequired
};


