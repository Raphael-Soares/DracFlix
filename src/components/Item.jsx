import React from "react";
import {Link} from "react-router-dom";
function Item({movie}) {
    return (
        <li key={movie.id}>
            <Link to={`movie/${movie.id}`}>{movie.title}</Link>
        </li>
    );
}

export default Item;
