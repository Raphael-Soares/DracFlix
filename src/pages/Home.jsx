import { useState, useEffect } from "react";

import ScrollMovieItem from "../components/ScrollMovieItem";
import MovieTrack from "../components/MovieTrack";

import { URL, API_KEY } from "../utils/constants";

import axios from "axios";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #282a36;
`;

const Banner = styled.div`
    background-image: url("https://image.tmdb.org/t/p/original//8Y43POKjjKDGI9MH89NW0NAzzp8.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    background-blend-mode: overlay;
    background-color: #282a3640;

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const GradientBridge = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(40, 42, 54, 1) 100%);
    height: 10em;
    width: 100%;
    margin-top: auto;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    height: 100em;
    padding: 0 2rem;
`;

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => {
                setMovies(response.data.results);
                console.log(response.data.results);
            });
    }, []);

    return (
        <Container>
            <Banner>
                <GradientBridge></GradientBridge>
            </Banner>
            <Body>
                <MovieTrack movies={movies} />
            </Body>
        </Container>
    );
}

export default Home;
