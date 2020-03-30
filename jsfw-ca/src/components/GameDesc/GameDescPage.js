import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function (props) {
    const [state, setState] = useState({
        game: {}
    });
    const {id} = useParams();
    const apiUrl = `https://api.rawg.io/api/games/${id}`;
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setState({
                game: json,
            }))
            .catch(error => console.log(error));
    },[apiUrl]);
    console.log(state.game);
    return (
        <div className={"row"}>
            <h1 className={"gameDescHeading"}>{state.game.name}</h1>
            <img className={"gameImg"} src={state.game.background_image} alt={"image of " + state.game.name}/>
            <div className={"gameDescWrapper col-d-7"}>
                {state.game.description_raw}
            </div>
            <div className={"col-d-3"}>
                <a className={"btn btn-primary"} href={state.game.website}>Link to Game</a>
                <div className={"gameInfo"}>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}