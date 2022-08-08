import {useState, useEffect, useContext} from "react";

import {MoviesContext} from "../contexts/MoviesData";

import Item from "../components/Item";

function Home() {
    const {movies, searchMovies, getPopularMovies, popularMovies} = useContext(MoviesContext);

    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        getPopularMovies();
    }, []);

    useEffect(() => {
        if (inputSearch.length > 0) {
            searchMovies(inputSearch);
        }
    }, [inputSearch]);

    return (
        <div>
            <input type="text" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
            <ul>{movies.length == 0 ? <h1>Loading</h1> : movies.map((movie) => <Item movie={movie} />)}</ul>

            <ul>
                {popularMovies.map((movie) => (
                    <Item movie={movie} />
                ))}
            </ul>
        </div>
    );
}

export default Home;
