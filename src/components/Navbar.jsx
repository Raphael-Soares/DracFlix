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

const ListItem = styled.li`
    margin-left: 1rem;
    color: #fff;
`;

const ListItemIcon = styled(ListItem)`
    font-size: 1.5rem;
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
            <Logo src={NetflixLogo} alt="Netflix" />

            <Menu>
                <List>
                    <ListItem>
                        <Link to="/browse">Home</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/tv-shows">TV Shows</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/movies">Movies</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/latest">New & Popular</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/my-list">My List</Link>
                    </ListItem>
                    <ListItem>About The Project</ListItem>
                </List>

                <List>
                    <ListItemIcon>
                        <MdOutlineSearch />
                    </ListItemIcon>

                    <ListItem>Kids</ListItem>

                    <ListItemIcon>
                        <MdOutlineNotificationsNone />
                    </ListItemIcon>

                    <AvatarItem>
                        <Avatar src={NetflixAvatar} alt="Netflix Avatar" />
                        <MdArrowDropDown />
                    </AvatarItem>
                </List>
            </Menu>
        </Container>
    );
}

export default Navbar;
