import styled from "styled-components";

import { API_KEY } from "../utils/Keys";

import { useEffect, useState } from "react";
import axios from "axios";

import { MdPlayArrow, MdInfoOutline } from "react-icons/md";

const Container = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: inset 0px 0px 50px 1px rgb(0, 0, 0);

    background-blend-mode: overlay;
    background-color: #282a3640;

    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
`;

const GradientBridge = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(40, 42, 54, 1) 100%);
    height: 10em;
    width: 100%;
    margin-top: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    padding: 0 2em;

    height: 100%;
    width: 100%;
`;

const Title = styled.h1`
    text-align: left;
    max-width: 30%;
    font-size: 3em;
    font-weight: 700;
    color: #fff;
`;

const Button = styled.button`
    color: #fff;
    font-size: 1.2em;
    font-weight: 700;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.2em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonWatch = styled(Button)`
    background-color: #ffffff;
    color: #000;

    &:first-child {
        margin-right: 1em;
    }

    &:hover {
        background-color: #ffffff74;
    }
`;

const ButtonInfo = styled(Button)`
    background-color: #333;

    &:hover {
        background-color: #3333336b;
    }
    &:first-child {
        margin-right: 1em;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 1em;
`;

const Description = styled.p`
    color: #fff;
    text-align: left;
    max-width: 40%;
    max-height: 5em;
    font-size: 1.2em;
    font-weight: 400;
    color: #fff;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    overflow: hidden;
`;

function Banner() {
    const [banner, setBanner] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            .then((response) => {
                const random = Math.floor(Math.random() * response.data.results.length - 1);
                setBanner(response.data.results[random]);
            });
    }, []);

    return (
        <Container
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner?.backdrop_path})`,
            }}
        >
            <Content>
                <Title>{banner?.title || banner?.name || banner?.original_name}</Title>
                <Description>{banner?.overview}</Description>
                <ButtonContainer>
                    <ButtonWatch>
                        <MdPlayArrow />
                        Assistir
                    </ButtonWatch>
                    <ButtonInfo>
                        <MdInfoOutline />
                        Informações
                    </ButtonInfo>
                </ButtonContainer>
            </Content>
            <GradientBridge />
        </Container>
    );
}

export default Banner;
