import React from "react";

import styled from "styled-components";

const Container = styled.li`
    display: flex;
`;

const Cover = styled.img`
    border-radius: 0.2rem;
    width: 200px;
    height: 300px;
    margin-right: 5px;
`;

function MovieCover({ movie }) {
    return (
        <Container>
            <Cover src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </Container>
    );
}

export default MovieCover;
