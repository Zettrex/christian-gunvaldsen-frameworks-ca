import React, {useState, useEffect} from "react";
import GameList from "./components/gameList";
import SearchBar from "../SearchBar";
import "../../style/homePage.scss";

export default function () {
    const [state, setState] = useState({
        games: [],
        filteredGames: []
    });
    function searchTitle(event) {
        event.preventDefault();
        setState({
            ...state,
            filteredGames: state.games.filter(item => new RegExp(event.target.value, "gi").test(item.name))
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
        <main className={"pageWrapper row"}>
            <SearchBar filterF={event => searchTitle(event)}/>
            <GameList items={state.filteredGames}/>
        </main>
    )
}