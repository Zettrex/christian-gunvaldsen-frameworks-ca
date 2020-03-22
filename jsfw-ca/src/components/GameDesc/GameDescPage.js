import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function (props) {
    const [state, setState] = useState({
        game: []
    });
    const {id} = useParams();
    const apiUrl = "https://api.rawg.io/api/games/" + id;
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setState({game: json}))
            .catch(error => console.log(error));
    }, [apiUrl]);
    console.log(state.game);
    return (
        <div>
            <h1 className="gameHeading">{state.game.name}</h1>
            <img className="gameImg" src={state.game.background_image} alt={"image of " + state.game.name}/>
            <div className="gameDescWrapper">
                {state.game.description_raw.length > 1 ? state.game.description_raw.map(text => <p>{text}</p>) : state.game.description_raw}
            </div>
            <a href={state.game.website}>Link to Game</a>
        </div>
    )
}