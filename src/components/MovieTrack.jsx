import React from "react";
import styled from "styled-components";

import ScrollMovieItem from "./ScrollMovieItem";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 3em;
    position: relative;
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

const Control = styled.button`
    position: absolute;
    top: 2.2rem;

    height: calc(100% - 2.2rem);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
    }
`;

function MovieTrack({ movies, title }) {
    return (
        <Container>
            <Title>{title}</Title>

            <Track>
                {movies && movies.map((movie) => <ScrollMovieItem movie={movie} key={movie.id} />)}
            </Track>

            <Control
                style={{
                    left: 0,
                    background: "linear-gradient(80deg, #000000 0%, rgba(0,0,0,0) 100%)",
                }}
            >
                <MdKeyboardArrowLeft />
            </Control>

            <Control
                style={{
                    right: 0,
                    background: "linear-gradient(270deg, #000000 0%, rgba(0,0,0,0) 100%)",
                }}
            >
                <MdKeyboardArrowRight />
            </Control>
        </Container>
    );
}

export default MovieTrack;
