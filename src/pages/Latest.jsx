import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import requests from "../utils/Requests";
import { API_KEY } from "../utils/Keys";
import MovieSlider from "../components/MovieSlider";
import Banner from "../components/Banner";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #282a36;
`;

const Body = styled.div`
    padding-top: 10em;
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    min-height: 100vh;
`;

const genres = [
    {
        title: "New Releases",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-01-01&primary_release_date.lte=2021-12-31&language=en-US`,
    },
    {
        title: "Worth the wait",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31&language=en-US`,
    },
    {
        title: "Latest",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-12-31&language=en-US`,
    },
    {
        title: "Oldies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=1950-01-01&primary_release_date.lte=2010-12-31&language=en-US`,
    },
];

function Latest() {
    return (
        <Container>
            <Body>
                {genres.map((genre) => (
                    <MovieSlider key={genre.title} genre={genre} />
                ))}
            </Body>
        </Container>
    );
}

export default Latest;
