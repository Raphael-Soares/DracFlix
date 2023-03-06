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
    min-height: 100vh;
`;

const genres = [
    {
        title: "Action",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    },
    {
        title: "Comedy",

        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    },
    {
        title: "Horror",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    },

    {
        title: "Romance",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    },
    {
        title: "Mystery",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`,
    },
];

function Movies() {
    const [banner, setBanner] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`
            )
            .then((response) => {
                const random = Math.floor(Math.random() * response.data.results.length - 1);
                setBanner(response.data.results[random]);
            });
    }, []);
    return (
        <Container>
            <Banner banner={banner} />
            <Body>
                {genres.map((genre) => (
                    <MovieTrack key={genre.title} genre={genre} />
                ))}
            </Body>
        </Container>
    );
}

export default Movies;
