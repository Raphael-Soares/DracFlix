import React from "react";

import styled from "styled-components";

// import twitter icon from react-icon
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Container = styled.footer`
    background-color: #282a36;
    color: #fff;
    padding: 2rem 10rem;
    font-size: 0.8rem;
    display: flex;

    gap: 1rem;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.5rem;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 2rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const ListItem = styled.li`
    color: #fff;
`;

function Footer() {
    return (
        <Container>
            <IconContainer>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </IconContainer>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Services</ListItem>
                <ListItem>Portfolio</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Container>
    );
}

export default Footer;
