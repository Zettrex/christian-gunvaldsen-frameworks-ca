import React from "react";
import {Col} from "react-bootstrap";

export default function ({genres}) {
    console.log(genres);
    if (genres) {
        return (
            <Col lg={6} sm={6}>
                <ul className={"genresList"}>
                    <h2>Genres</h2>
                    {genres.map(item => <li>{item.name}</li>)}
                </ul>
            </Col>
        )
    } else {
        return null
    }
}