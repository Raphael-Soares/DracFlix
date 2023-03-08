import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NetflixAvatar from "../assets/Netflix-avatar.svg";

import { MdAdd } from "react-icons/md";

const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #282a36;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #f8f8f2;
    margin-bottom: 2rem;
`;

const List = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;

    align-items: center;
`;

const Icon = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconName = styled.span`
    font-size: 1.2rem;
    color: #f8f8f2;
    margin-top: 0.5rem;
    text-align: center;
`;

const IconImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 0.2em;
`;

const AddIcon = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 0.2em;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.div`
    width: 6em;
    height: 6em;
    border-radius: 3em;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #44475a;
`;

function ChoseProfile() {
    return (
        <Container>
            <Title>Who is watching?</Title>
            <Link to="/browse">
                <List>
                    <Icon>
                        <IconImage src={NetflixAvatar}></IconImage>
                        <IconName>Profile 1</IconName>
                    </Icon>
                    <Icon>
                        <IconImage src={NetflixAvatar}></IconImage>
                        <IconName>Profile 2</IconName>
                    </Icon>
                    <Icon>
                        <IconImage src={NetflixAvatar}></IconImage>
                        <IconName>Profile 3</IconName>
                    </Icon>
                    <Icon>
                        <IconImage src={NetflixAvatar}></IconImage>
                        <IconName>Profile 4</IconName>
                    </Icon>
                    <AddIcon>
                        <Circle>
                            <MdAdd size={100} color="#fff" />
                        </Circle>
                    </AddIcon>
                </List>
            </Link>
        </Container>
    );
}

export default ChoseProfile;
