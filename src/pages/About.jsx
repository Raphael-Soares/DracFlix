import React from "react";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;

    background-color: #282a36;
    padding: 0 2rem;
    padding-top: 5rem;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;

    margin: 1rem 0;
`;

function About() {
    return (
        <Container>
            <Paragraph>
                Welcome to the "About" page of our project! We are excited to share more about our
                creation with you. Our project is a visual clone of the Netflix main pages, with a
                completely different look.
            </Paragraph>

            <Paragraph>
                We were inspired by the Dracula Theme, a popular color scheme for developers, to
                create a dark and mysterious environment.
            </Paragraph>
            <Paragraph>
                To build this project, we used two amazing tools: React and Styled Components. React
                is a widely used JavaScript library for building interactive user interfaces. Styled
                Components allowed us to write styles for our React components in a much more
                readable and intuitive format. Our goal with this project was to create a unique and
                exciting video streaming experience.
            </Paragraph>
            <Paragraph>
                Please note that our project is a visual clone of the main pages and does not have
                all the functionalities. We hope you enjoy what we have built. If you have any
                feedback, please do not hesitate to contact us. Thank you for visiting our "About"
                page and we hope you enjoy our project as much as we enjoyed creating it!
            </Paragraph>

            <Paragraph>
                Thank you for your interest in our project! We are currently in the development and
                improvement stage, and any help would be greatly appreciated. If you are a developer
                or have skills in areas such as design, UX, or testing, please feel free to reach
                out to us through our email soaresphaell@gmail.com page. We welcome any suggestions
                or feedback that could help us improve the project.
            </Paragraph>
        </Container>
    );
}

export default About;
