import React from "react";
import GameItem from "./gameItem"
import PropTypes from 'prop-types';
import {Row} from "react-bootstrap";

export default function gameList({items}) {
    return (
        <ul className="gameList">
            <Row>
                {items.map(item => <GameItem item={item}/>)}
            </Row>
        </ul>
    )
}

gameList.propTypes = {
    items: PropTypes.array.isRequired
};