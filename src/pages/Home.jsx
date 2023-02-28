import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import requests from "../utils/Requests";
import { API_KEY } from "../utils/Keys";
import MovieTrack from "../components/MovieTrack";
import Banner from "../components/Banner";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #282a36;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -4em;

    padding: 0 2rem;
`;

function Home() {
    const [data, setData] = useState([{ title: "Trending", movies: [] }]);

    useEffect(() => {
        const fetchData = async () => {
            const trending = await axios.get(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            );
            const topRated = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );
            const netflixOriginals = await axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
            );
            const action = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
            );
            const comedy = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
            );
            const horror = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
            );
            const romance = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
            );
            const mystery = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`
            );

            setData([
                { title: "Trending", movies: trending.data.results },
                { title: "Top Rated", movies: topRated.data.results },
                { title: "Netflix Originals", movies: netflixOriginals.data.results },
                { title: "Action", movies: action.data.results },
                { title: "Comedy", movies: comedy.data.results },
                { title: "Horror", movies: horror.data.results },
                { title: "Romance", movies: romance.data.results },
                { title: "Mystery", movies: mystery.data.results },
            ]);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Banner />
            <Body>
                {data &&
                    data.map((genre) => (
                        <MovieTrack key={genre.title} title={genre.title} movies={genre.movies} />
                    ))}
            </Body>
        </Container>
    );
}

export default Home;
