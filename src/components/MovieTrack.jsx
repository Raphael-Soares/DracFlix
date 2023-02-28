import React from "react";
import styled from "styled-components";

import ScrollMovieItem from "./ScrollMovieItem";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
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

function MovieTrack({ movies }) {
    return (
        <Container>
            <Title>Populares</Title>
            <Track>
                {movies.map((movie) => (
                    <ScrollMovieItem movie={movie} />
                ))}
            </Track>
        </Container>
    );
}

export default MovieTrack;
