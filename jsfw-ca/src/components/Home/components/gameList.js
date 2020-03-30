import React from "react";
import GameItem from "./gameItem"
import PropTypes from 'prop-types';

export default function gameList({items}) {
    return (
        <ul className="gameList row">
            {items.map(item => <GameItem item={item}/>)}
        </ul>
    )
}

gameList.propTypes = {
    items: PropTypes.array.isRequired
};