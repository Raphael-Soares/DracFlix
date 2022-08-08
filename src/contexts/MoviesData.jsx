// KEYS
const URL = "https://api.themoviedb.org/3/";
const API_KEY = "6ad10ff074f58f2a047fdc6302ab20f0";
const MOVIE_URL = "movie/";

// ----------------------------

import {createContext, useState, useEffect} from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);
    const [movieImage, setMovieImage] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    function favoriteMovie(movie) {
        setFavorites([...favorites, movie.id]);
    }

    function searchMovies(search) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
            .then((response) => response.json())
            .then((response) => setMovies(response.results))
            .catch((error) => console.log(error));
    }
    function getMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((response) => setMovie(response))
            .catch((error) => console.log(error));
    }

    function getMovieImage(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=6ad10ff074f58f2a047fdc6302ab20f0`)
            .then((response) => response.json())
            .then((response) => setMovieImage(response));
    }

    function getPopularMovies() {
        fetch(`${URL}movie/popular?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((response) => setPopularMovies(response.results))
            .catch((error) => console.log(error));
    }

    return (
        <MoviesContext.Provider
            value={{movies, movie, movieImage, favorites, popularMovies, getPopularMovies, favoriteMovie, searchMovies, getMovie, getMovieImage}}
        >
            {children}
        </MoviesContext.Provider>
    );
};
