import React from "react";

function Genre(props) {
    return (
        <div className="genre-item">
            <img src={props.item} alt={props.alt} />
            <p>{props.name}</p>
        </div>
    );
}

export default Genre;