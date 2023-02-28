import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { MdOutlineSearch, MdOutlineNotificationsNone, MdArrowDropDown } from "react-icons/md";
import NetflixLogo from "../assets/Netflix_logo.svg";
import NetflixAvatar from "../assets/Netflix-avatar.svg";

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

const Logo = styled.img`
    width: 5rem;
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

const Avatar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 0.2em;
`;

const AvatarItem = styled(ListItem)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
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
                background: scroll > 0 ? "#282a36" : "transparent",
                transition: "all 0.5s ease",
            }}
        >
            <Link to="/">
                <Logo src={NetflixLogo} alt="Netflix" />
            </Link>
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
                    <AvatarItem>
                        <Avatar src={NetflixAvatar} alt="Netflix Avatar" />
                        <MdArrowDropDown />
                    </AvatarItem>
                </ListLeft>
            </Menu>
        </Container>
    );
}

export default Navbar;
