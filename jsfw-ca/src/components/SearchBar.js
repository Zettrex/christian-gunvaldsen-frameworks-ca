import React from "react";

export default function (props) {
    return (
        <form className={"searchBar"}>
            <label htmlFor="search">Search</label>
            <input type="text" name={"search"} onChange={props.filterF} placeholder={"search"}/>
        </form>
    )
}