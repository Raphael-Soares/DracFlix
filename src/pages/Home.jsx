import { useState, useEffect, useContext } from "react";

import ScrollMovieItem from "../components/ScrollMovieItem";

import { MoviesContext } from "../contexts/MoviesData";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
`;

const Banner = styled.div`
    background-image: url("https://image.tmdb.org/t/p/original//8Y43POKjjKDGI9MH89NW0NAzzp8.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovieScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 1rem;
    gap: 1rem;
`;

function Home() {
    const { popularMovies, getPopularMovies } = useContext(MoviesContext);

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <Container>
            <Banner></Banner>
            <MovieScroll>
                {popularMovies.map((movie) => (
                    <ScrollMovieItem key={movie.id} movie={movie} />
                ))}
            </MovieScroll>
        </Container>
    );
}

export default Home;
