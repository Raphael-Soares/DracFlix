import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { MdOutlineSearch, MdOutlineNotificationsNone } from "react-icons/md";

import styled from "styled-components";

const Container = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;
const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Logo = styled.h1`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 2rem;
    align-items: center;
`;
const ListLeft = styled(List)`
    margin-left: auto;
    gap: 1rem;
`;

const ListItem = styled.li`
    margin-left: 1rem;
    color: #fff;
`;

const ListItemIcon = styled(ListItem)`
    font-size: 2rem;
`;

function Navbar({ scrollY }) {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY);
        });
    }, []);

    return (
        <Container
            style={{
                backgroundColor: scroll > 0 ? "#282a36" : "transparent",
                transition: "all 0.5s ease",
            }}
        >
            <Logo>
                <Link to="/">MovieApp</Link>
            </Logo>
            <Menu>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Series</ListItem>
                    <ListItem>Filmes</ListItem>
                    <ListItem>Bombando</ListItem>
                    <ListItem>Minha Lista</ListItem>
                    <ListItem>Navegar por idiomas</ListItem>
                </List>
                <ListLeft>
                    <ListItemIcon>
                        <MdOutlineSearch />
                    </ListItemIcon>
                    <ListItem>Infantil</ListItem>
                    <ListItemIcon>
                        <MdOutlineNotificationsNone />
                    </ListItemIcon>
                </ListLeft>
            </Menu>
        </Container>
    );
}

export default Navbar;
