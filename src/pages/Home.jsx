import { useState, useEffect, useMemo, useCallback, lazy } from "react";
import axios from "axios";

import { API_KEY } from "../utils/Keys";
import MovieSlider from "../components/MovieSlider";
const Banner = lazy(() => import("../components/Banner"));

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #0f0f0f;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    min-height: 100vh;
`;

const genres = [
    {
        title: "Trending Now",
        url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

    {
        title: "Top Rated",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        title: "Action Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
        title: "Comedy Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        title: "Horror Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
        title: "Romance Movies",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        title: "Documentaries",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
];

function Home() {
    const [banner, setBanner] = useState("");

    useEffect(() => {
        fetchBanner();
    }, []);

    const fetchBanner = useCallback(async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=pt-BR`
        );

        const random = Math.floor(Math.random() * response.data.results.length - 1);
        setBanner(response.data.results[random]);
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

export default Home;
