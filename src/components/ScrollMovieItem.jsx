import React from "react";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

function ScrollMovieItem({ movie }) {
    return (
        <Container>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
        </Container>
    );
}

export default ScrollMovieItem;
