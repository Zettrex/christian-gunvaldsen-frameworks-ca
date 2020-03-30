import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Col} from "react-bootstrap";

export default function gameItem({item}) {
    return (
        <Col lg={4} md={6} sm={12}>
            <li key={item.id} className="gameItem">
                <img key={`${item.id}-image`} className="gameImg BGImg" style={{backgroundImage: `url(${item.background_image})`}} alt={item.name}/>
                <h2 key={`${item.id}-name`} className="gameName">{item.name}</h2>
                <div key={`${item.id}-detailsWrapper`} className="gameDetails">
                    <span key={`${item.id}-rating`} className="gameRating">{item.rating}</span>
                    <span key={`${item.id}-release`} className="gameRelease">{item.released}</span>
                </div>
                <Link key={`${item.id}-link`} className="gameLink btn btn-primary" to={"/game/" + item.id}>Read More</Link>
            </li>
        </Col>
    )
}

gameItem.propTypes = {
    item: PropTypes.object.isRequired
};