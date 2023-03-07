import { API_KEY } from "../utils/Keys";
import { useState, useEffect } from "react";
import MovieCover from "../components/MovieCover";

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #282a36;
`;

const Body = styled.div`
    padding-top: 10em;
    display: flex;
    align-items: center;

    flex-direction: column;
    margin-top: -4em;
    min-height: 100vh;
`;

const Message = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    margin-top: 1em;
`;

function MyList() {
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        const myList = JSON.parse(localStorage.getItem("myList"));

        if (myList) {
            setMyList(myList);
        }
    }, []);

    return (
        <Container>
            <Body>
                {myList.length > 0 ? (
                    myList.map((movie) => <MovieCover movies={movie} />)
                ) : (
                    <Message>No movies in your list</Message>
                )}
            </Body>
        </Container>
    );
}

export default MyList;
