import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCover from "./MovieCover";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Container = styled.div``;
const Title = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;

    padding-left: 2rem;
    margin-bottom: 1rem;
`;

const Wrapper = styled.div`
    overflow-x: hidden;
    position: relative;
`;
const Track = styled.ul`
    position: relative;
    display: flex;

    flex-direction: row;
    padding-left: 2rem;

    transition: all 1s ease;

    transform: translateX(0);
`;

const Control = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;

    border: none;
    background-color: rgba(27, 27, 27, 0.5);
    color: #fff;
    font-size: 2rem;

    cursor: pointer;
    transition: all 1s ease;

    &:hover {
        color: #fff;
    }
`;

function MovieSlider({ genre: { title, url } }) {
    const [movies, setMovies] = useState([]);

    const trackRef = useRef();

    async function fetchMovies() {
        const response = await axios.get(url);
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [url]);

    function handleScroll(direction) {
        let distance = trackRef.current.getBoundingClientRect().x;

        if (direction === "left" && distance < 0) {
            trackRef.current.style.transform = `translateX(${205 + distance}px)`;
        }

        if (
            direction === "right" &&
            distance > -(movies.length * 205 - trackRef.current.clientWidth)
        ) {
            trackRef.current.style.transform = `translateX(${-205 + distance}px)`;
        }
    }

    return (
        <Container>
            <Title>{title}</Title>

            <Wrapper>
                <Control style={{ left: 0 }} onClick={() => handleScroll("left")}>
                    <MdKeyboardArrowLeft />
                </Control>

                <Track ref={trackRef}>
                    {movies.map((movie, index) => (
                        <MovieCover key={movie.id} movie={movie} />
                    ))}
                </Track>

                <Control style={{ right: 0 }} onClick={() => handleScroll("right")}>
                    <MdKeyboardArrowRight />
                </Control>
            </Wrapper>
        </Container>
    );
}

export default MovieSlider;
