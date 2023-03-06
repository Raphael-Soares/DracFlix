import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ScrollMovieItem from "./ScrollMovieItem";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const windowWidth = window.innerWidth;

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
    padding-left: 2rem;
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

    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
    padding-left: 2rem;
`;

const Control = styled.button`
    position: absolute;
    top: 2.2rem;
    background-color: transparent;

    height: calc(100% - 2.2rem);
    border: none;
    font-size: 5rem;
    color: transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #fff;
    }
`;

function MovieTrack({ genre: { title, url } }) {
    const [movies, setMovies] = useState([]);
    const [scroll, setScroll] = useState(0);

    async function fetchMovies() {
        const response = await axios.get(url);
        setMovies(response.data.results);
    }

    function scrollLeft() {
        trackRef.current.scrollLeft -= windowWidth;
    }

    function scrollRight() {
        trackRef.current.scrollLeft += windowWidth;
    }

    useEffect(() => {
        fetchMovies();
    }, [url]);

    return (
        <Container>
            <Title>{title}</Title>

            <Control style={{ left: 0 }} onClick={scrollLeft}>
                <MdKeyboardArrowLeft />
            </Control>

            <Control style={{ right: 0 }} onClick={scrollRight}>
                <MdKeyboardArrowRight />
            </Control>

            <Track>
                {movies.map((movie, index) => (
                    <ScrollMovieItem key={movie.id} movie={movie} />
                ))}
            </Track>
        </Container>
    );
}

export default MovieTrack;
