import React from "react";
import {Link} from "react-router-dom";

export default function (props) {
    return (
        <li className="gameItem">
            <h2>{props.item.name}</h2>
            <img src={props.item.background_image} alt={"image of " + props.item.name}/>
            <div>
                <span>{props.item.rating}</span>
                <span>{props.item.released}</span>
            </div>
            <Link to={"/game/" + props.item.id}>Read More</Link>
        </li>
    )
}