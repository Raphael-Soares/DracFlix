import React from "react";

import styled from "styled-components";

const Container = styled.li`
    display: flex;
    flex-direction: column;

    margin-right: 5px;

    &:hover {
        cursor: pointer;
    }
`;

const Cover = styled.img`
    border-radius: 0.2rem;
    width: 200px;
    height: 300px;
    object-fit: cover;
`;

const Card = styled.div`
    display: none;
`;

function MovieCover({ movie }) {
    return (
        <Container>
            <Cover src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <Card>
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.overview}</p>
            </Card>
        </Container>
    );
}

export default MovieCover;
