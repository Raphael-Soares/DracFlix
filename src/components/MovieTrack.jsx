import React from "react";
import styled from "styled-components";

import ScrollMovieItem from "./ScrollMovieItem";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 3em;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
`;

const Track = styled.ul`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    list-style: none;
    width: 100%;
    gap: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }
`;

function MovieTrack({ movies, title }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Track>
                {movies && movies.map((movie) => <ScrollMovieItem movie={movie} key={movie.id} />)}
            </Track>
        </Container>
    );
}

export default MovieTrack;
