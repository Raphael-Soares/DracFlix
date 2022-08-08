import {useContext, useState, useEffect} from "react";
import {MoviesContext} from "../contexts/MoviesData";

function Favorites() {
    const {favorites, movie, getMovie} = useContext(MoviesContext);

    useEffect(() => {
        favorites.forEach((id) => getMovie(id));
    }, []);
    return <div>{movie && movie.title}</div>;
}

export default Favorites;
