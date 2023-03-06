import React from "react";

import styled from "styled-components";

import NetflixAvatar from "../assets/Netflix-avatar.svg";

const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #282a36;
`;

const List = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;

    align-items: center;
`;

const Icon = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 0.2em;
`;

function ChoseProfile() {
    return (
        <Container>
            <List>
                <Icon src={NetflixAvatar}></Icon>
                <Icon src={NetflixAvatar}></Icon>
                <Icon src={NetflixAvatar}></Icon>
                <Icon src={NetflixAvatar}></Icon>
            </List>
        </Container>
    );
}

export default ChoseProfile;
