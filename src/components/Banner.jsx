import styled from "styled-components";

const Container = styled.div`
    background-image: url("https://image.tmdb.org/t/p/original//8Y43POKjjKDGI9MH89NW0NAzzp8.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: inset 0px 0px 50px 1px rgb(0, 0, 0);

    background-blend-mode: overlay;
    background-color: #282a3640;

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const GradientBridge = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(40, 42, 54, 1) 100%);
    height: 10em;
    width: 100%;
    margin-top: auto;
`;

function Banner() {
    return (
        <Container>
            <GradientBridge />
        </Container>
    );
}

export default Banner;
