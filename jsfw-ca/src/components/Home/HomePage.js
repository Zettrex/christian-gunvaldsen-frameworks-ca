import React, {useState, useEffect} from "react";
import GameList from "./components/gameList";
import SearchBar from "../SearchBar";

export default function () {
    const [state, setState] = useState({
        games: [],
        filteredGames: []
    });
    function searchTitle(event) {
        event.preventDefault();

        setState({
            games: state.games,
            filteredGames: state.games.filter(item => {
                console.log(new RegExp(event.target.value, "gi").test(item.name), new RegExp(event.target.value, "gi"), item.name);
                return new RegExp(event.target.value, "gi").test(item.name)
            })
        })
    }
    const apiUrl = "https://api.rawg.io/api/games";
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setState({
                games: json.results,
                filteredGames: json.results
            }))
            .catch(error => console.log(error));
    }, []);
    console.log(state.filteredGames, state.games);
    return (
        <main>
            <SearchBar filterF={event => searchTitle(event)}/>
            <GameList items={state.filteredGames}/>
        </main>
    )
}