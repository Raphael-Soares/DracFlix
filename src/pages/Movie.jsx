import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../contexts/MoviesData";

function Movie() {
    const { id } = useParams();
    const { movie, getMovie, favoriteMovie, movieImage, getMovieImage } = useContext(MoviesContext);

    useEffect(() => {
        getMovie(id);
        getMovieImage(id);
    }, [id]);

    return (
        <div>
            {movie && (
                <div className="movie">
                    {movieImage && (
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movieImage.posters[0].file_path}`}
                            alt={movie.title}
                            className="movie__image"
                        />
                    )}
                    <div className="movie__info">
                        <div className="movie__title">
                            {movie.title} <button onClick={() => favoriteMovie(movie)}>Fav</button>
                        </div>
                        <div className="movie__release">{movie.release_date.slice(0, 4)}</div>
                        <div className="movie__genre">
                            {movie.genres.map((genre) => genre.name + ", ")}
                        </div>
                        <div className="movie__overview">{movie.overview}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;
