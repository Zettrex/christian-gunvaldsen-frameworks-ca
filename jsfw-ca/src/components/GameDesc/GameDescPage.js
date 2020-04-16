import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GameGenres from "./components/GameGenres";
import GamePlatforms from "./components/GamePlatforms";
import {Row, Col} from "react-bootstrap";
import "../../style/gameDesc.scss"


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
        <div>
            <h1 className={"gameDescHeading"}>{state.game.name}</h1>
            <img className={"gameImg"} src={state.game.background_image} alt={"image of " + state.game.name}/>
            <Row className={"contentWrapper"}>
                <Col lg={8} md={6} className={"gameDescWrapper"}>
                    {state.game.description_raw}
                </Col>
                <Col lg={4} md={6} className={"gameInfo"}>
                    <a className={"btn btn-primary"} href={state.game.website}>Link to Game</a>
                    <Row className={"gameInfo"}>
                        <GameGenres genres={state.game.genres}/>
                        <GamePlatforms platforms={state.game.platforms}/>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}