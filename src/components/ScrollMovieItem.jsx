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
    border-radius: 0.1rem;
    width: 15em;
    height: 10em;
`;

function ScrollMovieItem({ movie }) {
    return (
        <Container>
            {/* get the backdrop image */}
            <Cover src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
        </Container>
    );
}

export default ScrollMovieItem;
