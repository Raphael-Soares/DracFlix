import React from "react";

import styled from "styled-components";

const Container = styled.li`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cover = styled.img`
    border-radius: 0.2rem;
    width: 200px;
    height: 300px;
`;

function ScrollMovieItem({ movie }) {
    return (
        <Container>
            <Cover src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </Container>
    );
}

export default ScrollMovieItem;
