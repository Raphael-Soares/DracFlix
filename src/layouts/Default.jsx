import React from "react";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const scrollY = window.scrollY;

const Main = styled.main`
    overflow-x: hidden;
`;

function Default() {
    return (
        <Main>
            <Navbar scrollY={scrollY} />
            <Outlet />
            <Footer />
        </Main>
    );
}

export default Default;
