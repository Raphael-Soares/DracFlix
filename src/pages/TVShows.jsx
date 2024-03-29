import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import requests from "../utils/Requests";
import { API_KEY } from "../utils/Keys";
import MovieSlider from "../components/MovieSlider";
import Banner from "../components/Banner";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #282a36;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    min-height: 100vh;
`;

const genres = [
    {
        title: "Comedy TV Shows",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
    },

    {
        title: "Documentaries",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
    },
    {
        title: "Romance TV Shows",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    },

    {
        title: "Crime TV Shows",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
    },
    {
        title: "Animation TV Shows",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`,
    },
    {
        title: "Mystery TV Shows",
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
    },
];

function TVShows() {
    const [banner, setBanner] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16&language=en-US`
            )
            .then((response) => {
                const random = Math.floor(Math.random() * response.data.results.length - 1);
                setBanner(response.data.results[random]);
            });
    }, []);
    return (
        <Container>
            <Banner banner={banner} />
            <Body>
                {genres.map((genre) => (
                    <MovieSlider key={genre.title} genre={genre} />
                ))}
            </Body>
        </Container>
    );
}

export default TVShows;
