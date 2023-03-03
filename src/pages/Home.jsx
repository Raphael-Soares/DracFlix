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
`;

const genres = [
    {
        title: "Trending Now",
        url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

    {
        title: "Top Rated",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        title: "Action Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
        title: "Comedy Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        title: "Horror Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
        title: "Romance Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        title: "Documentaries",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
];

function Home() {
    return (
        <Container>
            <Banner />
            <Body>
                {genres.map((genre) => (
                    <MovieTrack key={genre.title} genre={genre} />
                ))}
            </Body>
        </Container>
    );
}

export default Home;
