import React from "react";
import GameItem from "./gameItem"

export default function (props) {
    return (
        <ul className="gameList">
            {props.items.map(item => <GameItem item={item}/>)}
        </ul>
    )
}