import React from "react";
import {Col} from "react-bootstrap";

export default function ({platforms}) {
    if (platforms) {
        return (
            <Col lg={6} sm={6}>
                <ul className={"platformList"}>
                    <h2>Platforms</h2>
                    {platforms.map(item => <li>{item.platform.name}</li>)}
                </ul>
            </Col>
        )
    } else {
        return null
    }
}