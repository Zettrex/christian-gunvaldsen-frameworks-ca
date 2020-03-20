import React, {useState, useEffect} from "react";
import GameList from "./components/gameList";

export default function (props) {
    const [state, setState] = useState({
        games: []
    });

    const apiUrl = "https://api.rawg.io/api/games";
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setState({games: json.results}))
            .catch(error => console.log(error));
    }, []);
    console.log(state.games);
    return (
        <GameList items={state.games}/>
    )
}